module.exports = function (conf) {
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
