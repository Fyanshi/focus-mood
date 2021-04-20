/*
 * @Descripttion:
 * @Author: jinhua
 * @Date: 2020-09-10 22:14:14
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-10 22:15:41
 */

module.exports = {
  lintOnSave: true,

  configureWebpack: {
    // externals: {
    //   subtract: ['./super', '/sub'],
    // },
    // externals: {
    //   lodash: '_',
    // },
    externals: [
      // eslint-disable-next-line func-names
      function(context, request, callback) {
        console.log(context, request);
        if (/^lodash$/.test(request)) {
          return callback(null, `commonjs ${request}`);
        }
        return callback();
      },
    ],
  },
};
