import { createRouter, createWebHistory } from "vue-router";
import  Buttons  from "../view/Buttons.vue"
// import  ArgonAlerts  from "../view/Alert.vue"
import KPIs from "../view/KPIs.vue"
import  Notifications  from "../view/Notifications.vue"
const routes = [
  {
    name: "VbCheck",
    path: "/Notifications",
    component: Notifications
  },
  {
    path: "/kpi",
    name: "/KPIs",
    component: KPIs
  },
  {
    path:"/buttons",
    name:"/Buttons",
    component:Buttons
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
