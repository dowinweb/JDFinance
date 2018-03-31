/**
 * @Author: dongwei
 * @Date:   2018-03-08 20:15:56
 * @Last modified by:   dongwei
 * @Last modified time: 2018-03-08 20:41:03
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
    entry: {
        app: "./app/js/main.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html-loader",
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader",
        }],
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./app/views/index.html",
        }),
    ],
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist"),
    },
}
