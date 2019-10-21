const path = require('path')
const rootUrl = url => path.resolve(process.cwd(), url)
const isDev = process.env.node_env == 'dev'

module.exports = {
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: ['react-hot-loader/babel']
        }
      }
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name() {
            if (!isDev) {
              return 'images/[name].[hash:8].[ext]'
            }
            return '[name].[ext]'
          }
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name() {
            if (!isDev) {
              return 'fonts/[name].[hash:8].[ext]'
            }
            return '[name].[ext]'
          }
        }
      }]
    }]
  },
  plugins: [
    
  ],
  resolve: {
    alias: {
      'react-hot-loader': rootUrl('./node_modules/react-hot-loader'),
      'react-dom': '@hot-loader/react-dom',
      '@assets': rootUrl('src/assets'),
      '@components': rootUrl('src/components'),
      '@utils': rootUrl('src/assets/utils'),
      '@images': rootUrl('src/assets/images'),
      '@css': rootUrl('src/assets/less'),
      '@store': rootUrl('src/store'),
      '@router': rootUrl('src/router'),
      '@views': rootUrl('src/views'),
    }
  }
}