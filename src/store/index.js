import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {},
    state,
    mutations,
    actions,
    getters
})

export default store
