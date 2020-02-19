const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === "dev";

module.exports = {

  watch: true,

  watchOptions: {
    aggregateTimeout: 5000,
    poll: 10000
  },

  // devtool: DEV_MODE ? "eval" : "source-map",
  devtool: "source-map",
  entry: {
    transactionalEmailSyncTemplates: "./src/app/transactionalEmailSyncTemplatesApp.tsx",
    templateMergeTagsBuilder: "./src/app/templateMergeTagsBuilderApp.tsx",
    foobar: "./src/app/foobarApp.tsx",
    crm: "./src/app/crm.ts"
  },
  output: {
    path: path.resolve(__dirname, "root"),
    filename: "js/[name].js",
    chunkFilename: "js/[name].js",
    publicPath: '/'
  },
  optimization: {

    // minimizer: [

    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true
    //   })
    // ],

    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      DEV_MODE
        ? {
          test: /\.scss/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
        : {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              },
              "sass-loader"
            ]
          })
        },
      {
        test: /\.(mp4|webm|ogg|mp3|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[path][name].[ext]"
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};
