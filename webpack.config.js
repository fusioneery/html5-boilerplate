const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//function generates new html page in dist, when you create new html page in src
function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(templateDir);
  return templateFiles.filter(f => {
    return f.split('.')[1] === 'html'
  }).map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}

module.exports = {
  entry: [
    './src/js/index.js',
    './src/sass/main.sass'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          { 
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '75-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {
            drop_console: true
          },
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: './css/main.min.css'
      }),
      new CopyWebpackPlugin([
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/.htaccess'
      }
    ]),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      test: /\.js$|\.html$/,
      threshold: 10240
    })
    ].concat(generateHtmlPlugins('./src'))
  };