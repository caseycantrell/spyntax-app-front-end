<template>
  <main class="main-content" id="main-content">
    <section class="position-relative">
      <div class="container position-relative">
        <div class="overflow-hidden">
          <!--Profile info header-->
          <div class="position-relative pb-7 pb-lg-12">
            <div class="row">
              <div class="col-lg-9 mx-auto">
                <div class="pt-5 d-flex flex-column h-100">
                  <nav class="nav mb-5 nav-pills">
                    <router-link :to="`/djs/${this.editDJParams.id}`" class="nav-link">
                      <i class="bi bi-person-circle me-2 align-middle"></i>
                      My profile
                    </router-link>
                  </nav>

                  <div class="card border-light p-3 mb-3">
                    <h5 class="mb-4">Edit profile</h5>

                    <form v-on:submit.prevent="updateDJ()">
                      <div class="row align-items-center">
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="size-160 mb-5 rounded-circle shadow bg-no-repeat" style="background-image">
                                <img :src="editDJParams.image_url" width="250px" />
                              </div>
                              <input
                                type="file"
                                class="size-190"
                                id="profile_pic"
                                v-on:change="setFile($event)"
                                ref="fileInput"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="name">DJ Name</label>
                          <input class="form-control" id="name" type="text" v-model="editDJParams.name" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="email">Email</label>
                          <input class="form-control" type="email" id="email" v-model="editDJParams.email" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="website">Website</label>
                          <input class="form-control" type="text" id="website" v-model="editDJParams.website" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="twitter">Twitter Handle</label>
                          <input class="form-control" type="text" id="twitter" v-model="editDJParams.twitter" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="facebook">Facebook.com/</label>
                          <input class="form-control" type="text" id="facebook" v-model="editDJParams.facebook" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="instagram">Instagram Username</label>
                          <input class="form-control" type="text" id="instagram" v-model="editDJParams.instagram" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="venmo">Venmo.com/</label>
                          <input class="form-control" type="text" id="venmo" v-model="editDJParams.venmo" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="cashapp">CashApp CashTag</label>
                          <input class="form-control" type="text" id="cashapp" v-model="editDJParams.cashapp" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="paypal">PayPal.me/</label>
                          <input class="form-control" type="text" id="paypal" v-model="editDJParams.paypal" />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label" for="serato-url">Serato Live Playlist URL</label>
                          <input class="form-control" type="text" id="serato-url" v-model="editDJParams.serato_url" />
                        </div>

                        <div class="col-md-8">
                          <label class="form-label" for="info">Bio</label>
                          <input class="form-control" type="text" id="info" v-model="editDJParams.info" />
                        </div>
                      </div>
                      <hr class="mt-5 mb-3" />
                      <div class="text-end">
                        <button type="button" class="btn btn-primary" v-on:click="updateDJ()">Save changes</button>
                        <button type="button" class="btn btn-danger" v-on:click="deleteAccount()">
                          Delete Account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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
      image_file: "",
    };
  },
  created: function () {
    axios.get(`/djs/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editDJParams = response.data;
    });
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.image_file = event.target.files[0];
      }
    },
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
      var formData = new FormData();
      formData.append("name", this.editDJParams.name);
      formData.append("info", this.editDJParams.info);
      formData.append("email", this.editDJParams.email);
      formData.append("website", this.editDJParams.website);
      formData.append("instagram", this.editDJParams.instagram);
      formData.append("serato_url", this.editDJParams.serato_url);
      formData.append("facebook", this.editDJParams.facebook);
      formData.append("twitter", this.editDJParams.twitter);
      formData.append("venmo", this.editDJParams.venmo);
      formData.append("cashapp", this.editDJParams.cashapp);
      formData.append("paypal", this.editDJParams.paypal);
      if (this.image_file != "") {
        formData.append("image_url", this.image_file);
      }
      axios
        .patch("/djs/me", formData)
        .then((response) => {
          console.log(response.data);
          this.editDJParams = {};
          this.$router.push(`/djs/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
