module.exports = {
  entry: './src/modifiers-composer.js',
  output: {
    path: __dirname +'/dist',
    filename: 'bundle.js'
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
