import Ladder from '../models/scraped-ladder';
import BaseCtrl from './base';

export default class LadderCtrl extends BaseCtrl {
    model = Ladder;

    getLatestLadder = (req, res) => {
        this.model.aggregate([
            { $group: { _id: { id: { $max: '$_id' }, data: '$data' } } },
            { $sort: { '_id.id': -1 } },
            { $limit: 1 }
        ], (err, data) => {
            if (err) { return console.log(err); }
            if (data[0] && data[0]._id) {
                res.json(data[0]._id.data);
            } else {
                res.sendStatus(404);
            }
        });
    }
}
