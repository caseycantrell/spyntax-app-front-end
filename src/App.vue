<template>
  <div id="app">
    <section class="position-relative shadow pb-0 pb-lg-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/assets/img/spyntax2.png" width="180px" alt="" />
          </a>

          <div class="d-flex align-items-center navbar-no-collapse-items order-lg-last">
            <button
              class="navbar-toggler order-last"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-demo-1"
              aria-controls="navbar-demo-1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i></i>
              </span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbar-demo-1">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-4">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li v-if="isLoggedIn" class="nav-item me-4">
                <router-link :to="`/requests?dj_id=${djId}`" class="nav-link">Requests</router-link>
              </li>
              <li v-if="isLoggedIn" class="nav-item me-4">
                <router-link :to="`/djs/${djId}`" class="nav-link">Profile</router-link>
              </li>
              <li v-if="!isLoggedIn" class="nav-item me-4">
                <router-link to="/djssignup" class="nav-link">Signup</router-link>
              </li>
              <li v-if="!isLoggedIn" class="nav-item me-4">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li v-if="isLoggedIn" class="nav-item me-4">
                <router-link to="/logout" class="nav-link">Logout</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
    </section>
  </div>
</template>

<script>
import { provide } from "vue";

export default {
  data() {
    return {
      isLoggedIn: !!localStorage.getItem("jwt"), // set initial state from localStorage
      djId: localStorage.getItem("dj_id") || null,
    };
  },
  methods: {
    updateLoginState() {
      this.isLoggedIn = !!localStorage.getItem("jwt");
      this.djId = localStorage.getItem("dj_id");
    },
  },
  created() {
    // exxposes the updateLoginState method globally
    provide("updateLoginState", this.updateLoginState);
    this.updateLoginState();
  },
};
</script>
