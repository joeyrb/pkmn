import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import AppState from '@/store/modules/AppState.js';
import AppBarState from '@/store/modules/AppBarState.js'
import NavDrawer from '@/store/modules/NavDrawer.js';

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app: AppState,
    appBar: AppBarState,
    navDrawer: NavDrawer,
  }
})
