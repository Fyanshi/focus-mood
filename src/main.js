/*
 * @Descripttion: 
 * @Author: jinhua
 * @Date: 2020-09-10 21:50:45
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-12 22:52:32
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "./api/axios.js";


// import VeLine from 'v-charts/lib/line.common';
// import VeHistogram from 'v-charts/lib/histogram.common';
import Vant from 'vant';
import 'vant/lib/index.css';

import '@/assets/icon/iconfont.css';
import '@/assets/icon/iconfont.js';
import '@/assets/base.less';

import VCharts from 'v-charts';
Vue.use(VCharts);
// Vue.use(VeLine);
// Vue.use(VeHistogram);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');