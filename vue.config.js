const path = require('path')
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const { DefaultDeserializer } = require('v8');
function resolve (dir) {
    return path.join(__dirname, dir)
}


const env = process.env.NODE_ENV
const water = process.env.npm_config_water
// vue.config.js
module.exports = {
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建.
    productionSourceMap: false,
    // publicPath:'./',
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    //打包app时放开该配置
    // publicPath:'./',
    configureWebpack: config => {
    //生产环境取消 console.log
        if (env === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.plugins = [
                ...config.plugins,
                new ProgressBarPlugin({
                    format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
                    clear: false
                }),
            ]
        }
        // new AutoDllPlugin({
        //     inject: true, // 设为 true 就把 DLL bundles 插到 index.html 里
        //     filename: '[name]_[hash].dll.js',
        //     context: path.resolve(__dirname, './'), // AutoDllPlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败
        //     entry: {
        //         ui: ['ant-design-vue', 'vxe-table'],
        //         vendor: ['vue', 'vuex', 'vue-router'],
        //         chart: ['@antv/g2', '@antv/data-set', 'tinymce']
        //     }
        // })
        // new HardSourceWebpackPlugin()
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@comp', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@layout', resolve('src/layout'))
            .set('@static', resolve('src/static'))
            .set('@mobile', resolve('src/modules/mobile'))
        // 生产环境配置
        if (process.env.NODE_ENV === 'production') {
            // 删除预加载
            config.plugins.delete('preload');
            config.plugins.delete('prefetch');
            // 压缩代码
            config.optimization.minimize(true);
            // 分割代码
            config.optimization.splitChunks({
                chunks: 'all'
            })
        }
        // config.module
        // .rule('images')
        // .test(/\.(png|jpe?g|gif)(\?.*)?$/)
        // .use('image-webpack-loader')
        // .loader('image-webpack-loader')
        // .options({ disable: env == 'development' ? true : false })
        // .end()
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

    devServer: {
        hot: true,
        clientLogLevel: 'warning',
        port: 3000,
        proxy: {
            '/els': {
                 //target: 'http://localhost:8080', //请求本地 需要els后台项目
                // target: 'http://v5sit.51qqt.com', //请求线上 需要els后台项目
                // target: 'http://192.168.2.18:8080/', // 陈龙本地
                target: 'http://10.99.9.101:8090/', // 微服务线上地址
                ws: false,
                changeOrigin: true
            },
            '/opt': {
                //target: 'http://localhost:8080', //请求本地 需要els后台项目
               target: 'http://10.99.9.102/', // 微服务线上地址
               ws: false,
               changeOrigin: true
            },
            '/els/websocket': {
                target: 'ws://localhost:8080', //请求本地 需要els后台项目
                // target: 'ws://v5sit.51qqt.com', //请求本地 需要els后台项目
                ws: true,
                changeOrigin: true
            }
        }
    },
    lintOnSave: false
}