import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DJSignup from "../views/DJSignup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RequestsIndex from "../views/RequestsIndex.vue";
import DJShow from "../views/DJShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/djsignup",
    name: "dj-signup",
    component: DJSignup,
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
    path: "/dj/:id",
    name: "dj-show",
    component: DJShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
