/*
 * @Descripttion: 
 * @Author: jinhua
 * @Date: 2020-09-10 21:50:45
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-10 22:52:18
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';



import Vant from 'vant';
import 'vant/lib/index.css';

import '@/assets/icon/iconfont.css';
import '@/assets/icon/iconfont.js';
import '@/assets/base.less';

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');