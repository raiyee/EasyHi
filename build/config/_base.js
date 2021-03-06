import path from 'path'
import {argv} from 'yargs'
import _debug from 'debug'

const debug = _debug('hi:config:base')

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
  env: NODE_ENV,

  pkg: require('../../package.json'),

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: path.resolve(__dirname, '../../'),
  dir_src: 'src',
  dir_dist: 'dist',
  dir_server: 'server',
  dir_test: 'test',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'local.1stg.me',
  server_port: process.env.PORT || 3000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_html_minify: false,
  compiler_css_modules: false,
  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_quiet: false,
  compiler_browsers: ['> 1% in CN'],
  compiler_public_path: process.env.PUBLIC_PATH || '',
  compiler_stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  compiler_alias: {
    vue: 'vue/dist/vue.common'
  },
  compiler_vendors: [
    'axios',
    'moment',
    'qs',
    'vue',
    'vue-router',
    'vuex'
  ]
}

// ------------------------------------
// Environment
// ------------------------------------

const __MOCK__ = !!argv.mock

const __DEV__ = NODE_ENV === 'development'

const NON_INDEX_REGEX = /^(?!.*[/\\](index)\.js).*\.(js|vue)$/.toString()

// __DEV__ || (NON_INDEX_REGEX = NON_INDEX_REGEX.replace('index', 'index|test'))

config.globals = {
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  NODE_ENV,
  __DEV__,
  __PROD__: NODE_ENV === 'production',
  __TEST__: NODE_ENV === 'test',
  __TESTING__: NODE_ENV === 'testing',
  __MOCK__,
  __PAGES__: !!argv.pages,
  BASE_URL: JSON.stringify('/yoga-system'),
  CONTEXT: JSON.stringify('/yoga-vision'),
  IMG_PATH_PREFIX: JSON.stringify(!__MOCK__ && process.env.IMG_PATH_PREFIX || 'https://placem.at/'),
  NON_INDEX_REGEX,
  OLD_SERVER_PREFIX: JSON.stringify(process.env.OLD_SERVER_PREFIX || 'http://local.easy-hi.com:8090/yoga-system-res/'),
  // result code
  SUCCESS: JSON.stringify('0'),
  ALERT: JSON.stringify('1'),
  CONFIRM: JSON.stringify('2'),
  REDIRECT: JSON.stringify('3'),
  RELOAD: JSON.stringify('4'),
  PROMPT: JSON.stringify('5'),
  REMIND: JSON.stringify('10')
}

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
config.compiler_vendors = config.compiler_vendors
  .filter(dep => ({...config.pkg.dependencies, ...config.compiler_alias}.hasOwnProperty(dep) ? true : debug(
    'Package "' + dep + '" was not found as an npm dependency in package.json; ' +
    'it won\'t be included in the webpack vendor bundle.\n' +
    'Consider removing it from compiler_vendor in "./config/_base.js"'
  )))

// ------------------------------------
// Utilities
// ------------------------------------
config.paths = (() => {
  const resolve = path.resolve

  const base = (...args) =>
    resolve.apply(resolve, [config.path_base, ...args])

  return {
    base,
    src: base.bind(null, config.dir_src),
    dist: base.bind(null, config.dir_dist),
    server: base.bind(null, config.dir_server),
    test: base.bind(null, config.dir_test)
  }
})()

export default config
