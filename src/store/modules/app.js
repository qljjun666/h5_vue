let timer = null;
const LOADING = 'loading';

export default {
    state: {
        loading: false
    },
    mutations: {
        [LOADING](state, boolean) {
            console.log(1111);
            state.loading = boolean;
        }
    },
    actions: {
        // 对请求时间短于250ms的请求不做loading处理
        [LOADING]({ commit }, boolean) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                commit(LOADING, !!boolean);
            }, 250);
        }
    }
};