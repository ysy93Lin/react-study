/**
 * webpack.dev.js
 * Author: Sue
 * 2020/09/08
 */
const common = require("./webpack.common") // 引用通用设置
const {merge} = require("webpack-merge")  // 引入webpack-merge插件

module.exports = merge(common, {
    mode: "development"
})