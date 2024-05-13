const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    styles: './src/page/scss/styles.styl' 
},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/page/index.html'),
      filename: 'index.html',
      chunks: ['main', 'styles']
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/page/news.html'),
      filename: 'news.html',
      chunks: ['styles']
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/page/rozklad.html'),
      filename: 'rozklad.html',
      chunks: ['styles']
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/page/photo.html'),
      filename: 'photo.html',
      chunks: ['styles']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/page/scss/styles.styl',
          to: './scss'
        },
        {
          from: './src/page/assets/images', 
          to: 'assets/images' 
        }
      ]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'indexCSS.css',
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), 
  },
};
