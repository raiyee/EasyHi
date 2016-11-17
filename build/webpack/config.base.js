const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const debug = require('debug')('hi:webpack:base')

const {globals, paths, compilerBrowsers, compilerDevTool, compilerPublicPath, compilerVendor} = require('../config')
const {TRUE_NODE_ENV, __DEV__} = globals

const {baseLoaders, generateLoaders, localIdentName, nodeModules, vueCssLoaders} = require('./utils')

debug('Create webpack configuration.')

const browsers = compilerBrowsers
const postcss = []

if (__DEV__) {
  debug(`Enable postcss processor(autoprefixer) for ${TRUE_NODE_ENV}!\n`)

  postcss.push(autoprefixer({browsers}))
} else {
  debug(`Enable postcss processor(cssnano) for ${TRUE_NODE_ENV}!\n`)

  postcss.push(cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers
    },
    discardComments: {
      removeAll: true
    },
    discardUnused: false,
    mergeIdents: false,
    normalizeUrl: false,
    reduceIdents: false,
    safe: true,
    sourcemap: !globals.__PROD__
  }))
}

const sourceMap = !!compilerDevTool

module.exports = {
  devtool: compilerDevTool,
  entry: {
    app: './src/client-entry.js',
    vendor: compilerVendor
  },
  output: {
    path: paths.dist(),
    publicPath: compilerPublicPath,
    filename: `[name].[chunkhash].js`,
    chunkFilename: `[id].[chunkhash].js`
  },
  resolve: {
    modules: [paths.src(), 'node_modules'],
    extensions: ['.js', '.vue', '.styl'],
    enforceExtension: false
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: generateLoaders('stylus-loader', baseLoaders, {
          sourceMap
        }),
        exclude: nodeModules
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: vueCssLoaders({
            sourceMap
          }),
          autoprefixer: false,
          cssModules: {
            camelCase: true,
            localIdentName
          }
        }
      }, {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      }, {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(globals),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss
      }
    })
  ]
}
