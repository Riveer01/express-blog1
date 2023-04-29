const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: { // 评论内容
    type: String,
    minLength: [1, '评论不能为空！'],
    maxLength: [100, '超出最大字符数100！'],
    trim: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quoteFromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createAt: {
    type: Date,
    required: true
  }
})