const path = require("path");
const webpack = require("webpack");
const uglify = require("uglifyjs-webpack-plugin");
 
module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",//入口文件，src目录下的index.js文件，
    output: {
        path: path.resolve(__dirname, './dist'),//输出路径，就是新建的dist目录，
        publicPath: '/dist/',
        filename: 'visual-platform.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "node-sass" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                query: {
                    limit: 30000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
}