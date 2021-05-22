const { description } = require("../../package");
const path = require("path");
const fs = require("fs");

const docsDir = "answer";
const getSidebar = (dirPath) => {
  const dirFiles = `./src/${dirPath}`;
  const dirs = fs
    .readdirSync(dirFiles)
    .filter((dir) => fs.statSync(`${dirFiles}/${dir}`).isDirectory());
  return dirs.map((dir) => `/${dirPath}/${dir}/`);
};

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Answer JS interview with figure",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "tyankatsu0105/answer-js-interview-with-figure",
    editLinks: false,
    docsDir: "",
    lastUpdated: true,
    sidebar: getSidebar("answer"),
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
