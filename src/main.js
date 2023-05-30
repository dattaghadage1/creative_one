import { createApp } from 'vue';
import App from './App.vue';
import store from './store'
import router from './router/index';
import "./assets/vendor/nucleo/css/nucleo-icons.css";
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/scss/argon-dashboard.scss";
import "./assets/css/nucleo-icons.css";
// import "./assets/css/nucleo-svg.css";
import argonDashboard from './argon-dashboard'
import VueSweetalert2 from 'vue-sweetalert2';
createApp(App).use(store).use(router).use(argonDashboard).use(VueSweetalert2).mount('#app')
