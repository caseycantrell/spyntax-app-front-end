<template>
  <div class="djs-edit">
    <h3>Edit Profile</h3>
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
      editDJParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/djs/${localStorage.dj_id}`).then((response) => {
      console.log(response.data);
      this.currentDJ = response.data;
    });
  },
  methods: {
    updateDJ: function () {
      axios
        .patch("/djs/me", this.editDJParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/djs/me");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
