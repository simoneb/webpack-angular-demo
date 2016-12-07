module.exports = {
  entry: {
    javascript: './index.js',
    angular: [
      'core-js',
      'reflect-metadata',
      'rxjs',
      'zone.js',
      'style!./angular/styles.css',
      './angular/index.ts'
    ]
  },
  output: {
    path: './bundles',
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.ts$/, exclude: /node_modules/, loader: 'ts'},
      {test: /\.html$/, exclude: /node_modules/, loader: 'html'},
      {test: /\.css$/, exclude: /node_modules/, loader: 'css'},
    ],
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
    ]
  }
}
