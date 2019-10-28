module.exports = {
    outputDir: 'dist',
    productionSourceMap: true,
    assetsDir: "static",
    indexPath: "index.html",
    filenameHashing: true,
    configureWebpack: {
        resolve: {
            alias: {
                assets: '@/assets',
                common: '@/common',
                components: '@/components',
                network: '@/network',
                views: '@/views'
            }
        }
    }
}