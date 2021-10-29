<template>
  <div class="requests-index">
    <button>Make Request</button>
    <br />
    <h2>Now Playing: ----</h2>

    <h2>Current Requests</h2>
    <div v-for="request in requests" v-bind:key="request.id">
      <div>
        <strong>{{ request.song }}</strong>
      </div>
      <div>{{ request.comments }}</div>
      <div>Status: {{ request.status }}</div>
      <div>
        <small>{{ relativeDate(request.created_at) }}</small>
      </div>
    </div>
  </div>
</template>

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
    };
  },
  created: function () {
    axios.get(`/requests?dj_id=${localStorage.dj_id}`).then((response) => {
      console.log(response.data);
      this.requests = response.data;
    });
  },
  methods: {
    relativeDate: function (created_at) {
      return dayjs(created_at).fromNow();
    },
  },
};
</script>
