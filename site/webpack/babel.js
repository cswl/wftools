import { resolve, join } from "path";

const pkgDir = require("pkg-dir");
const context = join(pkgDir.sync(), "src");

export default {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        targets: {
          browsers: "last 1 chrome versions"
        }
      }
    ],
    ["@babel/typescript", { isTSX: true, allExtensions: true }]
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "#assets": `${context}/assets`,
          "#routes": `${context}/routes`,
          "#components": `${context}/components`,
          "#model": `${context}/model`,
          "#data": `${context}/data`,
          "#themes": `${context}/themes`
        }
      }
    ],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-syntax-dynamic-import"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-react-jsx"]
  ]
};
