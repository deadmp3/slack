const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : '',
  entry: {
    main: ['./app', './assets/css/app.css'],
  },
  externals: {
    gon: 'gon',
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/',
    filename: 'assets/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets/static' },
    ]),
  ],
};
