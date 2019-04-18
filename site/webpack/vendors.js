const vendors = {
  react: ["react", "react-dom", "react-router-dom"],
  "material-ui": ["@material-ui"],
  loadash: ["loadash"],
  jss: ["jss", "jss-plugin-*"],
  downshift: ["downshift"],
  mobx: ["mobx", "react"]
};

const vendorCacheGroups = Object.assign(
  {
    commons: {
      name: "commons",
      chunks: "initial",
      minChunks: 2
    },
    vendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      enforce: true
    }
  },
  ...Object.entries(vendors).map(([n, v]) => {
    const regExStr = v.join("|");
    return {
      [n]: {
        name: n,
        chunks: "all",
        priority: 10,
        enforce: true,
        test: new RegExp(`[/]node_modules[/](${regExStr})[/]`)
      }
    };
  })
);

export { vendorCacheGroups };
