<template>
  <div class="requests-index">
    <h3>{{ currentDJ.name }}</h3>
    <img :src="currentDJ.image_url" />
    <br />
    <button v-on:click="newRequest()">Make Request</button>
    <br />
    <br />
    <button v-if="isLoggedIn()" v-on:click="clearRequests()" v-on:submit.prevent="clearRequests()">
      Clear Requests
    </button>
    <br />
    <h2>Now Playing: ----</h2>

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
      <button v-if="isLoggedIn()" v-on:click="changeStatus(request, 'approved')">Approved</button>
      &nbsp;
      <button v-if="isLoggedIn()" v-on:click="changeStatus(request, 'declined')">Declined</button>
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
<style>
img {
  width: 100px;
}
</style>
<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      requests: [],
      newRequestParams: {
        dj_id: `${localStorage.dj_id}`,
      },
      currentDJ: {},
    };
  },
  created: function () {
    axios.get(`/requests?dj_id=${this.$route.query.dj_id}`).then((response) => {
      console.log(response.data);
      this.requests = response.data;
    });
    axios.get(`/djs/${this.$route.query.dj_id}`).then((response) => {
      console.log(response.data);
      this.currentDJ = response.data;
    });
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
          this.requests.push(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    isLoggedIn: function () {
      return localStorage.jwt;
    },
    clearRequests: function () {
      if (confirm("Are you sure you want to clear all requests?")) {
        axios.delete("/requests/all").then((response) => {
          console.log(response.data);
          this.$router.push("/requests");
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
  },
};
</script>
