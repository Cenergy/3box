import VueRouter from "vue-router";

import Vue from "vue";
Vue.use(VueRouter);

import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/user/:id",
      component: User
    }
  ],
  mode: "history",
  linkActiveClass: "active"
});

export default router;
