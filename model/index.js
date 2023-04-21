const mongoose = require('mongoose')
const { dbUri } = require('../config/config.default')

// 连接 MongoDB 数据库
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

// 当连接失败的时候
db.on('error', err => {
  console.log('MongonDB 数据库连接失败', err)
})

// 当连接成功的时候
db.once("open", function () {
  console.log("数据库连接成功！！！")
});

// 组织导出模型类
// 到数据库里面是 users
module.exports = {
  // User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}