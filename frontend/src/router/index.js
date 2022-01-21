import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import List from "../components/board/List.vue";
import Write from "../components/Write.vue";

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
  {
    path: "/board/write",
    name: "Write",
    component: Write,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
