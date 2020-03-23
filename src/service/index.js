import request from '../utils/axios';

const test = () => {
    return new Promise((resolve) => {
        request.get('/pro', {}).then((res) => {
            resolve(res);
        });
    });
};

export {
    test
};