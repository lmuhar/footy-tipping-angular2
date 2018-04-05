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
}
