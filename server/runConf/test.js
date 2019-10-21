module.exports = () => {
  const url = 'http://192.168.31.57:3071/test'
  const conf = {
    url,
    //环境名称
    envName: '测试环境',
    //redis集群配置
    redisNodes: {

    }
  }
  return conf
}