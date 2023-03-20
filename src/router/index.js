import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardLayout,
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/JobsView.vue"),
        },
        
      ],
    },
   
  ],
});



router.beforeEach((to, from, next) => {
  let isAuthenticated = false;
  const admin = localStorage.getItem("roleAdmin");
  console.log("router", to);
  if (to.meta.needsAuth) {
    if (admin) {
      next();
    } else {
      next("/");
    }
  } 
  else {
    next();
  }
});



export default router;
