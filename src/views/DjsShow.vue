<template>
  <div class="djs-show">
    <h3>Your Profile</h3>
    <router-link class="button" :to="`/djs/${this.$route.params.id}/edit`">Edit Profile</router-link>
    <h2>{{ currentDJ.name }}</h2>
    <img :src="currentDJ.image_url" />
    <p>Info: {{ currentDJ.info }}</p>
    <p>Website: {{ currentDJ.website }}</p>
    <p>Email: {{ currentDJ.email }}</p>
    <p>IG: {{ currentDJ.instagram }}</p>
    <p>Twitter: {{ currentDJ.twitter }}</p>
    <p>Facebook: {{ currentDJ.facebook }}</p>
    <p>Venmo: {{ currentDJ.venmo }}</p>
    <p>Cashapp: {{ currentDJ.cashapp }}</p>
    <p>PayPal: {{ currentDJ.paypal }}</p>
    <button v-on:click="showQRCode()">Show QR Code</button>
    <br />

    <dialog id="qr-code">
      <form method="dialog">
        <img
          :src="`http://api.qrserver.com/v1/create-qr-code/?data=${datagoeshere}&size=500x500&margin=20&bgcolor=000&color=fff&ecc=H`"
        />
        <br />
        <button>Close</button>
      </form>
    </dialog>
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
    getQRCode: function () {
      axios
        .get(
          "http://api.qrserver.com/v1/create-qr-code/?data=www.djpressplay.com&size=500x500&margin=20&bgcolor=000&color=fff&ecc=H"
        )
        .then((response) => {
          this.currentDJ.qr_code_url = response;
        });
    },
    showQRCode: function () {
      document.querySelector("#qr-code").showModal();
    },
  },
};
</script>
