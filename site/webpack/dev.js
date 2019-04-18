import { join } from "path";
import fs from "fs";
import webpack from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import WebpackDevServer from "webpack-dev-server";

import pkgDir from "pkg-dir";

import baseConfig from "./base";
import Assets from "./assets";

const ports = require("./ports.json")
const port = ports.app;
const apiURL = ports.api;

const context = join(pkgDir.sync(), "src");

const CopyAssets = new CopyPlugin(Assets(context, `http://localhost:${port}/`));

const devAssets = [{ from: `${context}/dumps/rm.resp/**`, to: `` }];

const CopyDevAssets = new CopyPlugin(devAssets);

// Merge with base configuration
//-------------------------------
const config = Object.assign(baseConfig, {
  mode: "development",
  cache: true,
  devtool: "cheap-module-eval-source-map", // eval eval-cheap-module-source-map source-map

  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${port}`,
      "webpack/hot/only-dev-server",
      "./main.debug.tsx"
    ]
  },

  output: {
    publicPath: `http://localhost:${port}/`,
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
    pathinfo: true
  }
});

// Plugins
//-------------------------------
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development")
    }
  }),
  CopyAssets,
  CopyDevAssets,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.WatchIgnorePlugin([join(__dirname, "../../build")])
]);

// Run DEV server for hot-reloading
//---------------------------------
const compiler = webpack(config);
const devServerOptions = {
  proxy: {
    '/.netlify': {
      target: apiURL,
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "SourceMap,X-SourceMap"
  },
  hot: true,
  compress: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: false
  },
  port,
  historyApiFallback: true,
  noInfo: false,
  quiet: false,
  hot: true,
  stats: {
    colors: true,
    hash: false,
    timings: false,
    version: false,
    chunks: false,
    modules: false,
    children: false,
    chunkModules: false
  }
};

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, "localhost", () => {
  console.log("webpack:compiler ", { message: "Running on port " + port });
});
