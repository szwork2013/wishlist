var webpack = require('webpack');
var path = require('path');
var nodeModulesDir = path.join(__dirname, 'node_modules');
var pkg = require('./package.json');
var meta = require('./meta.json');
var publicPath = '/assets/@' + meta.vendor + '.' + pkg.name + '/';
var production = process.env.NODE_ENV === 'production';
var hot = process.env.NODE_ENV === 'hot';

module.exports = {
  devtool: 'sourcemap',

  watch: production ? false : true,

  entry: hot ? [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/WishlistApp.jsx'
  ] : [
    './src/WishlistApp.jsx'
  ],

  externals: {
    'sdk': 'storefront.sdk',
    'react': 'React',
    'react-router': 'ReactRouter',
    intl: 'Intl',
    'react-intl': 'ReactIntl'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'components': path.join(__dirname, '/src/components/'),
      'pages': path.join(__dirname, '/src/pages/'),
      'styles': path.join(__dirname, '/src/styles/'),
      'actions': path.join(__dirname, '/src/actions/'),
      'utils': path.join(__dirname, '/src/utils/'),
      'stores': path.join(__dirname, '/src/stores/')
    }
  },

  output: {
    path: path.resolve(__dirname, './storefront/assets/'),
    publicPath: publicPath,
    filename: 'WishlistApp.js',
    chunkFilename: 'WishlistApp-[name].js',
    devtoolModuleFilenameTemplate: 'webpack:///WishlistApp/[resource]?[id]-[hash]'
  },

  eslint: {
    configFile: '.eslintrc'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.jsx$/,
        exclude: [nodeModulesDir],
        loaders: hot ? ['react-hot', 'babel-loader?stage=0'] : ['babel-loader?stage=0']
      }, {
        test: /\.js$/,
        exclude: [nodeModulesDir],
        loaders: ['babel-loader?stage=0']
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg|woff|ttf|eot|svg|woff2)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: production ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ] : hot ? [
    new webpack.HotModuleReplacementPlugin()
  ] : [],

  quiet: false,

  noInfo: false,

  devServer: {
    publicPath: publicPath,
    port: 3000,
    hot: true,
    inline: true,
    stats: {
      assets: false,
      colors: true,
      version: true,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false
    },
    historyApiFallback: true,
    proxy: {
      '*': 'http://janus-edge.vtex.com.br/'
    }
  }
};
