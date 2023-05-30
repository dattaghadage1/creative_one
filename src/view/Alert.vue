<template>
  <div class="container">
    <h3 class="h4 text-success font-weight-bold mb-4 mt-5">Alerts</h3>
    <!-- here call multiple time component and pass diff. types props value -->
    <base-alert icon="ni ni-like-2" dismissible type="success">
      
        <slot name="text">
          <strong>Success!</strong> This is a success alert—check it out!
        </slot>
      
    </base-alert>
    <base-alert icon="ni ni-bell-55" dismissible type="info">
    <slot name="text">
      <strong>Info!</strong> This is a info alert—check it out!
    </slot>
    </base-alert>
    <base-alert icon="ni ni-bell-55" dismissible type="warning">
    <slot name="text">
      <strong>warning!</strong> This is a warning alert—check it out!
    </slot>
    </base-alert>
    <base-alert icon="ni ni-support-16" dismissible type="danger">
    <slot name="text">
      <strong>danger!</strong> This is a danger alert—check it out!
    </slot>
    </base-alert>
  </div>
</template>
<script>
import BaseAlert from "../components/BaseAlert.vue";

export default {
  name:"ArgonAlerts",
  components: {
    BaseAlert
  },
};
</script>
<style></style>
