import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
Vue.use(Vuex);

import dictionary from "./modules/dictionary";

export default new Vuex.Store({
  modules: {
    dictionary
  }
})
