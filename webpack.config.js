const { resolve } = require('path')
const url = require('url')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
/**
 * 分离css插件
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const conf = require('./conf/conf')
const pages = require('./conf/pages')

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'local'



/**
 * 入口配置
 */
const entry = {
    vendor : ['react','react-dom','react-router-dom'],
    rco : ['mobx','mobx-react','whatwg-fetch','nprogress']
}
pages.map((item,i) => {
    let _obj = {
        [item.name] : item.entry
    }
    Object.assign(entry,_obj)
})

/**
 * 插件配置
 */
const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
        'api_url' : JSON.stringify(conf[env].apiUrl)
        //DEBUG: Boolean(options.debug_api)
        //VERSION: JSON.stringify(pkgInfo.version),
        //CONFIG: JSON.stringify(config.runtimeConfig)
    }),
    new webpack.ProvidePlugin({
        // AppClient : "AppClient"
        //jquery : "jquery",
        //$ : "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['rco','vendor']
    })/*,
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false,
     drop_console: false,
     }
     })*/
]
pages.map((item,i) => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: item.template,
            filename : item.filename,
            chunks: [item.name,'rco','vendor']
        })
    )
})
plugins.push(
    new ExtractTextPlugin({
        filename:'css/[name].css',
        allChunks:true
    })
)



const broswer = {

    entry : entry,

    output : {
        path : resolve(__dirname, conf[env].outPath),
        publicPath: conf[env].publicPath,
        filename: 'js/[name].js',
        chunkFilename:'js/[name].[chunkhash:5].min.js'
    },

    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']//, 'eslint-loader'先注视掉，惨不忍睹
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader"]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            publicPath: '../',
                            name: 'img/[name].[ext]?[hash]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: plugins,
    resolve: {
        alias: {
            //jquery : resolve('./src/lib/jquery.min.js')
        }
    }
}

if(!process.env.NODE_ENV){
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
    broswer.devtool = 'source-map'
    broswer.devServer = {
        port: 8030,
        host: '0.0.0.0',
        proxy: {
            '/logout': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/active_user': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_resources/list': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_role/list': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_role/set_resources': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_role/delete': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_resources/save': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_resources/update': {
                target: 'http://pu.163.com',
                changeOrigin: true
            },
            '/admin/sys_resources/delete': {
                target: 'http://pu.163.com',
                changeOrigin: true
            }
        },
        historyApiFallback : true,
        disableHostCheck:true,
        contentBase: "/",
        inline: true,
        hot : true
    }
}else{
    plugins.push(
        new webpack.optimize.ModuleConcatenationPlugin()
    )
}







module.exports = (options = {}) => {

    return broswer
}