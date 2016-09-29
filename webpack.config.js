var HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
     entry: './index.ts',
     output: {
         path: './dist',
         filename: 'bundle.js'
     },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.js']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      template: './index.html'
  })],
  devServer: { inline: true }
};