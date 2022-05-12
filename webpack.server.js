const path = require('path');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack that we are building for nodeJS
  // rather than fro the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',
  
  // Tell webpack where to put the output file that is generated
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};
module.exports = merge(baseConfig, config)