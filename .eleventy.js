const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

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
        <a class="header-anchor" href="#${finalId}" aria-label="Anchor link to ${text}">#</a>
        ${text}
      </h${level}>`;
  });

  conf.setTemplateFormats([
    "html",
    "md",
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

  conf.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#",
    })
  );

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
