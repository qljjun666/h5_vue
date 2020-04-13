import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import app from './modules/app';
import common from './modules/common';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: { app, common },
  state,
  mutations,
  actions,
  getters
});

export default store;
