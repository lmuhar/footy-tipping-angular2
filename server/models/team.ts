import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: String,
    value: String
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
