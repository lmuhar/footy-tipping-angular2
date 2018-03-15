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
        time: String
    }]
});

const Round = mongoose.model('Round', roundSchema);

export default Round;
