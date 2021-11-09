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
                    <img :src="currentDJ.image_url" alt="" class="size-60 rounded-circle me-2" />
                    <span class="text-muted d-inline-block">
                      For
                      <a href="#!" class="text-white">{{ currentDJ.name }}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <!--/.article-->
        </div>
        <!--Divider-->

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

      <center>
        <a
          href="#request"
          data-bs-toggle="modal"
          aria-expanded="false"
          class="btn btn-primary btn-hover-arrow btn-lg mb-6"
        >
          Make Request
        </a>
      </center>
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
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Comments:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" v-on:click="createRequest()">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="py-5 d-grid">
        <center>
          <button class="btn btn-secondary btn-lg mb-2 me-1" v-on:click="newRequest()">Make Request</button>
        </center>
      </div> -->
      <section class="position-relative">
        <div class="container py-7">
          <div class="row">
            <div class="col-xl-9 mx-auto">
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
                  <h2 class="mb-8 display-8 fw-normal">" Great things in business are never done by one person. "</h2>
                  <div class="d-flex pt-2 justify-content-between align-items-center">
                    <div class="text-end">
                      <a href="#!" class="btn hover-lift hover-shadow si-hover-twitter border border-dark">Approve</a>
                      <a href="#!" class="btn hover-lift hover-shadow si-hover-twitter border border-dark">Decline</a>
                    </div>
                  </div>
                </blockquote>
              </article>

              <ul class="list-unstyled mb-5 mb-lg-10">
                <li class="d-flex mb-3">
                  <div class="px-3 py-4 border rounded border-end">
                    <div class="d-flex mb-3 justify-content-between">
                      <div class="d-flex align-items-center">
                        <h6 class="mb-0 me-3">Jessica</h6>
                      </div>
                      <div>
                        <a href="#!" class="btn hover-lift hover-shadow si-hover-twitter border border-dark">Approve</a>
                        <a href="#!" class="btn hover-lift hover-shadow si-hover-twitter border border-dark">Decline</a>
                      </div>
                    </div>
                    <p class="mb-0">
                      It is a long fact that a reader will be distracted by the readable content of a page when looking
                      at its layout of a page when looking at its layout.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  </div>
</template>

<style scoped>
img {
  width: 150px;
}
</style>

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
      console.log(url);
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
