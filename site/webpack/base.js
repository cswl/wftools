import { resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

const WebpackModules = require("webpack-modules");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const fs = require("fs");

import babelConfig from "./babel";

const pkgDir = require("pkg-dir");
const context = join(pkgDir.sync(), "src");
const favIcon = join(context, "favicon.png");

const redirectsConf = [{ from: `${context}/_redirects`, to: `` }];

const indexHTMLopts = {
  filename: "index.html",
  template: "./template.html",
  inject: "body",
  title: "WF Stuffs ",
  removeRedundantAttributes: true,
  minify: {
    collapseWhitespace: true,
    removeComments: true
  }
};

export default {
  name: "client",
  target: "web",
  context,
  entry: {},
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".less",
      ".scss",
      ".sass",
      ".styl",
      ".css"
    ],
    alias: {
      mobx: pkgDir + "/node_modules/mobx/lib/mobx.es6.js"
    }
  },
  module: {
    rules: [
      {
        // ES2015
        enforce: "pre",
        test: /\.m?jsx?$/,
        type: "javascript/auto"
      },
      {
        test: /\.md$/i,
        use: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader" // translates CSS into CommonJS
        ]
      },
      {
        test: /\.(js|jsx|tsx|ts)$/, // All ts and tsx files will be process by
        exclude: /node_modules/, // ignore node_modules
        use: {
          loader: "babel-loader",
          options: babelConfig
        }
      }
    ]
  },
  plugins: [
    new WebpackModules(),
    new webpack.ProvidePlugin({
      h: ["react", "h"],
      Fragment: ["react", "Fragment"]
    }),
    new HtmlWebpackPlugin(indexHTMLopts),
    new FaviconsWebpackPlugin({
      logo: favIcon,
      inject: true,
      prefix: "icons-[hash:4]/",
      title: "Warframe Tools",
      persistentCache: true,
      emitStats: false,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
      allChunks: true
    }),
    new CopyPlugin(redirectsConf)
  ]
};
