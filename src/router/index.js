import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DjsSignup from "../views/DjsSignup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RequestsIndex from "../views/RequestsIndex.vue";
import DjsShow from "../views/DjsShow.vue";
import DjsEdit from "../views/DjsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/djssignup",
    name: "djs-signup",
    component: DjsSignup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/requests",
    name: "requests-index",
    component: RequestsIndex,
  },
  {
    path: "/djs/:id",
    name: "djs-show",
    component: DjsShow,
  },
  {
    path: "/djs/:id/edit",
    name: "djs-edit",
    component: DjsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
