import request from '../utils/axios';
import api from './api';

// const http = (url, params = {}) => {
//     return new Promise((resolve) => {
//         request.get(url, params).then((res) => {
//             resolve(res);
//         });
//     });
// };

// const test = () => {
//     return http(api.test);
// };
const test = (data) => {
    return request({
        url: api.test,
        method: 'get',
        data: { BODY: data }
    });
};

export {
    test
};