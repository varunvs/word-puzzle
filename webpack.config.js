const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-sourcemap',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: {
      index: './index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader', 
            query: {
              presets: ['es2015']
            }
          },
          'eslint-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.html$/,
        use: [
          'ngtemplate-loader?relativeTo=' + path.resolve(__dirname) + '/src',
          'html-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|eot|woff|woff2)(\?.*)?$/,
        use: 'url-loader?limit=1000',
      },
      {
        test: /\.(swf|ttf)$/,
        use: 'file-loader',
      },
    ]
  }
};