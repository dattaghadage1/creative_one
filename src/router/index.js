import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: ""
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
