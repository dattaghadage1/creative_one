<template>
  <div>
    <div
    v-show="layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <IndexCompo v-if="showSidenav" />
  <main class="main-content position-relative max-height-vh-100 h-100">
    <!-- <navbar v-if="showNavbar" /> -->
    <!-- <router-view /> -->
    <Buttons/>
    <Notification/>
    <!-- <app-footer v-show="showFooter" /> -->
    <!-- <configurator
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    /> -->
  </main>
  </div>
</template>

<script>
import IndexCompo from "./examples/Sidenav/IndexCompo.vue";
import Notification from "./view/Notifications.vue"
import Buttons from "./view/Buttons.vue"
import { mapState } from "vuex";
export default {
  name: 'App',
  components: {
    IndexCompo,
    Notification,
    Buttons
  },
  computed:{
    ...mapState([
      "showSidenav",
    ])
  }
}
</script>

<style></style>
