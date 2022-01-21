import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import List from "../components/board/List.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/board/list",
    name: "List",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
