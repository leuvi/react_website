//环境配置
let runConf = {}
const run_env = process.env.run_env || 'local'

try {
  runConf = require(`./${run_env}`)()
  runConf.page_hash = Date.now()
} catch (e) {
  console.log('\x1b[31m%s\x1b[0m', `Nodejs => 未找到 ${run_env} 对应的配置`)
  process.exit(1)
}

module.exports = runConf