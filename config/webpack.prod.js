/**
 * webpack.prod.js
 * Author: Sue
 * 2020/09/08
 */
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

module.exports = merge(common, {
    mode: "production"
})