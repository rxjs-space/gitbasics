module.exports = {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      resolve: {
        extensions: ['', '.ts', '.js']
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {test: '/\.ts$/', loader: 'awesome-typescript-loader'}
        ]
      }
    }