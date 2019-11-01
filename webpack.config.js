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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              "@babel/plugin-proposal-class-properties"
            ],
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: '11',
                  edge: '15',
                  safari: '10',
                  firefox: '50',
                  chrome: '49',
                },
              }],
              '@babel/preset-react',
            ],
          },
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
