require('dotenv').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: { app: ['./src/index.jsx'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/',
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel-loader', 
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: `'${process.env.API_URL}'`,
    }),
  ],
  devtool: 'source-map',
};
