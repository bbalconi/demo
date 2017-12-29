var path = require('path');
const merge = require('webpack-merge');


const TARGET = process.env.npm_lifecycle_event;

const static = {
    entry: './src/main/js/index.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.scss$/,
              loader: 'style!css!sass?outputStyle=expanded&' + 'includePaths[]=' +
                        (path.resolve(__dirname, './node_modules'))
            }
        ]
    },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(static, {
      devServer: {
          port: 9090,
          proxy: {
              '/': {
                  target: 'http://localhost:8080',
                  secure: false,
                  prependPath: false
              }
          },
          publicPath: 'http://localhost:9090/',
          historyApiFallback: true
      },
      devtool: 'source-map'
  });
}