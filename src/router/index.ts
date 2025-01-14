import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },

    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },

    {
      path: "/player/login/dashboard",
      name: "clientDashboard",
      component: () => import("../views/ClientDashboardView.vue"),
    },
    {
      path: "/player/login/dashboard/legacy-login",
      name: "clientLegacyLogin",
      component: () => import("../views/ClientLegacyLoginView.vue"),
    },
    {
      path: "/player/login/dashboard/legacy-register",
      name: "clientLegacyRegister",
      component: () => import("../views/ClientLegacyRegisterView.vue"),
    },
  ],
});

export default router;
