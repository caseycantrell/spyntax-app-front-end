<template>
  <div class="djs-edit">
    <h3>Edit Profile</h3>
    <h2>{{ editDJParams.name }}</h2>
    <img :src="editDJParams.image_url" />
    <form v-on:submit.prevent="updateDJ()">
      <div>
        <label>DJ Name:&nbsp;</label>
        <input type="text" v-model="editDJParams.name" />
      </div>
      <div>
        <label>Info:&nbsp;</label>
        <textarea v-model="editDJParams.info" required maxlength="500" />
        <br />
        <small>{{ 500 - editDJParams.info.length }} characters remaining.</small>
      </div>
      <div>
        <label>Website:&nbsp;</label>
        <input type="text" v-model="editDJParams.website" />
      </div>
      <div>
        <label>Email:&nbsp;</label>
        <input type="text" v-model="editDJParams.email" />
      </div>
      <div>
        <label>Serato Live Playlist URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.serato_url" />
      </div>
      <div>
        <label>Instagram URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.instagram" />
      </div>
      <div>
        <label>Twitter URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.twitter" />
      </div>
      <div>
        <label>Facebook URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.facebook" />
      </div>
      <div>
        <label>Venmo URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.venmo" />
      </div>
      <div>
        <label>Cashapp URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.cashapp" />
      </div>
      <div>
        <label>PayPal URL:&nbsp;</label>
        <input type="text" v-model="editDJParams.paypal" />
      </div>
      <br />
      <div>
        <button type="submit">Update</button>
      </div>
      <br />
      <button v-on:click="deleteAccount()">Delete Account</button>
    </form>
  </div>
</template>

<style scoped>
img {
  width: 250px;
}
small {
  color: red;
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
    axios.get(`/djs/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editDJParams = response.data;
    });
  },
  methods: {
    deleteAccount: function () {
      if (confirm("Are you sure you want to delete your account?")) {
        axios
          .delete("/djs/me")
          .then((response) => {
            console.log(response.data);
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("jwt");
            localStorage.removeItem("dj_id");
            this.$router.push("/djssignup");
          })
          .catch((error) => {
            this.status = error.response.status;
            this.errors = error.response.data.errors;
          });
      }
    },
    updateDJ: function () {
      axios
        .patch("/djs/me", this.editDJParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/djs/${this.editDJParams.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
