const Router = require('koa-router')
const router = new Router()
const {
  sleep,
  proxyApi,
} = require('./tool')
const runConf = require('../server/runConf')

router.post('/proxy', async (ctx, next) => {
  const params = ctx.request.body
  const options = {
    //url: 'https://cnodejs.org/api/v1/topics',
    url: `${runConf.url}/${params.url.replace(/^\//, '')}`,
    method: params.method,
    headers: params.header,
    data: params.data
  }
  ctx.body = await proxyApi(options)
})

//加载基础信息
router.post('/baseConfig', async (ctx, next) => {
  
})
//更新基础信息
router.post('/updateBaseConfig', async (ctx, next) => {
  
})
//清除基础信息
router.post('/clearBaseConfig', async (ctx, next) => {
  
})

//渲染模板
router.get('/*', async (ctx, next) => {
  try {
    await ctx.render('index')
  } catch (e) {
    console.log(e)
    ctx.type = 'json'
    ctx.body = {
      code: '20000',
      message: '服务器错误'
    }
  }
})

module.exports = router