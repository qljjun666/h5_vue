const UPDATE_CACHEDROUTENAMES = 'update_cachedroutenames';
const state = {
  activatedReloadData: true, // 页面activated时是否需要重新加载
  // 缓存的路由列表
  cachedRouteNames: []
};

const mutations = {
  [UPDATE_CACHEDROUTENAMES](st, { action, route }) {
    const methods = {
      add: () => {
        st.cachedRouteNames.push(route);
      },
      delete: () => {
        st.cachedRouteNames.splice(st.cachedRouteNames.findIndex(e => e === route), 1);
      }
    };
    methods[action]();
  }
};

export default {
  namespaced: true,
  state,
  mutations
};