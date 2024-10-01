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
                      <div v-if="currentDJ.twitter !== ''">
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
                              :src="`https://api.qrserver.com/v1/create-qr-code/?data=https://spyntax.vercel.app/requests?dj_id=${currentDJ.id}&size=325x325&margin=20&bgcolor=000&color=fff&ecc=H`"
                            />
                          </center>
                        </div>
                        <div class="modal-footer bg-light border-0">
                          <button type="button" class="btn btn-white btn-sm" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary btn-sm" @click="doPrint">Print</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="d-flex flex-column h-100">
                  <nav class="nav mb-3 nav-pills" v-if="getDJId() == currentDJ.id">
                    <router-link :to="`/djs/${$route.params.id}/edit`" class="nav-link">
                      <i class="bi bi-gear me-2 align-middle"></i>
                      Edit Profile
                    </router-link>
                  </nav>

                  <div class="card shadow-sm p-3 h-100">
                    <h5 class="mb-4">DJ Details</h5>

                    <div class="row align-items-center">
                      <div class="col-md-6 mb-3">
                        <label class="form-label"><strong>DJ Name</strong></label>
                        <div class="form-control" style="min-height: 44px;">{{ currentDJ.name }}</div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label" ><strong>Email</strong></label>
                        <div class="form-control" style="min-height: 44px;">{{ currentDJ.email }}</div>
                      </div>

                      <div class="col-md-8 mb-3">
                        <label class="form-label"><strong>Bio</strong></label>
                        <div class="form-control" style="min-height: 44px;">{{ currentDJ.info }}</div>
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
  data() {
    return {
      currentDJ: {},
      errors: [],
    };
  },
  created() {
    axios.get(`/djs/${this.$route.params.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
    .then((response) => {
      this.currentDJ = response.data;
    });
  },
  methods: {
    getDJId() {
      return localStorage.dj_id;
    },
    doPrint() {
      window.print();
    },
    isLoggedIn() {
      return localStorage.jwt;
    },
  },
};
</script>
