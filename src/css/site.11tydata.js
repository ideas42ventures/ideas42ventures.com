module.exports = function () {
  const permalink =
    process.env.ELEVENTY_ENV !== "production" ? "css/site.css" : false;

  return {
    permalink,
  };
};
