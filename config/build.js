const webpack = require('webpack');
const webpackConfig = require('./webpack.pub.config');

process.env.REACT_APP_SERVER_ENV = 'DEV';
webpack(webpackConfig, () => {
  if (err) {
    throw err;
  }

  process.env.REACT_APP_SERVER_ENV = 'PUB';
  webpack(webpackConfig, () => {
    if (err) {
      throw err;
    }
  })
})