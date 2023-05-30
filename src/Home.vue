<template>
    <div>
        <div v-show="layout === 'landing'" class="landing-bg h-100 bg-gradient-primary position-fixed w-100"></div>
        <IndexCompo v-if="showSidenav" />
        <main class="main-content position-relative max-height-vh-100 h-100">
            <h1 class="text-center mt-5 text-danger shadow">Visit Sidebar - Dashbosrds</h1>

            <Navbar />
            <router-view></router-view>
            <!-- <app-footer v-show="showFooter" /> -->
            <configurator :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" />
        </main>
    </div>
</template>
  
<script>
import IndexCompo from "./examples/Sidenav/IndexCompo.vue";
import configurator from "./examples/configurator.vue";
import Navbar from "./navbars/Navbar.vue";
import { mapState } from "vuex";
export default {
    name: 'HomeCompo',
    components: {
        IndexCompo,
        configurator,
        Navbar
    },
    computed: {
        ...mapState([
            "showSidenav",
        ])
    }
}
</script>
  
<style></style>
  