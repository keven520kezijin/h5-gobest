const aliasResolve = dir => require('path').join(__dirname, dir)
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    runtimeCompiler: false,
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@STYLE_V': aliasResolve('src/assets/style/views'),
                '@IMG': aliasResolve('src/assets/img'),
            }
        },
        optimization: {
            minimize: process.env.NODE_ENV !== 'development',
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                            drop_debugger: true
                        }
                    }
                })
            ]
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    chainWebpack: (config) => {
        /* 添加分析工具 */
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                .end()
            config.plugins.delete('prefetch')
        } else {
        }
    }
}