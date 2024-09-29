<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter(); // Initialize router

    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("dj_id");
    router.push("/login");

    return {};
  },
};
</script>
