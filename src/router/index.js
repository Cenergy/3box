import VueRouter from "vue-router";

import Vue from "vue";
Vue.use(VueRouter);

const Home = () => import("../views/home/Home");
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
      path: "/category",
      component: () => import("../views/category/Category")
    },
    {
      path: "/cart",
      component: () => import("../views/cart/Cart")
    },
    {
      path: "/profile",
      component: () => import("../views/profile/Profile")
    }
  ],
  mode: "history",
  linkActiveClass: "active"
});

export default router;
