<template>
  <div class="djs-show">
    <router-link class="button" :to="`/djs/${this.$route.params.id}/edit`">Edit Profile</router-link>
    <br />
    <h2>{{ currentDJ.name }}</h2>
    <img :src="currentDJ.image_url" width="250px" />
    <p>Info: {{ currentDJ.info }}</p>
    <p>Website: {{ currentDJ.website }}</p>
    <p>Email: {{ currentDJ.email }}</p>
    <p>Serato Live Playlist URL: {{ currentDJ.serato_url }}</p>
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
        <div id="printable-qr-code">
          <img
            :src="`http://api.qrserver.com/v1/create-qr-code/?data=https://spyntax.netlify.app/requests?dj_id=${currentDJ.id}&size=500x500&margin=20&bgcolor=000&color=fff&ecc=H`"
          />
        </div>
        <br />
        <button v-on:click="doPrint()">Print</button>
        &nbsp;
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

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
    showQRCode: function () {
      document.querySelector("#qr-code").showModal();
    },
    doPrint: function () {
      window.print();
    },
  },
};
</script>
