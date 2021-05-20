const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:3001/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              'style-loader', 'css-loader'
          ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader', 'css-loader', 'sass-loader'
            ]
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          type: 'asset/resource',
          include: [
            path.resolve(__dirname, "src/assets/images")
          ],
          exclude: [
            path.resolve(__dirname, "node_modules")
          ],
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      writeToDisk: true,
      // publicPath: '/',
      open: true,
      compress: true,
      hot: true,
      port: 3001,
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
        name: 'HelloWorld2App',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorldPage2': path.join(__dirname, 'src', 'components', 'app-2.page.js')
        }
      })
    ],
    mode: 'development'
};