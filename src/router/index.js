import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CreatePage from "@/pages/CreatePage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/create",
    component: CreatePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
