const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function (conf) {
  conf.setTemplateFormats([
    "html",
    "njk",
    "gif",
    "jpg",
    "png",
    "webp",
    "svg",
    "woff2",
  ]);

  conf.addPassthroughCopy("./src/manifest.webmanifest");
  conf.addWatchTarget("./src/**/*.css");
  conf.addPlugin(pluginPWA);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
  };
};
