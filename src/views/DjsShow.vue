<template>
  <div class="dj-show">
    <h2>Your Profile</h2>
    <p>{{ currentDJ.name }}</p>
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
    };
  },
  created: function () {
    axios.get(`/djs/${localStorage.dj_id}`).then((response) => {
      console.log(response.data);
      this.currentDJ = response.data;
    });
  },
  methods: {},
};
</script>
