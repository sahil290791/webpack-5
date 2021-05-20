const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      writeToDisk: true,
      open: true,
      compress: true,
      hot: true,
      port: 9000,
    },
    plugins: [
      /* ... */
      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join('public', 'index.html'),
      }),
      new ModuleFederationPlugin({
        name: 'ContainerApp',
        remotes: {
          'HelloWorldPage1': 'HelloWorldPageApp1@http://localhost:3000/remoteEntry.js',
          'HelloWorldPage2': 'HelloWorldApp2@http://localhost:3001/remoteEntry.js'
        }
      })
    ],
    mode: 'development'
};