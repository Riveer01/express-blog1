const mongoose = require('mongoose')
const { dbUri } = require('./config/config.default')
const { Article, Comment, User } = require('./model')

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

// 创建文章
async function createArticle() {
  const comment1 = new Comment({
    content: '你真的好帅哈哈哈    ',
  })
  const comment2 = new Comment({
    content: '哈哈哈   hei你好 ',
  })
  const comment3 = new Comment({
    content: '明天会天晴',
  })
  const comment4 = new Comment({
    content: '明天会下雨',
  })
  const comment5 = new Comment({
    content: '我们一起跑步',
  })
  const article = new Article({
    title: '数值分析难点分析',
    description: 'JavaScript高级教程的描述部分',
    rawHtml: `<h1 data-v-4cf1c308="" id="h_1">1 JavaScript基本语法</h1> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <div data-v-4cf1c308="" class="article-page-text-code"><pre data-v-4cf1c308=""><code class="hljs javascript"><span class="hljs-comment">// npm i vue element-ui axios</span>
<span class="hljs-comment">// npm i -D webpack webpack-cli vue-loader vue-template-compiler sass-loader sass css-loader style-loader babel-loader @babel/core @babel/preset-env</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'./App.vue'</span>
<span class="hljs-keyword">import</span> router <span class="hljs-keyword">from</span> <span class="hljs-string">'./router'</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ElementUI</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'element-ui/lib/theme-chalk/index.css'</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Antd</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'ant-design-vue'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'ant-design-vue/dist/antd.css'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'@/assets/font/index.css'</span>
<span class="hljs-keyword">import</span> highlightPlugin <span class="hljs-keyword">from</span> <span class="hljs-string">'@highlightjs/vue-plugin'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'highlight.js/styles/github-dark-dimmed.css'</span>
<span class="hljs-comment">// import 'highlight.js/styles/googlecode.css'</span>
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(highlightPlugin)

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ElementUI</span>)
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Antd</span>)

<span class="hljs-title class_">Vue</span>.<span class="hljs-property">config</span>.<span class="hljs-property">productionTip</span> = <span class="hljs-literal">false</span>
<span class="hljs-keyword">new</span> <span class="hljs-title class_">Vue</span>({
<span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> <span class="hljs-title function_">h</span>(<span class="hljs-title class_">App</span>),
router
}).$mount(<span class="hljs-string">'#app'</span>)
</code></pre> <img data-v-4cf1c308="" code-index="0" src="http://127.0.0.1:9724/4dbe9c7b07ebab1f9b24.svg" alt="" class="copy-icon"></div> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <h2 data-v-4cf1c308="" id="h_1_1">1.1 JavaScript常见错误</h2> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <h3 data-v-4cf1c308="" id="h_1_1_1">1.1.1 JavaScript常见错误</h3> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p> <div data-v-4cf1c308="" class="article-page-text-code"><pre data-v-4cf1c308=""><code class="hljs javascript"><span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
<span class="hljs-keyword">let</span> y = <span class="hljs-number">10</span>;
<span class="hljs-keyword">let</span> obj = {
<span class="hljs-attr">age</span>: <span class="hljs-number">12</span>,
<span class="hljs-attr">name</span>: <span class="hljs-string">'lihao'</span>
}</code></pre> <img data-v-4cf1c308="" code-index="1" src="http://127.0.0.1:9724/4dbe9c7b07ebab1f9b24.svg" alt="" class="copy-icon"></div> <div data-v-4cf1c308="" class="article-page-text-code"><pre data-v-4cf1c308=""><code class="hljs javascript"><span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
<span class="hljs-keyword">let</span> y = <span class="hljs-number">10</span>;
<span class="hljs-keyword">let</span> obj = {
<span class="hljs-attr">age</span>: <span class="hljs-number">12</span>,
<span class="hljs-attr">name</span>: <span class="hljs-string">'lihao'</span>
}</code></pre> <img data-v-4cf1c308="" code-index="1" src="http://127.0.0.1:9724/4dbe9c7b07ebab1f9b24.svg" alt="" class="copy-icon"></div> <p data-v-4cf1c308="">
    但实际上，这里存在一个BUG，意识形态（民主）是意识形态，市场（MARKET）就是市场,为什么理所当然的认为一个“市场化”的东西需要被“意识形态”所来界定？特别是，你如何在这个多元化的世界中证明你基于意识形态的“市场判断”是具有“民主性”和“普世性”的？
  </p>`,
    codes: [`// npm i vue element-ui axios
// npm i -D webpack webpack-cli vue-loader vue-template-compiler sass-loader sass css-loader style-loader babel-loader @babel/core @babel/preset-env
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/font/index.css'
import highlightPlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/github-dark-dimmed.css'
// import 'highlight.js/styles/googlecode.css'
Vue.use(highlightPlugin)

Vue.use(ElementUI)
Vue.use(Antd)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
`,
      `let x = 5;
let y = 10;
let obj = {
  age: 12,
  name: 'lihao'
}`,
      `let x = 5;
let y = 10;
let obj = {
  age: 12,
  name: 'lihao'
}`
    ],
    createAt: new Date(Date.now()),
    likes: 12,
    comments: [comment1, comment2, comment3, comment4, comment5]
  })
  try {
    await comment1.save()
    await comment2.save()
    await comment3.save()
    await comment4.save()
    await comment5.save()
    await article.save()
    console.log('创建文章成功')
  } catch (error) {
    console.log('error', error)
  }
}

createArticle()