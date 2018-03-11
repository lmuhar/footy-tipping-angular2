import * as mongoose from 'mongoose';

const tipSchema = new mongoose.Schema({
    tips: Array,
    total: Number,
    userId: String
});

const Tip = mongoose.model('Tip', tipSchema);

export default Tip;