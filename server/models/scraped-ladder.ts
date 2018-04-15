import * as mongoose from 'mongoose';

const ladderSchema = new mongoose.Schema({
    data: []
});

const Ladder = mongoose.model('Ladder', ladderSchema);

export default Ladder;
