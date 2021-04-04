import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router.js";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App),
}).$mount("#app")
