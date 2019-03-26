import * as mongoose from 'mongoose';

const roundSchema = new mongoose.Schema({
  number: Number,
  dateStart: Date,
  dateEnd: Date,
  games: [
    {
      homeTeam: String,
      awayTeam: String,
      location: String,
      dateTime: Date,
      time: String,
      result: Number
    }
  ],
  year: {
    type: Number,
    default: function() {
      const date = new Date();
      return date.getFullYear();
    }
  },
  completed: Boolean
});

const Round = mongoose.model('Round', roundSchema);

export default Round;
