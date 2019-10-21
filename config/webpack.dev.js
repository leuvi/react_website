const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./base')

const rootUrl = url => path.resolve(process.cwd(), url)


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', rootUrl('src/index.js')],
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader',
        options: {
          strictMath: true,
          noIeCompat: true
        }
      }, {
        loader: 'style-resources-loader', //引入Less全局变量
        options: {
          patterns: rootUrl('src/assets/less/vars.less'),
          injector: 'append'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      mode: 'dev',
      filename: 'index.html',
      template: rootUrl('src/index.html'),
      favicon: rootUrl('favicon.ico')
    }),
    //当开启 HMR 的时候使用该插件会显示模块的相对路径
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})