/*
 * @Description:  
 * @Author: jinhua
 * @Date: 2019-11-18 23:23:14
 * @FilePath: \jg-app\src\api\axios.js
 */

// axios 配置
import axios from 'axios';
axios.defaults.timeout = 500000000000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '/' : '';


// http request 拦截器 
axios.interceptors.request.use(
    config => {
        if (!config.url.includes('dologin')) {
            // 这里设置的 token 每次都是不一样的 
            // config.headers.token = localStorage.getItem('token');

        }
        return config;
    },
    err => {
        return Promise.reject(err);
    },
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // if (response.data.tokenStr) {
        //     // localStorage.setItem('token', response.data.tokenStr);
        // }
        return response;
    },
    error => {
        if (error.response) {}
        return Promise.reject(error)
    },
)

export default axios;