module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'modifiers-composer.js',
    library: 'modifiersComposer',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
