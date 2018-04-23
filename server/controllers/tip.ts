import Tip from '../models/tips';
import BaseCtrl from './base';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

export default class TipCtrl extends BaseCtrl {
  model = Tip;

  userTipsByRound = (req, res) => {
    const { userId, roundId } = req.params;
    this.model.findOne({ ownerId: userId, roundId: roundId }, (err, tips) => {
      if (!tips) {
        return res.sendStatus(404);
      }
      res.status(200).json(tips);
    });
  }

  allTipsForRound = (req, res) => {
    const { roundId } = req.params;
    this.model.aggregate([
      { $match: { roundId: ObjectId(roundId)} },
      { $lookup: { from: 'users', localField: 'ownerId', foreignField: '_id', as: 'user_data' }},
      { $project: { 'user_data.username': 1, 'tips': 1, 'total': 1}},
      { $unwind: '$user_data'}
    ], (err, tips) => {
      if (err) { return res.sendStatus(404); }
      res.status(200).json(tips);
    });
  }

  updateTipsWithResults = (req, res) => {
    const { roundId } = req.params;
    const games = req.body;
    this.model.find({roundId: roundId}, (err, tips) => {
      if (!tips) {
        return res.sendStatus(404);
      }
      tips.forEach((tip) => {
        let total = 0;
        let i = 0;
        tip.tips.forEach((t) => {
          if (t === games[i].result) {
            total = total + 1;
          }
          i++;
        });
        tip.total = total;
        tip.save();
      });
      res.sendStatus(200);
    });
  }
}
