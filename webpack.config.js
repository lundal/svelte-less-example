const path = require("path");
const sveltePreprocess = require("svelte-preprocess");

module.exports = (env, argv) => ({
  entry: {
    bundle: ["./src/index.js", "./src/index.html"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    filename: "index.js",
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.svelte$/,
        use: [
          "babel-loader",
          {
            loader: "svelte-loader",
            options: {
              preprocess: sveltePreprocess(),
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["css-loader", "less-loader"],
      },
      {
        test: /\.html$/,
        type: "asset/resource",
      },
    ],
  },
});
