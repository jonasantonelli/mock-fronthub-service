const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    devServer: {
      stats: {
        children: false,
        maxModules: 0,
      },
      historyApiFallback: true,
      port: 3001,
    },
    output: {
      path: resolve(__dirname, 'public'),
    },
    resolve: {
      symlinks: true,
      alias: {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  };
};
