const mongoose = require('mongoose')
const baseModel = require('./base-model')
// const { Schema } = mongoose

const articleSchema = new mongoose.Schema({
  ...baseModel,
  // title: {
  //   type: String,
  //   required: true
  // },
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
  // tagList: {
  //   type: [String],
  //   default: null
  // },
  // favoritesCount: {
  //   type: Number,
  //   default: 0
  // },
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
})

module.exports = articleSchema