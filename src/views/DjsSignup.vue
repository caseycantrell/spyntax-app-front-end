<template>
  <div class="djs-signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:&nbsp;</label>
        <input type="email" v-model="newDJParams.email" />
      </div>
      <div>
        <label>Password:&nbsp;</label>
        <input type="password" v-model="newDJParams.password" />
      </div>
      <div>
        <label>Confirm Password:&nbsp;</label>
        <input type="password" v-model="newDJParams.password_confirmation" />
        <br />
        <small v-if="newDJParams.password !== newDJParams.password_confirmation">Passwords must match.</small>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
small {
  color: red;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newDJParams: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/djs", this.newDJParams)
        .then((response) => {
          console.log(response.data);
          window.alert("Account successfully created, please login to continue.");
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
