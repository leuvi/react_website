module.exports = () => {
  const url = 'http://cv.sweetui.com/online'
  const conf = {
    url,
    //环境名称
    envName: '生产环境',
    //redis集群配置
    redisNodes: {

    }
  }
  return conf
}