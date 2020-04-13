import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = resolve => require(['../routers/Home.vue'], resolve);
const router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home,
      meta: {
        keepAlive: true
      }
    }
  ]
});
export default router;