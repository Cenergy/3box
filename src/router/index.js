import VueRouter from "vue-router";

import Vue from "vue";
Vue.use(VueRouter);

import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import Profile from "../components/Profile";
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: {
        title: "首页"
      }
    },
    {
      path: "/home",
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/about",
      component: About,
      meta: {
        title: "关于"
      }
    },
    {
      path: "/user/:id",
      component: User,
      meta: {
        title: "用户"
      }
    },
    {
      path: "/profile",
      component: Profile
    }
  ],
  mode: "history",
  linkActiveClass: "active"
});
// 路由守卫
// 前置守卫
router.beforeEach((to, from, next) => {
  // 从from到to
  document.title = to.matched[0].meta.title || "vuebox";
  next();
});
// 后置钩子
router.afterEach((to, from) => {
  console.log("----------");
});

export default router;
