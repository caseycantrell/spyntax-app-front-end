import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DJSignup from "../views/DJSignup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RequestsIndex from "../views/RequestsIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/djsignup",
    name: "DJ Signup",
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
    name: "Requests Index",
    component: RequestsIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
