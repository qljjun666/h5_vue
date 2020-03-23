const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //编译vue

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),//模板文件的路径
            favicon: path.resolve(__dirname, '../favicon.ico')//配置网页图标
        }),
    ],
    // 模版解析配置项
    resolve: {
        // 设置可省略文件后缀名
        extensions: [' ','.vue','.js','.json','.jsx'],
        // 查找 module 的话从这里开始查找;
        modules: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../node_modules")], // 绝对路径;直接指定第三方模块的路径，提高优化速度
        // 配置路径映射（别名）
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components'),
            'store': path.resolve(__dirname, '../src/store'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(vue|js)$/,
                enforce: 'pre',
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                    }
                },
                include: [path.resolve(__dirname, '../src')], // 指定检查的目录
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.m?js$/,
                // babel-loader很慢，确保转译尽可能少的文件。使用exclude来排除不需要转译的文件，比如node_modules，也可以使用CacheDirectory选项，将babel-loader提速至少两倍，这会将转移的结果缓存到系统文件
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, '../src'),
                use: {
                // babel在每个文件都插入了辅助代码，使代码体积过大，babel对一些公共方法使用了非常小的辅助代码，比如_extend。默认情况下会被添加到每一个需要它的文件中，可以引入babel runtime作为一个独立模块，来避免重复引入，把@babel/runtime安装为一个依赖
                // 禁用babel自动对每个文件的runtime注入，而是引入@@babel/plugin-transform-runtime并且使所有辅助代码从这里引用。
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                    cacheDirectory: true
                  }
                }
            },
            {
                test: /\.(png|jp?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10*1024, // 小于10*1024字节的图片打包成base 64图片
                            name:'images/[name].[hash:8].[ext]',
                            publicPath:''
                        }
                    }
                ],
                include: path.resolve(__dirname, '../src')
            },
            {
                // 文件依赖配置项——字体图标
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'fonts/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
                include: path.resolve(__dirname, '../src')
            }, 
            // {
            //     // 文件依赖配置项——音频
            //     test: /\.(wav|mp3|ogg)?$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             limit: 8192, 
            //             name: 'audios/[name].[ext]?[hash:8]',
            //             publicPath:''
            //         },
            //         include: path.resolve(__dirname, '../src')
            //     }],
            // }, 
            // {
            //     // 文件依赖配置项——视频
            //     test: /\.(ogg|mpeg4|webm)?$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             limit: 8192, 
            //             name: 'videos/[name].[ext]?[hash:8]',
            //             publicPath:''
            //         },
            //     }],
            //     include: path.resolve(__dirname, '../src')
            // },
        ]
    }
};