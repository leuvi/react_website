const request = require('request')

module.exports = {
  sleep: function (time) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), time)
    })
  },
  proxyTable: {
    '/api/test': {
      target: `http://192.168.31.57:3071`,
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        console.log(proxyReq.method, proxyReq.path)
        proxyReq.setHeader('x-added', 'foobar');
      },
      onProxyRes(proxyRes, req, res) {
        proxyRes.headers['x-added'] = 'foobar'; // add new header to response
        delete proxyRes.headers['x-removed']; // remove header from response
      },
    }
  },
  proxyApi: function (options) {
    return new Promise((resolve, reject) => {
      console.log(options.method.toUpperCase())
      let params = {}
      if (options.method.toUpperCase() !== 'POST' || options.method.toUpperCase() !== 'PUT') {
        params = {
          url: options.url,
          method: options.method,
          headers: options.headers,
          qs: options.data
        }
      } else {
        params = {
          url: options.url,
          method: options.method,
          headers: options.headers,
          json: options.data
        }
      }
      request(params, function (error, response, body) {
        if (response && response.statusCode == 200) {
          resolve({
            params,
            msg: response,
            data: body
          })
        } else {
          resolve({
            params,
            msg: '请求失败',
            data: response
          })
        }
      })
    })
  }
}