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
      res.json(tips);
    });
  }

  allTipsForRound = (req, res) => {
    const { roundId } = req.params;
    this.model.aggregate([
      { $match: { roundId: ObjectId(roundId)} },
      { $lookup: { from: 'users', localField: 'ownerId', foreignField: '_id', as: 'user_data' }},
      { $project: { 'user_data.username': 1, 'tips': 1}},
      { $unwind: '$user_data'}
    ], (err, tips) => {
      console.log('tips', tips);
      res.json(tips);
    });
  }
}
