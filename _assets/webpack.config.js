var webpack = require('webpack')
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./main.js",
  output: {
    path: '../assets/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        }
      },
      { test: /\.scss$|\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader") }
    ],
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 4 versions'] }), precss]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new ExtractTextPlugin("main.css")
  ]
};
