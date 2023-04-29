const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: [3, '昵称最少3个字符！'],
    maxLength: [10, '昵称最多10个字符！'],
    trim: true
  },
  email: {
    type: String
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})