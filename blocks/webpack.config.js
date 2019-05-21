
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  mode: debug ? 'development' : 'production',
  entry: {
    'stagesection': './src/js/stagesection_edit.js',
    'stagepart': './src/js/stagepart_edit.js'
  },
  output: {
    path: __dirname + '/work/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
             MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[id].css'
    })
  ]
};