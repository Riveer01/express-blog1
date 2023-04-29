const express = require('express')
const router = express.Router()
const {
  articleDetailGet,
  articleListGet,
  articleLikePost,
  articleTotalGet,
  testFormPost
} = require('../controller/article')

// 获取文章列表
router.get('/articlelist', articleListGet)
// 获取文章总数
router.get('/articleTotal', articleTotalGet)
// 测试表单
router.post('/testForm', testFormPost)
// 获取id对应的文章
router.get('/:articleId', articleDetailGet)
// 给id对应的文章点赞
router.post('/:articleId/like', articleLikePost)
module.exports = router