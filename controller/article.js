const { Article } = require('../model')

// 获取文章详情
exports.articleDetailGet = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId)
    if (!article) {
      return res.status(404).end()
    }
    res.status(200).json({
      article
    })
  } catch (error) {
    next(error)
  }
}

// 获取文章列表
exports.articleListGet = async (req, res, next) => {
  try {
    // console.log('req.query', req.query)
    const {
      sortBy,
      toggleSort,
      pageSize,
      currentPage
    } = req.query
    const sortFilter = {}
    sortFilter[`${sortBy}`] = toggleSort
    // console.log('sortFilter', sortFilter)
    const total = await Article.count()
    const articleList = await Article.find({}, 'title createAt likes comments').skip((currentPage - 1) * pageSize).limit(pageSize).sort(sortFilter)
    if (!articleList) {
      return res.status(404).end()
    }
    res.status(200).json({
      articleList,
      total
    })
  } catch (error) {
    next(error)
  }
}

// 给文章点赞
exports.articleLikePost = async (req, res, next) => {
  try {
    // console.log('req.params', req.params)
    // console.log('req.body', req.body)
    await Article.findByIdAndUpdate(req.params.articleId, { "likes": req.body.likes })
    res.status(200).json({
      code: 200
    })
  } catch (error) {
    next(error)
  }
}

// 获取文章总数
exports.articleTotalGet = async (req, res, next) => {
  try {
    const total = await Article.count()
    res.status(200).json({
      total
    })
  } catch (error) {
    next(error)
  }
}

// 测试表单
exports.testFormPost = async (req, res, next) => {
  console.log('req.body', req.body)
  res.status(200).json({
    abc: 123
  })
}