const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/ts/data-sources/users.json', to: 'data/users.json' },
        {
          from: 'src/css/style.css',
          to: 'css/style.css',
        },
        {
          from: 'src/css/base/base.css',
          to: 'css/base/base.css',
        },
        {
          from: 'src/css/components/button.css',
          to: 'css/components/button.css',
        },
        {
          from: 'src/css/components/input.css',
          to: 'css/components/input.css',
        },
        {
          from: 'src/css/components/navbarForm.css',
          to: 'css/components/navbarForm.css',
        },
        {
          from: 'src/css/layouts/navBr.css',
          to: 'css/layouts/navBr.css',
        },
        {
          from: 'src/css/page/login.css',
          to: 'css/page/login.css',
        },
        {
          from: 'src/css/page/photoPg.css',
          to: 'css/page/photoPg.css',
        },
        {
          from: 'src/css/layouts/notification.css',
          to: 'css/layouts/notification.css',
        },
      ],
    }),
  ],
  watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
