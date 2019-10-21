const package = require('../package.json')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //webpack4处理css的插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin') //gzip压缩
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const rootUrl = url => path.resolve(process.cwd(), url)
const publicPath = '/'

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: rootUrl('src/index.js'),
  output: {
    filename: 'js/[name].[hash:8].js',
    path: rootUrl('dist/static'),
    publicPath
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath,
          },
        },
        {
          loader: 'css-loader',
        }, {
          loader: "less-loader",
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
        }],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      mode: 'prod',
      filename: '../index.html',
      template: rootUrl('src/index.html'),
      favicon: rootUrl('favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [rootUrl('dist')]
    }),
    new UglifyJSPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.BannerPlugin({
      banner: `${package.author}, version: ${package.version}, update：${new Date().toLocaleString()}`
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: "gzip",
      test: /\.(js|css)$/
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
})