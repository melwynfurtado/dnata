const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MOCK_HTTP_CLIENT = path.resolve('src/__mocks__', 'mockHttpClient.js')

const __PROD__ = process.env.NODE_ENV === 'production'
const __DEV__ = !__PROD__

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      httpClient: MOCK_HTTP_CLIENT,
    },
  },  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ __DEV__ }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'      
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}