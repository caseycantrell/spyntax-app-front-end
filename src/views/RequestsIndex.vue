<template>
  <div class="requests-index">
    <!-- <h3>{{ currentDJ.name }}</h3>
    <img :src="currentDJ.image_url" />
    <p>Info: {{ currentDJ.info }}</p>
    <p>Website: {{ currentDJ.website }}</p>
    <p>Email: {{ currentDJ.email }}</p>
    <p>Email: {{ currentDJ.serato_url }}</p>
    <p>IG: {{ currentDJ.instagram }}</p>
    <p>Twitter: {{ currentDJ.twitter }}</p>
    <p>Facebook: {{ currentDJ.facebook }}</p>
    <p>Venmo: {{ currentDJ.venmo }}</p>
    <p>Cashapp: {{ currentDJ.cashapp }}</p>
    <p>PayPal: {{ currentDJ.paypal }}</p>
    <br />
    <button v-on:click="newRequest()">Make Request</button>
    <br />
    <div v-if="getDJId() == currentDJ.id">
      <button v-on:click="clearRequests()" v-on:submit.prevent="clearRequests()">Clear Requests</button>
    </div>
    <br />
    <div v-if="currentSong !== null">
      <h1>Now Playing:</h1>
      <small>{{ currentSong }}</small>
    </div>
    <br />
    <br />
    <button v-on:click="songScrape()">Show Current Song</button>
    <br />
    <br />
    <h2>Current Requests</h2>
    <div v-for="request in requests" v-bind:key="request.id">
      <div>
        <strong>{{ request.song }}</strong>
      </div>
      <div>{{ request.comments }}</div>
      <div>
        <small>Status: {{ request.status }}</small>
      </div>
      <div>
        <small>{{ relativeDate(request.created_at) }}</small>
      </div>
      <br />
      <div v-if="getDJId() == currentDJ.id">
        <button v-if="isLoggedIn()" v-on:click="changeStatus(request, 'approved')">Approved</button>
        &nbsp;
        <button v-if="isLoggedIn()" v-on:click="changeStatus(request, 'declined')">Declined</button>
      </div>
      <br />
      <br />
    </div> -->

    <!-- <dialog id="new-request">
      <form method="dialog">
        <h1>Make a Request</h1>
        <p>
          Song:
          <input type="text" v-model="newRequestParams.song" />
        </p>
        <p>
          Comments:
          <input type="text" v-model="newRequestParams.comments" />
        </p>
        <button v-on:click="createRequest()">Submit</button>
        <button>Close</button>
      </form>
    </dialog> -->

    <main>
      <section
        id="article-header"
        class="position-relative bg-gradient-secondary jarallax text-white"
        data-jarallax=".3"
      >
        <img src="assets/img/turntable2.jpeg" alt="" class="jarallax-img opacity-30" />
        <div class="container pt-11 pt-lg-14 pb-7 pb-lg-12 position-relative">
          <article class="row">
            <div class="col-lg-10 col-xl-8">
              <div class="position-relative pb-3 pb-lg-0">
                <div>
                  <h2 class="my-3 display-3">Requests</h2>
                  <div class="d-flex mb-4 small align-items-center">
                    <a :href="`/djs/${this.$route.query.dj_id}`">
                      <img :src="currentDJ.image_url" alt="" class="size-70 rounded-circle me-2" />
                    </a>
                    <span class="text-muted d-inline-block">
                      For
                      <a :href="`/djs/${this.$route.query.dj_id}`" class="text-white">{{ currentDJ.name }}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <svg
          class="position-absolute start-0 bottom-0 text-white"
          preserveAspectRatio="none"
          width="100%"
          height="120"
          viewBox="0 0 800 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M800 240H0L800 0V240Z" fill="currentColor" />
        </svg>
      </section>
      <div class="py-3 d-grid">
        <center>
          <a
            href="#request"
            data-bs-toggle="modal"
            aria-expanded="false"
            class="btn btn-primary btn-hover-arrow btn-lg mb-4 me-0"
          >
            Make a Request
          </a>
        </center>
        <div>
          <center>
            <button
              href="#nowPlaying"
              data-bs-toggle="modal"
              aria-expanded="false"
              class="btn btn-primary btn-circle-ripple p-0 size-50 rounded-pill fs-3 lh-1 center-both me-4 mb-3"
              v-on:click="songScrape()"
            >
              <i class="bi bi-play-fill fs-5 lh-1 align-middle"></i>
            </button>
            <strong>Show Current Song</strong>
          </center>
        </div>
      </div>
      <!-- Now playing modal -->
      <div class="modal fade" id="nowPlaying" tabindex="-1" aria-labelledby="modalBasicLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header border-0 bg-light">
              <h2 class="modal-title">Now Playing:</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="bi bi-x fs-5 lh-1"></i>
              </button>
            </div>
            <div class="modal-body py-5 border-0">
              <div v-if="currentSong !== null">
                <h4>{{ currentSong }}</h4>
              </div>
            </div>
            <div class="modal-footer bg-light border-0">
              <button type="button" class="btn btn-white btn-sm" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- <section class="position-relative">
        <div class="container py-7">
          <div class="row">
            <div class="col-xl-9 mx-auto" v-for="request in requests" v-bind:key="request.id">
              <article class="article mb-8">
                <blockquote
                  class="
                    blockquote
                    rounded-3 rounded-0
                    p-4
                    py-lg-2
                    bg-white
                    shadow-lg
                    border-success border-start border-5
                    my-2
                  "
                >
                  <h2 class="mb-2 display-8 fw-normal">{{ request.song }}</h2>
                  <p>{{ request.comments }}</p>
                  <small>{{ relativeDate(request.created_at) }}</small>
                  <br />
                  <small>Status: {{ request.status }}</small>
                  <div class="d-flex pt-2 justify-content-between align-items-center" v-if="getDJId() == currentDJ.id">
                    <div class="text-end">
                      <button
                        class="rounded-pill btn btn-rise btn-outline-success m-2"
                        v-if="isLoggedIn()"
                        v-on:click="changeStatus(request, 'approved')"
                      >
                        <div class="btn-rise-bg bg-success"></div>
                        <div class="btn-rise-text">Approve</div>
                      </button>
                      <button
                        class="rounded-pill btn btn-rise btn-outline-danger m-2"
                        v-if="isLoggedIn()"
                        v-on:click="changeStatus(request, 'declined')"
                      >
                        <div class="btn-rise-bg bg-danger"></div>
                        <div class="btn-rise-text">Decline</div>
                      </button>
                    </div>
                  </div>
                </blockquote>
              </article>
            </div>
          </div>
        </div>
      </section> -->
      <!-- <ul class="list-unstyled mb-4 mb-lg-6 px-8">
        <li class="mb-1 py-3" v-for="request in requests" v-bind:key="request.id">
          <div class="px-4 py-4 border rounded border-end">
            <div class="mb-3 justify-content-between">
              <div class="d-flex align-items-center">
                <h6 class="mb-0 me-3">{{ request.song }}</h6>
                <small class="text-muted">{{ relativeDate(request.created_at) }}</small>
              </div>
            </div>
            <p class="mb-0">
              {{ request.comments }}
            </p>
            <br />
            <div>
              <small class="text-muted">Status: {{ request.status }}</small>
            </div>
            <div class="d-flex pt-2 align-items-center" v-if="getDJId() == currentDJ.id">
              <button
                class="btn btn-outline-primary mb-2 me-1"
                v-if="isLoggedIn()"
                v-on:click="changeStatus(request, 'approved')"
              >
                Approve
              </button>
              <button
                class="btn btn-outline-danger mb-2 me-1"
                v-if="isLoggedIn()"
                v-on:click="changeStatus(request, 'declined')"
              >
                Decline
              </button>
            </div>
          </div>
        </li>
   

      </ul>  -->

      <div class="container py-7 py-lg-3 position-relative z-index-1" v-if="requests.length > 0">
        <ul class="list-group">
          <li class="list-group-item py-7">
            <div class="d-flex align-items-start">
              <div class="flex-grow-1">
                <div class="d-sm-flex align-items-center" v-for="request in requests" v-bind:key="request.id">
                  <div class="mb-0 mb-sm-4 flex-grow-1">
                    <h4>{{ request.song }}</h4>
                    <p>
                      <strong>Comments:</strong>
                      {{ request.comments }}
                    </p>
                    <small class="mb-0 small">{{ relativeDate(request.created_at) }}</small>
                    <br />
                    <small class="mb-0 small">Status: {{ request.status }}</small>

                    <i class="me-1 bi bi-check fs-5 lh-1" v-if="request.status == 'approved'" style="color: green"></i>
                    <i
                      class="me-1 bi bi-x fs-5 lh-1 align-middle"
                      v-if="request.status == 'declined'"
                      style="color: red"
                    ></i>
                    <br />
                  </div>
                  <div class="">
                    <div class="d-flex align-items-center" v-if="getDJId() == currentDJ.id">
                      <a
                        class="btn btn-sm btn-outline-light border text-success shadow-sm"
                        v-on:click="changeStatus(request, 'approved')"
                      >
                        <i class="me-1 bi bi-check fs-6 lh-1"></i>
                        Approve
                      </a>
                      <a
                        class="btn btn-sm btn-outline-light border text-danger shadow-sm"
                        v-on:click="changeStatus(request, 'declined')"
                        style="color: red"
                      >
                        <i class="me-1 bi bi-x fs-6 lh-1 align-middle" style="color: red"></i>
                        Decline
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <br />
        <center>
          <a class="rounded-pill btn btn-rise btn-outline-danger m-2" v-on:click="clearRequests()">
            <div class="btn-rise-bg bg-danger"></div>
            <div class="btn-rise-text">Clear All Requests</div>
          </a>
        </center>
        <br />
      </div>
      <section class="position-relative overflow-hidden position-relative bg-white">
        <svg
          class="position-absolute start-50 bottom-0 translate-middle-x text-light"
          xmlns="http://www.w3.org/2000/svg"
          width="150%"
          height="130%"
          preserveAspectRatio="none"
          viewBox="0 0 189 105"
          fill="none"
        >
          <path
            fill-opacity="1"
            d="M180.928 83.1476C151.384 111.424 35.6911 112.547 7.27525 84.8329C-20.9151 57.1185 37.9464 0.566018 95.9058 0.004238C153.64 -0.557542 210.471 54.8714 180.928 83.1476Z"
            fill="currentColor"
          />
        </svg>
      </section>
      <!-- New request modal -->
      <div class="modal fade" id="request" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Make a Request</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Song:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="newRequestParams.song" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Comments:</label>
                  <textarea class="form-control" id="message-text" v-model="newRequestParams.comments"></textarea>
                </div>
                <div>
                  <p>
                    Tipping is highly encouraged and greatly increases the chance of your request getting played! Visit
                    the DJ's profile page for their social media and payment links.
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="createRequest()">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import dayjs from "dayjs";
import ActionCable from "actioncable";
const cheerio = require("cheerio");

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      requests: [],
      newRequestParams: {},
      currentDJ: {},
      currentSong: null,
    };
  },
  created: function () {
    axios.get(`/requests?dj_id=${this.$route.query.dj_id}`).then((response) => {
      console.log(response.data);
      this.requests = response.data;
      this.newRequestParams.dj_id = this.$route.query.dj_id;
    });
    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("RequestsChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to RequestsChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: (data) => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from RequestsChannel:", data);
        // push the data into the array of messages
        // if new request creation has .song key
        if (data.song) {
          this.requests.unshift(data);
          // if requests status is being updated
        } else {
          // find correct object using data.id and update status using data.status
          var updatedRequest = this.requests.find((request) => request.id === data.id);
          updatedRequest.status = data.status;
        }
      },
    });
    axios.get(`/djs/${this.$route.query.dj_id}`).then((response) => {
      console.log(response.data);
      this.currentDJ = response.data;
    });
    // this.songScrape();
  },
  methods: {
    relativeDate: function (created_at) {
      return dayjs(created_at).fromNow();
    },
    newRequest: function () {
      document.querySelector("#new-request").showModal();
    },
    createRequest: function () {
      axios
        .post("/requests", this.newRequestParams)
        .then((response) => {
          console.log(response.data);
          this.newRequestParams.song = "";
          this.newRequestParams.comments = "";
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    isLoggedIn: function () {
      return localStorage.jwt;
    },
    getDJId: function () {
      return localStorage.dj_id;
    },
    clearRequests: function () {
      if (confirm("Are you sure you want to clear all requests?")) {
        axios.delete("/requests/all").then((response) => {
          console.log(response.data);
          this.requests = [];
        });
      }
    },
    changeStatus: function (request, status) {
      axios
        .patch(`/requests/${request.id}`, { status: status })
        .then((response) => {
          request.status = status;
          console.log(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    songScrape: function () {
      const url = `https://cors-anywhere.herokuapp.com/${this.currentDJ.serato_url}`;
      axios.get(url).then((response) => {
        const $ = cheerio.load(response.data);
        const song = $(".playlist-trackname").last().text();
        this.currentSong = song;
        console.log(song);
      });
    },
  },
};
</script>
