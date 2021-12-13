const mongoose = require('mongoose')

const MsgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
  },
  thumbUp: {
    type: Number,
    required: true,
  },
  thumbDown: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Messages', MsgSchema)
