// webpack.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Enables Webpack's built-in optimizations, including some minification
  entry: './js/src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.min.js', // Output minified file name
    path: path.resolve(__dirname, 'assets/js'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
        },
      },
    ],
  },
  optimization: {
    minimize: true, // Enable minification
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Optional: Remove console.log statements
          },
          output: {
            comments: false, // Remove comments from output
          },
        },
        extractComments: false, // Do not extract comments to a separate file
      }),
    ],
  },
  devtool: 'source-map', // Generate source maps for debugging
};
