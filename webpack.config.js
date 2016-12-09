module.exports = {
  entry: {
    javascript: ['babel-polyfill', './index.js'],
    angular: [
      'core-js',
      'reflect-metadata',
      'rxjs',
      'zone.js',
      'style!./angular/styles.css',
      './angular/index.ts'
    ],
    react: [
      'style!./angular/styles.css',
      './react/index.tsx'
    ]
  },
  output: {
    path: './bundles',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts'},
      {test: /\.html$/, loader: 'html'},
      {test: /\.css$/, loaders: ['css-to-string', 'css']},
    ],
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'},
      {test: /\.tsx?$/, exclude: /node_modules/, loader: 'tslint'}
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    historyApiFallback: {
      rewrites: [
        {from: /\/angular-bundle/, to: '/angular-bundle'},
        {from: /\/react-bundle/, to: '/react-bundle'},
      ]
    }
  }
}
