<template>
  <div class="requests-index">
    <div v-for="request in requests" v-bind:key="request.id">
      {{ request }}
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
    axios.get("/requests?dj_id=1").then((response) => {
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
