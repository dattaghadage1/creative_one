import { createRouter, createWebHistory } from "vue-router";
import  Buttons  from "../view/Buttons.vue"
import KPIs from "../view/KPIs.vue"
import  Notifications  from "../view/Notifications.vue"
import SweetAlert from "../view/SweetAlert.vue"
import Widgets from "../view/Widgets.vue"
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
  },
  {
    path:"/widgets",
    name:"Widgets",
    component:Widgets
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
