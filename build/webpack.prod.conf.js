const path = require('path');
const merge = require('webpack-merge'); 
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSS分离
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin"); //压缩JS
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');// 打包静态资源
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 查看个文件的依赖关系
module.exports = merge(baseWebpackConfig, {
    mode: 'production', // 自动压缩JS
    output: {
        filename: 'js/[name].[chunkhash].js',
    },
    optimization: {
        minimizer: [
          new TerserJSPlugin({}),// 压缩JS
          new OptimizeCSSAssetsPlugin({})// 压缩CSS
        ],
        // 包的分离，分离出非业务逻辑的包
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',// initial初始块，async(按需加载块)、all(全部块)，默认为all;
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10    
                },
                utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'initial',
                    name: 'utils',  // 任意命名
                    minChunks: 2,   // 引用次数最少两次
                    minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
      },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),// 实现持久化缓存
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css',
        }),
        new CopyWebpackPlugin([{
            from:path.resolve(__dirname, '../static'),// 打包的静态资源目录地址
            to:'static' // 打包到dist下面的static
        },{
            from:path.resolve(__dirname, '../README.md'),// 打包的静态资源目录地址
            to:'./README' // 打包到dist下面的static
        }]),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static',
        //     //  是否在默认浏览器中自动打开报告
        //     openAnalyzer: false,
        //     //  将在“服务器”模式下使用的端口启动HTTP服务器。
        //     analyzerPort: 9528, 
        //     reportFilename: 'static/report.html',
        // })
    ],
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'
                ],
                include: [path.resolve(__dirname, '../src')]
            }
        ]
    }
});