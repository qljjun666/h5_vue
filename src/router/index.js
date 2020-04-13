import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = resolve => require(['../routers/Home.vue'], resolve);
const List = resolve => require(['../routers/list.vue'], resolve);
const Detail = resolve => require(['../routers/detail.vue'], resolve);
const router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'List',
      path: '/list',
      component: List,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'Detail',
      path: '/detail',
      component: Detail
    }
  ]
});
export default router;