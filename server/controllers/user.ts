import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import Tip from '../models/tips';
import Round from '../models/rounds';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  newTipsUser = (req, res) => {
    const { id, roundId } = req.params;
    // Create a new tip
    const newTip = new Tip(req.body);
    // Get User
    const user = this.model.findOne({_id: id}, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      Round.findOne({_id: roundId }, (err, round) => {
        if (!round) { return res.sendStatus(403); }
        newTip.roundId = round;
        newTip.ownerId = user;
        newTip.save(() => {
          user.tips.push(newTip);
          user.save();
          res.status(201).json(newTip);
        })
      })
    });
  }
}
