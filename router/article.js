const express = require('express')
const router = express.Router()
const { getArticle } = require('../controller/article')

router.get('/:articleId', getArticle)
module.exports = router