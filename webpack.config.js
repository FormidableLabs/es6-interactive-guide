'use strict';

module.exports = {
  cache: true,
  debug: false,
  devtool: false,
  entry: {
    bundle: 'index.jsx'
  },
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader?stage=1'
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      }
    ]
  },
  resolve: {
    root: [__dirname],
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['','.js','.jsx']
  }
};