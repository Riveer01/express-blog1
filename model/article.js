const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rawHtml: {
    type: String,
    required: true
  },
  codes: {
    type: [String],
    default: null
  },
  createAt: {
    type: Date,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = articleSchema