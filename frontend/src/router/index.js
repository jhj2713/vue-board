import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import List from "../components/board/List.vue";
import Write from "../components/Write.vue";
import View from "../components/board/View.vue";
import Signup from "../components/user/Signup.vue";
import Login from "../components/user/Login.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/board/list/:type",
    name: "List",
    component: List,
  },
  {
    path: "/board/write",
    name: "Write",
    component: Write,
  },
  {
    path: "/board/view",
    name: "View",
    component: View,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
