module.exports = () => {
  const url = 'http://cv.sweetui.co/dev'
  const conf = {
    url,
    //环境名称
    envName: '开发环境',
    //redis集群配置
    redisNodes: {

    }
  }
  return conf
}