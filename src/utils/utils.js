import store from '../store/index';
// import Vue from 'vue';

const { cachedRouteNames } = store.state.common;

const changeRoutes = (route, type) => {
  const routeName = route.components.default.name;
  if (routeName && type === 'add' ? !cachedRouteNames.includes(routeName) : cachedRouteNames.includes(routeName)) {
    store.commit('common/update_cachedroutenames', {
      action: type,
      route: routeName
    });
  }
};
// 定义添加缓存组件name函数，设置的时组件的name
const addRoutes = (route) => {
  changeRoutes(route, 'add');
};

// 定义删除缓存组件name函数，设置的是组件的name
const deleteRoutes = (route) => {
  changeRoutes(route, 'delete');
};

// 配置路由keepAlive状态
const setRouterBeforeEach = (router) => {
  router.beforeEach((to, from, next) => {
    // 处理缓存路由开始
    // 在处理缓存之前，先对该组件是否读取缓存进行处理
    to.matched.forEach((item) => {
      const routes = item.meta.cachedRouteNames;
      if (item.meta.keepAlive && (!routes || (routes && (!from.name || routes.includes(from.name))))) {
        addRoutes(item);
      } else {
        deleteRoutes(item);
      }
    });
    next();
  });

  // 全局混入。在该组件被解析之后，若是属于需要缓存的组件，先将其添加到缓存配置中，进行缓存
  // 导航守卫的最后一个步骤就是调用beforeRouteEnter守卫中传给next的回调函数，此时整个组件已经被解析，DOM也已经更新
  // Vue.mixin({
  //   beforeRouteEnter(to, from, next) {
  //     next(() => {
  //       to.matched.forEach((item) => {
  //         if (to.meta.keepAlive) {
  //           addRoutes(item);
  //         }
  //       });
  //     });
  //   }
  // });
};

export default {
  setRouterBeforeEach
};