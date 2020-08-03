import * as dotenv from 'dotenv';
import * as discordWebhook from 'webhook-discord';
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

import User from '../models/user';
import Tip from '../models/tips';
import Round from '../models/rounds';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        return res.sendStatus(403);
      }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) {
          return res.sendStatus(403);
        }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  };

  newTipsUser = (req, res) => {
    const { id, roundId } = req.params;
    const discordUrl = process.env.DISCORD_URL;
    const hook = new discordWebhook.Webhook(discordUrl);
    // Create a new tip
    const newTip = new Tip(req.body);
    // Get User
    const user = this.model.findOne({ _id: id }, (err, user) => {
      if (!user) {
        return res.sendStatus(403);
      }
      Round.findOne({ _id: roundId }, (err, round) => {
        if (!round) {
          return res.sendStatus(403);
        }
        newTip.roundId = round;
        newTip.ownerId = user;
        newTip.save(() => {
          user.tips.push(newTip);
          user.save();
          res.status(201).json(newTip);

          const msg = new discordWebhook.MessageBuilder()
            .setName('Spideybot')
            .setColor('#aabbcc')
            .setText(`Tips saved for ${user.username} - Round ${round.number}`)
            .setTime();
          hook.send(msg);
        });
      });
    });
  };

  userTipTotal = (req, res) => {
    const year = new Date().getFullYear();
    this.model.aggregate(
      [
        { $lookup: { from: 'tips', localField: '_id', foreignField: 'ownerId', as: 'tip_data' } },
        { $project: { 'tip_data.total': 1, 'tip_data.year': 1, username: 1 } }
      ],
      (err, data) => {
        data.map(user => {
          let total = 0;
          user.tip_data.map(tip => {
            if (tip.total !== undefined) {
              if (tip.year === year) {
                total = total + tip.total;
              }
            }
          });
          user.total = total;
        });
        res.json(data);
      }
    );
  };

  getUserEmails = (req, res) => {
    this.model.find({}, ['email'], (err, docs) => {
      if (err) {
        return console.error(err);
      }
      res.json(docs);
    });
  };
}
