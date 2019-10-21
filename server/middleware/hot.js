const webpack = require('webpack')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('koa-webpack-hot-middleware')
const config = require('../../config')
const compiler = webpack(config(process.env.node_env))

module.exports = {
  webpackDevMiddleware: webpackDevMiddleware(compiler, {
    noInfo: true
  }),
  webpackHotMiddleware: webpackHotMiddleware(compiler)
}