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

  conf.addWatchTarget("./src/**/*.css");

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
