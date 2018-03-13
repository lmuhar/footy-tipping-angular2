import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tipSchema = new Schema({
    tips: Array,
    total: Number,
    userId: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Tip = mongoose.model('Tip', tipSchema);

export default Tip;
