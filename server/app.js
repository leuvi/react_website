const koa = require('koa')
const app = new koa()
const middleware = require('./middleware')

middleware(app)

const IP = require('ip')
const package = require('../package.json')
const PORT = process.env.port || package.port || 3082

app.listen(PORT, () => {
  console.log('\x1b[35m%s\x1b[0m', `${package.description}`)
  console.log('\x1b[35m%s\x1b[0m', `项目已启动 => http://${IP.address()}:${PORT}`)
  console.log('\x1b[35m%s\x1b[0m', `当前环境   => ${require('./runConf').envName}`)
})