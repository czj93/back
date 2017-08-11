/**
 * outPath : 打包输出根目录，其他静态输出都会以它为根
 * publicPath ： 指定静态资源的url路径前缀,会自动编译到css html文件内标签的 src属性 link属性等
 *
 */
module.exports = {
    "production" : {
        outPath : "dist",
        publicPath : "",
        apiUrl : ""
    },
    "develop" : {
        outPath : "dist-dev",
        publicPath : "",
        apiUrl : ""
    },
    "local" : {
        outPath : "dist-dev",
        publicPath : "",
        //apiUrl : "/mock/5954f81a9adc231f356dd0b5/api-a16"
        apiUrl : ""
    }
}