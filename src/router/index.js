import { createRouter, createWebHistory } from "vue-router";
import  Buttons  from "../view/Buttons.vue"
// import  ArgonAlerts  from "../view/Alert.vue"
import KPIs from "../view/KPIs.vue"
import  Notifications  from "../view/Notifications.vue"
import SweetAlert from "../view/SweetAlert.vue"
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
  },
  {
    path:"/sweet_alert",
    name:"/SweetAlert",
    component:SweetAlert
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
