const express = require('express')
const router = express.Router()
// 文章相关路由
router.use('/articles', require('./article'))
module.exports = router