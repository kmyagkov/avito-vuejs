import Vue from 'vue';
import Vuex from 'vuex';
import Ads from './ads';
import Shared from './shared';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Ads,
    Shared
  }
});
