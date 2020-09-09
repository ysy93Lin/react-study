/**
 * webpack.common.js
 * Author: Sue
 * 2020/09/08
 */
const path = require("path")  // path api
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    /* entry: {
        app: "./src/index.js"  // 入口文件名
    }, */
    // 出口设置
    output: {
        filename: '[name].[chunkhash:4].js', // 命令文件
        path: path.resolve(__dirname, "../dist")  // 生成的位置
    },
    // http服务的设置
    devServer: {  // 使用到webpack-dev-server插件
        port: 3000   // default: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")    // 指定的html模板，会自动引用到output出口设置的文件
        })
    ],
    // 管理资源
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                use: 'babel-loader',
                exclude: /node_modules/   // 不应该包含node_modules文件夹
            },
            {
                test: /\.(s?)css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
        
    },
    resolve: {
        extensions: [".js", '.jsx'],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    }
}