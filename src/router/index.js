import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = resolve => require(['../routers/Home.vue'], resolve);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            direct: '/home',
            component: Home
        },
        {
            path: '/home',
            direct: '/home',
            component: Home
        }
    ]
});
export default router;