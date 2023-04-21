const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
require('./model')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const PORT = process.env.PORT || 3000
// 挂载路由
app.use('/api', router)
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})