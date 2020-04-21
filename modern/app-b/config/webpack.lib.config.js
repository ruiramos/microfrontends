const configFn = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";
  let config = configFn(webpackEnv);

  // our entrypoint is the main component, not index.js
  config.entry = {
    bundle: "./src/App.js",
    main: "./src/index.js",
  };

  config.output.filename = isEnvProduction
    ? "static/js/[name].[contenthash:8].js"
    : isEnvDevelopment && "static/js/[name].js";

  // TODO: remove this when upgrading to webpack 5
  // prevent react and react-dom to be bundled, the container app react
  // will be used.
  config.externals = {
    react: "commonjs2 react",
    "react-dom": "commonjs2 react-dom",
    "react-router-dom": "commonjs2 react-router-dom",
  };

  config.output.libraryTarget = "commonjs2";
  config.output.globalObject = "window";

  // HTMLWebpackPlugin
  config.plugins[0] = new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
    chunks: ["main"],
  });

  // create-react-app config emits a runtime chunk by default, we need
  // our chunk to be independently consumed (i think) so I'm disabling
  // that here.
  delete config.optimization.runtimeChunk;

  delete config.optimization.splitChunks;

  return config;
};
