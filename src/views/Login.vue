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
              <form v-on:submit.prevent="submit()">
                <div class="input-icon-group mb-3">
                  <span class="input-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      />
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                      <path
                        d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
                      />
                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    v-model="newSessionParams.password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3 d-flex justify-content-between"></div>

                <div class="d-grid">
                  <input class="btn btn-primary" type="submit" value="Submit" />
                </div>
              </form>

              <div v-for="error in errors" v-bind:key="error">
                <br />
                <small style="color: red">{{ error }}</small>
              </div>
              <!---->
              <p class="pt-4 small text-muted">
                Don’t have an account yet?
                <router-link to="/djssignup" class="ms-2 text-dark fw-semibold link-underline">Sign Up</router-link>
              </p>
              <!--Divider-->
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
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("dj_id", response.data.dj_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.newSessionParams = {};
        });
    },
  },
};
</script>
