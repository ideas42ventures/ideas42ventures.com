const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");

module.exports = function (conf) {
  conf.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
  conf.addShortcode("dateFormat", (dateStr, frmt = "DDD 'at' t ZZZZ") =>
    DateTime.fromISO(dateStr).toFormat(frmt)
  );

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

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
