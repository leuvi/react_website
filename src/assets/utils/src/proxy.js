import axios from 'axios'

export default function proxy(options = {}) {
  let header = {
    'Content-type': 'application/x-www-form-urlencoded',
  }

  let url = options.url

  if (options.pathParams) {
    for (let key in options.pathParams) {
      url += `/${options.pathParams[key]}`
    }
  }

  if (options.pathQuery) {
    url += '?'
    for (let key in options.pathQuery) {
      url += `${key}=${options.pathQuery[key]}&`
    }
    url = url.substring(0, url.length - 1)
  }

  let config = {
    url: url,
    data: options.data,
    //root: options.root ? options.root : 'basic',
    method: options.method,
  }

  // 默认header
  if (options.header) {
    for (let key in options.header) {
      header[key] = options.header[key]
    }
  }
  // 使用Content-type=json
  if (options.jsonHeader) {
    header['Content-type'] = 'application/json'
  }
  config.header = header

  return axios.post('/proxy', config)
}