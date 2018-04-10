import Round from '../models/rounds';
import BaseCtrl from './base';

export default class RoundCtrl extends BaseCtrl {
    model = Round;

    getWithIdAndNumber = (req, res) => {
        this.model.find({}, ['_id', 'number', 'dateStart'], (err, docs) => {
            if (err) { return console.error(err); }
            res.json(docs);
        });
    }

    getRoundTotal = (req, res) => {
        this.model.aggregate([
            { $match: { 'completed': true } },
            { $group: { _id: { id: '$_id', dateEnd: { $max: '$dateEnd' }, number: '$number' } } },
            { $sort: { '_id.dateEnd': -1 } },
            { $limit: 1 }
        ], (err, data) => {
            if (err) {return console.log(err); }
            res.json(data);
        });
    }
}
