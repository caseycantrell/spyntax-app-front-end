<template>
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
                      class="size-200 mb-4 rounded-circle shadow bg-no-repeat overflow-hidden"
                      style="background-image"
                    >
                      <img :src="currentDJ.image_url" width="250px" />
                    </div>
                    <h4 class="mb-2">{{ currentDJ.name }}</h4>
                    <ul class="list-unstyled border-bottom pb-3 mb-3">
                      <div v-if="currentDJ.website !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <i class="bi bi-globe me-2 align-middle text-muted"></i>
                          <a :href="`https://${currentDJ.website}`" target="_blank" class="small link-hover-decoration">
                            {{ currentDJ.website }}
                          </a>
                        </li>
                      </div>
                      <div v-if="currentDJ.website !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <i class="bi bi-twitter me-2 align-middle text-muted"></i>
                          <a
                            :href="`https://www.twitter.com/${currentDJ.twitter}`"
                            target="_blank"
                            class="small link-hover-decoration"
                          >
                            {{ currentDJ.twitter }}
                          </a>
                        </li>
                      </div>
                      <div v-if="currentDJ.facebook !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <i class="bi bi-facebook me-2 align-middle text-muted"></i>
                          <a
                            :href="`http://www.facebook.com/${currentDJ.facebook}`"
                            target="_blank"
                            class="small link-hover-decoration"
                          >
                            {{ currentDJ.facebook }}
                          </a>
                        </li>
                      </div>
                      <div v-if="currentDJ.instagram !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <i class="bi bi-instagram me-2 align-middle text-muted"></i>
                          <a
                            :href="`https://www.instagram.com/${currentDJ.instagram}`"
                            target="_blank"
                            class="small link-hover-decoration"
                          >
                            {{ currentDJ.instagram }}
                          </a>
                        </li>
                      </div>
                      <div v-if="currentDJ.venmo !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <i class="bi bi-cash me-2 align-middle text-muted"></i>
                          <a
                            :href="`https://www.venmo.com/u/${currentDJ.venmo}`"
                            target="_blank"
                            class="small link-hover-decoration"
                          >
                            {{ currentDJ.venmo }}
                          </a>
                        </li>
                      </div>
                      <div v-if="currentDJ.paypal !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-paypal"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061zM6.543 8.82l-.845 5.213v.001l-.208 1.32c-.01.066.04.123.105.123H8.14c.173 0 .32-.125.348-.296v-.005l.026-.129.48-3.043.03-.164a.873.873 0 0 1 .862-.734h.38c1.201 0 2.24-.244 3.043-.815.797-.567 1.39-1.477 1.663-2.874.229-1.175.096-2.087-.45-2.71a2.126 2.126 0 0 0-.548-.438l-.003.016c-.645 3.312-2.853 4.456-5.672 4.456H6.864a.695.695 0 0 0-.321.079z"
                            />
                          </svg>
                          <i class="bi bi-paypal me-2 align-middle text-muted"></i>
                          <a
                            :href="`https://www.paypal.me/${currentDJ.paypal}`"
                            target="_blank"
                            class="small link-hover-decoration"
                          >
                            {{ currentDJ.paypal }}
                          </a>
                        </li>
                      </div>
                      <div v-if="currentDJ.cashapp !== ''">
                        <li class="d-flex align-items-stretch mb-2">
                          <i class="bi bi-currency-dollar me-2 align-middle text-muted"></i>
                          <a
                            :href="`https://www.cash.app/${currentDJ.cashapp}`"
                            target="_blank"
                            class="small link-hover-decoration"
                          >
                            {{ currentDJ.cashapp }}
                          </a>
                        </li>
                      </div>
                    </ul>

                    <a
                      href="#modalBasic"
                      data-bs-toggle="modal"
                      aria-expanded="false"
                      class="btn btn-primary"
                      v-if="isLoggedIn() && getDJId() == currentDJ.id"
                    >
                      Display QR Code
                    </a>
                  </div>

                  <!-- QR Code Modal -->
                  <div
                    class="modal fade"
                    id="modalBasic"
                    tabindex="-1"
                    aria-labelledby="modalBasicLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content border-0">
                        <div class="modal-header border-0 bg-light">
                          <h5 class="modal-title">Your QR Code</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="bi bi-x fs-5 lh-1"></i>
                          </button>
                        </div>
                        <div class="modal-body py-2 border-0">
                          <center>
                            <img
                              :src="`https://api.qrserver.com/v1/create-qr-code/?data=https://spyntax.netlify.app/requests?dj_id=${currentDJ.id}&size=325x325&margin=20&bgcolor=000&color=fff&ecc=H`"
                            />
                          </center>
                        </div>
                        <div class="modal-footer bg-light border-0">
                          <button type="button" class="btn btn-white btn-sm" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary btn-sm" v-on:click="doPrint()">Print</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="d-flex flex-column h-100">
                  <nav class="nav mb-3 nav-pills" v-if="getDJId() == currentDJ.id">
                    <router-link :to="`/djs/${this.$route.params.id}/edit`" class="nav-link">
                      <i class="bi bi-gear me-2 align-middle"></i>
                      Edit Profile
                    </router-link>
                  </nav>

                  <div class="card shadow-sm p-3 h-100">
                    <h5 class="mb-4">DJ Details</h5>

                    <div class="row align-items-center">
                      <div class="col-md-6 mb-3">
                        <label class="form-label"><strong>DJ Name</strong></label>
                        <div class="form-control">{{ currentDJ.name }}</div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label"><strong>Email</strong></label>
                        <div class="form-control">{{ currentDJ.email }}</div>
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
    doPrint: function () {
      window.print();
    },
    isLoggedIn: function () {
      return localStorage.jwt;
    },
  },
};
</script>
