module.exports = {
  resolve: {
    extensions: [".mjs", ".js", ".ts"]
  },
  module: {
  rules: [
    {
      test: /\.(js|ts)$/, // All ts and tsx files will be process by
      exclude: /node_modules/, // ignore node_modules
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                loose: true,
                targets: {
                  node: "current"
                }
              }
            ]
          ],
          plugins: ["transform-es2015-modules-commonjs"]
        }
      }
    }
  ]}
};
