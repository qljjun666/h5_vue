
import Vue from 'vue';
// import Vue from 'vue/dist/vue.esm.js'
import App from '../src/App.vue';
import router from '../src/router/index';
// import "../src/assets/style/reset.css";
import 'lib-flexible';
import utils from './utils/utils';
import store from './store/index';

// 配置路由keepAlive状态
utils.setRouterBeforeEach(router);

// compile模式
// new Vue({
//     el: '#app',
//     data: {
//         msg: '从零配置'
//     }
// })

// runtime模式
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');