
import Vue from 'vue';
// import Vue from 'vue/dist/vue.esm.js'
import App from '../src/App.vue';
import router from '../src/router/index';
// import "../src/assets/style/reset.css";
import 'lib-flexible';

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
    render: h => h(App)
}).$mount('#app');