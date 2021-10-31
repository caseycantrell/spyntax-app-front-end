<template>
  <div class="djs-show">
    <h3>Your Profile</h3>
    <router-link class="button" :to="`/djs/${getDJId()}/edit`">Edit Profile</router-link>
    <h2>{{ currentDJ.name }}</h2>
    <img :src="currentDJ.image_url" />
    <p>{{ currentDJ.info }}</p>
    <p>{{ currentDJ.website }}</p>
    <p>{{ currentDJ.email }}</p>
    <p>IG: {{ currentDJ.instagram }}</p>
    <p>Twitter: {{ currentDJ.twitter }}</p>
    <p>Facebook: {{ currentDJ.facebook }}</p>
    <p>Venmo: {{ currentDJ.venmo }}</p>
    <p>Cashapp: {{ currentDJ.cashapp }}</p>
    <p>PayPal: {{ currentDJ.paypal }}</p>
    <img :src="currentDJ.qr_code_url" />
    <br />
    <button v-on:click="deleteAccount()">Delete Account</button>
  </div>
</template>

<style>
img {
  width: 400px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentDJ: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/djs/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.currentDJ = response.data;
    });
  },
  methods: {
    getDJId: function () {
      return localStorage.dj_id;
    },
    deleteAccount: function () {
      if (confirm("Are you sure you want to delete your account?")) {
        axios
          .delete("/djs/me")
          .then((response) => {
            console.log(response.data);
            window.alert("Account successfully deleted.");
            this.$router.push("/signup");
          })
          .catch((error) => {
            this.status = error.response.status;
            this.errors = error.response.data.errors;
          });
      }
    },
  },
};
</script>
