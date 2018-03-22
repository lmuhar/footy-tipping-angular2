import Tip from '../models/tips';
import BaseCtrl from './base';

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
    this.model.find({ roundId: roundId }, (err, tips) => {
      if (!tips) {
        return res.sendStatus(404);
      }
      res.json(tips);
    });
  }
}
