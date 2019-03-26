import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tipSchema = new Schema({
  tips: Array,
  total: Number,
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  roundId: {
    type: Schema.Types.ObjectId,
    ref: 'round'
  },
  year: {
    type: Number,
    default: function() {
      const date = new Date();
      return date.getFullYear();
    }
  }
});

const Tip = mongoose.model('Tip', tipSchema);

export default Tip;
