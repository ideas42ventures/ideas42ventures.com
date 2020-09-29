const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "-");

module.exports = function (conf) {
  conf.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
  conf.addShortcode("slugify", (str = "") => slugify(str));
  conf.addShortcode("dateFormat", (dateStr, frmt = "DDD 'at' t ZZZZ") =>
    DateTime.fromISO(dateStr, { zone: "America/New_York" }).toFormat(frmt)
  );
  conf.addShortcode("headingAnchor", (level, text, id) => {
    const finalId = id ? id : slugify(text);

    return `<h${level} id="${finalId}">
        <a class="header-anchor" href="#${finalId}">#</a>
        ${text}
      </h${level}>`;
  });

  conf.setTemplateFormats([
    "html",
    "njk",
    "gif",
    "jpg",
    "png",
    "webp",
    "svg",
    "ttf",
    "woff",
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
