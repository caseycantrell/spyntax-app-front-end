<template>
  <div class="djs-edit">
    <h3>Edit Profile</h3>
    <h2>{{ editDJParams.name }}</h2>
    <img :src="editDJParams.image_url" />
    <form v-on:submit.prevent="updateDJ()">
      <div>
        <label>Name:&nbsp;</label>
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
        <label>Instagram:&nbsp;</label>
        <input type="text" v-model="editDJParams.instagram" />
      </div>
      <div>
        <label>Twitter:&nbsp;</label>
        <input type="text" v-model="editDJParams.twitter" />
      </div>
      <div>
        <label>Facebook:&nbsp;</label>
        <input type="text" v-model="editDJParams.facebook" />
      </div>
      <div>
        <label>Venmo:&nbsp;</label>
        <input type="text" v-model="editDJParams.venmo" />
      </div>
      <div>
        <label>Cashapp:&nbsp;</label>
        <input type="text" v-model="editDJParams.cashapp" />
      </div>
      <div>
        <label>PayPal:&nbsp;</label>
        <input type="text" v-model="editDJParams.paypal" />
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
img {
  width: 400px;
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
    updateDJ: function () {
      axios
        .patch("/djs/me", this.editDJParams)
        .then((response) => {
          console.log(response.data);
          window.alert("Profile successfully updated.");
          this.$router.push(`/djs/${this.editDJParams.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
