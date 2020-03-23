const path = require('path');
const merge = require('webpack-merge'); 
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');//整理控制台信息


module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'js/[name].[hash].js',
    },
    // 开发服务配置项
    devServer: {
        historyApiFallback: true, 
        overlay: true, 
        hot: true,
        // contentBase: './distribution',
        // inline:true,//do not use iframe for the page, true is default
        // open: true,//open browser after dev server starts, true is default
        // port: 8080,//8080 is default
        // proxy: {//proxy backend api
        //     '/api': 'http://localhost:3000'
        // }
    },
    // 开发工具
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        /*
            热更新的两种方式
            1.package.json的参数加上--hot
            2.DevServer添加参数hot:true，plugins添加插件ew webpack.HotModuleReplacementPlugin()
        */
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader', 'css-loader', 'postcss-loader', 'less-loader'
                ],
                include: path.resolve(__dirname, '../src')
            }
        ]
    }
});