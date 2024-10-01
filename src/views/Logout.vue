<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { inject } from "vue";

export default {
  setup() {
    const router = useRouter(); // Initialize router
    const updateLoginState = inject("updateLoginState"); // Inject the method from App.vue

    // Perform logout actions
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("dj_id");

    // update the login state
    if (updateLoginState) {
      updateLoginState();
    }

    // redirect to the login page
    router.push("/login");

    return {};
  },
};
</script>