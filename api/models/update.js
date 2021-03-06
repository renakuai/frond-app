const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpdateSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      maxLength: 500
    },
    img: {
      type: String,
      maxLength: 150
    },
    author: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)


module.exports = mongoose.model('Update', UpdateSchema)