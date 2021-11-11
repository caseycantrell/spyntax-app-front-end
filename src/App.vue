<template>
  <div id="app">
    <section class="position-relative shadow pb-0 pb-lg-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container position-relative">
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
              <li v-if="isLoggedIn()" class="nav-item me-4">
                <router-link :to="`/requests?dj_id=${getDJId()}`" class="nav-link">Requests</router-link>
              </li>
              <li v-if="isLoggedIn()" class="nav-item me-4">
                <router-link :to="`/djs/${getDJId()}`" class="nav-link">Profile</router-link>
              </li>
              <li v-if="!isLoggedIn()" class="nav-item me-4">
                <router-link to="/djssignup" class="nav-link">Signup</router-link>
              </li>
              <li v-if="!isLoggedIn()" class="nav-item me-4">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li v-if="isLoggedIn()" class="nav-item me-4">
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
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.jwt;
    },
    getDJId: function () {
      return localStorage.dj_id;
    },
  },
};
</script>
