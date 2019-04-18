import { join } from "path";
import { writeFile } from "fs";

import webpack from "webpack";
import CopyPlugin from "copy-webpack-plugin";
const TerserPlugin = require("terser-webpack-plugin");

import pkgDir from "pkg-dir";

import baseConfig from "./base";
import Assets from "./assets";
import { vendorCacheGroups } from "./vendors";

const pkg = pkgDir.sync();
const context = join(pkg, "src");
const pubDir = join(pkg, "dist/public");

function writeWebpackStats(stats) {
  const json = JSON.stringify(stats.toJson(), null, 2);
  const out = join(pkg, "webpack.stats.json");
  writeFile(out, json, function(err) {
    if (err) {
      console.log("Encountered an error.. ");
      console.log(err);
    }
    console.log("Wrote stats to " + out);
  });
}

const CopyAssets = new CopyPlugin(Assets(context, ""));

// Merge with base configuration
const config = Object.assign(baseConfig, {
  mode: "production",
  cache: true,
  context,
  entry: {
    app: ["./main.tsx"]
  },

  output: {
    path: pubDir,
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    pathinfo: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: vendorCacheGroups
    }
  }
});
//console.log(vendorCacheGroups);

// Plugins
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  CopyAssets,
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.WatchIgnorePlugin([join(__dirname, "../public")])
]);

const compiler = webpack(config);
console.log("server:webpack Environment: Production");
compiler.run((err, stats) => {
  // Print watch/build result here...
  if (err) {
    console.log(err);
  }
  if (stats.hasErrors()) {
    console.log("webpack:error");
    console.log(stats.compilation.errors.toString());
  }

  // Output minimal stats to console.
  console.log(
    stats.toString({
      colors: true,
      hash: false,
      chunks: false,
      version: false,
      children: false,
      chunkModules: false
    })
  );

  // Write a stats.json for the webpack bundle visualizer
  writeWebpackStats(stats);

  console.log("webpack:compiler + Finished compiling");
});
