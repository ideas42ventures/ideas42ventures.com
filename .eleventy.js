const pluginPWA = require("eleventy-plugin-pwa");
const CleanCSS = require("clean-css");

module.exports = function (conf) {
  conf.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);

  conf.setTemplateFormats([
    "html",
    "njk",
    "gif",
    "jpg",
    "png",
    "webp",
    "svg",
    "woff2",
    "ico",
  ]);

  conf.addPassthroughCopy("./src/manifest.webmanifest");
  conf.addWatchTarget("./src/**/*.css");
  conf.addPlugin(pluginPWA);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
