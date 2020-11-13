/*
 * @Descripttion: 
 * @Author: jinhua
 * @Date: 2020-09-10 22:14:14
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-10 22:15:41
 */
module.exports = {
    lintOnSave: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },

}