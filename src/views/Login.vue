<template>
  <section class="bg-white position-relative">
    <div class="bg-pattern text-light w-100 h-100 start-0 top-0 position-absolute"></div>
    <div class="container py-9 pt-lg-12 position-relative z-index-1">
      <div class="row align-items-center justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 z-index-2">
          <h2 class="mb-1 display-6">Welcome back.</h2>
          <p class="mb-4 text-muted">Please Sign In below...</p>
          <div class="position-relative">
            <div>
              <form @submit.prevent="submit">
                <div class="input-icon-group mb-3">
                  <span class="input-icon">
                    <!-- SVG icons here -->
                  </span>
                  <input
                    type="email"
                    v-model="newSessionParams.email"
                    class="form-control"
                    autofocus
                    placeholder="Email"
                  />
                </div>
                <div class="input-icon-group mb-3">
                  <span class="input-icon">
                    <!-- SVG icons here -->
                  </span>
                  <input
                    type="password"
                    v-model="newSessionParams.password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="d-grid">
                  <input class="btn btn-primary" type="submit" value="Submit" />
                </div>
              </form>

              <div v-for="(error, index) in errors" :key="index">
                <br />
                <small style="color: red">{{ error }}</small>
              </div>

              <p class="pt-4 small text-muted">
                Don’t have an account yet?
                <router-link to="/djssignup" class="ms-2 text-dark fw-semibold link-underline">Sign Up</router-link>
                <br />
                <br />
                Just wanna poke around and check things out without signing up? Try this dummy account:
              </p>

              <p>
                <b>Email:</b>
                djjazzhands@gmail.com
                <br />
                <b>Password:</b>
                password
              </p>
              <!--divider-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newSessionParams: {
        email: "",
        password: ""
      },
      errors: [],
    };
  },
  methods: {
    submit() {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          // Save JWT and DJ ID to localStorage
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("dj_id", response.data.dj_id);

          // calling this to update the login state reactively
          this.$root.updateLoginState();

          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
        });
    },
  },
};
</script>

