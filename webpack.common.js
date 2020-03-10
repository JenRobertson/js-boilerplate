const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
  };
  
module.exports = {
    entry: {
        app: PATHS.app,
      },
      output: {
        path: PATHS.build,
        filename: '[name].[contenthash].js',
      },
    plugins: [
        new CleanWebpackPlugin(),//cleans the dist file each time
        new HtmlWebpackPlugin({//makes index.html
            // favicon: 'src/assets/favicon-32x32.png',
            template: './src/index.html',
            inject: 'head'
        }),
        new CopyWebpackPlugin([
            { from: 'src/static', to:'static/' }
        ]),
    ],
    module: {//puts these file types into the dist folder and bundles the js
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|mp3|wav)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    interpolate: true
                  }
                }
              },
        ]
    }
};