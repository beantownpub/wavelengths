const path = require('path')
const webpack = require('webpack')

module.exports = env => {
  return {
    mode: process.env.NODE_ENV,
    plugins: [
      new webpack.DefinePlugin({
        "process.env.GOOGLE_API_KEY": JSON.stringify(process.env.GOOGLE_API_KEY)
      })
    ],
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
