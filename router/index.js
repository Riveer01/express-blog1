const express = require('express')
const router = express.Router()
// 文章相关路由
router.use('/article', require('./article'))
module.exports = router