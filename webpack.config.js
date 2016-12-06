module.exports = {
  entry: {
    javascript: './index.js',
    angular: [
      'core-js',
      'reflect-metadata',
      'rxjs',
      'zone.js',
      './angular/index.ts'
    ]
  },
  output: {
    path: './bundles',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.ts$/, exclude: /node_modules/, loader: 'ts'},
    ],
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
    ]
  }
}
