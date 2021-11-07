<template>
  <div class="requests-index">
    <h3>{{ currentDJ.name }}</h3>
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
    </div>

    <dialog id="new-request">
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
    </dialog>
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
