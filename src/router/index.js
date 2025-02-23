import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/UserView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/TestView.vue"),
    },
    {
      path: "/todos",
      name: "todos",
      component: () => import("@/views/TodoView.vue"),
    },
  ],
});

export default router;
