<template>
  <div class="djs-signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>DJ Name:&nbsp;</label>
        <input type="text" v-model="newDJParams.name" />
      </div>
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
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newDJParams: {
        name: "",
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
