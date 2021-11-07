<template>
  <!-- <div class="djs-show">
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
  </div> -->

  <main class="main-content" id="main-content">
    <section class="position-relative bg-white">
      <div class="container position-relative pt-3 pb-4">
        <!--/.row-->
      </div>
    </section>
    <section class="position-relative">
      <div class="container position-relative">
        <div class="overflow-hidden">
          <!--Profile info header-->
          <div class="position-relative pb-7 pb-lg-12">
            <div class="row">
              <div class="col-lg-3 mb-5 mb-lg-0">
                <div class="h-lg-100">
                  <div class="card bg-gradient-light h-lg-100 p-3">
                    <!--profile image-->
                    <div
                      class="size-160 mb-5 rounded-circle shadow bg-no-repeat overflow-hidden"
                      style="background-image"
                    >
                      <img :src="currentDJ.image_url" width="250px" />
                    </div>
                    <h4 class="mb-2">{{ currentDJ.name }}</h4>
                    <ul class="list-unstyled border-bottom pb-3 mb-3">
                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-globe me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.website }}</a>
                      </li>

                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-twitter me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.twitter }}</a>
                      </li>
                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-facebook me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.facebook }}</a>
                      </li>
                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-instagram me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.instagram }}</a>
                      </li>
                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-venmo me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.venmo }}</a>
                      </li>
                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-paypal me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.paypal }}</a>
                      </li>
                      <li class="d-flex align-items-stretch mb-2">
                        <i class="bi bi-cashapp me-2 align-middle text-muted"></i>
                        <a href="#!" class="small link-hover-decoration">{{ currentDJ.cashapp }}</a>
                      </li>
                    </ul>
                    <span class="badge px-2 bg-primary rounded-pill">Display QR Code</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="d-flex flex-column h-100">
                  <nav class="nav mb-5 nav-pills">
                    <router-link :to="`/djs/${this.$route.params.id}/edit`" class="nav-link">
                      <i class="bi bi-gear me-2 align-middle"></i>
                      Edit Profile
                    </router-link>
                  </nav>

                  <div class="card shadow-sm p-3 h-100">
                    <h5 class="mb-4">Profile Details</h5>

                    <div class="row align-items-center">
                      <div class="col-md-6 mb-3">
                        <label class="form-label"><strong>DJ Name</strong></label>
                        <div class="form-control">{{ currentDJ.name }}</div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label"><strong>Email address</strong></label>
                        <div class="form-control">{{ currentDJ.email }}</div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label"><strong>Serato Live Playlist URL</strong></label>
                        <div class="form-control">{{ currentDJ.serato_url }}</div>
                      </div>

                      <div class="col-md-8 mb-3">
                        <label class="form-label"><strong>Bio</strong></label>
                        <div class="form-control">{{ currentDJ.info }}</div>
                      </div>
                    </div>
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
