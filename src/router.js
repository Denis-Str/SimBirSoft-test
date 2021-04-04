import Vue from "vue";
import VueRouter from "vue-router";
import mainContent from "./page/index.vue";
import StarredWords from "./page/StarredWords/StarredWords.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/",
    component: mainContent
  },
  { path: "/starred-words",
    component: StarredWords
  },
  { path: "*",
    component: NotFoundComponent
  }
]

export default new VueRouter({ routes, mode: "history" });

