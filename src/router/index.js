import { createRouter, createWebHashHistory } from "vue-router";
import UnivDetails from "../components/UnivDetails.vue"
import AllUniversite from "../components/AllUniversite.vue"
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/univdetails",
    name: "univdetails",
    component: UnivDetails,
  },
  {
    path: "/alluniv",
    name: "alluniv",
    component: AllUniversite,
  },
  
  
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
