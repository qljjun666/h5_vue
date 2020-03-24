import axios from 'axios';
import store from '../store';

const NODE_ENV = process.env.NODE_ENV;

const request = axios.create({
    // 基础的请求地址
    baseURL: NODE_ENV === 'development' ? '/api' : 'http://0.0.0.0', // 后面的时线上的地址，可以改为自己的线上接口地址
    timeout: 20000 // 请求超时
});

// 添加请求拦截器
request.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 所有的请求都需要的字段，所有的请求添加loading效果
        // token
        config.headers.token = sessionStorage.getItem('TOKEN') || '';
        store.dispatch('loading', true);
        return config;
    }, (err) => {
        console.log('请求失败');
        store.dispatch('loading', false);
        return Promise.reject(err);
    }
);

// 添加响应拦截器
request.interceptors.response.use((response) => {
    // 判断是否登录，未登录跳转到登录页面
    // 对响应数据做点什么
    // 消除请求的loading效果
    store.dispatch('loading', false);
    return response;
}, (err) => {
    console.log('网络请求异常');
    store.dispatch('loading', false);
    return Promise.reject(err);
});

// 5、暴露axios模块
export default request;