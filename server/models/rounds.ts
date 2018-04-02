import * as mongoose from 'mongoose';

const roundSchema = new mongoose.Schema({
    number: Number,
    dateStart: Date,
    dateEnd: Date,
    games: [{
        homeTeam: String,
        awayTeam: String,
        location: String,
        dateTime: Date,
        time: String,
        result: Number
    }],
    completed: Boolean
});

const Round = mongoose.model('Round', roundSchema);

export default Round;
