<template>
  <div class="dj-show">
    <h2>DJ</h2>

    <p>{{ dj }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      dj: {},
    };
  },
  created: function () {
    axios.get("/djs/2").then((response) => {
      console.log(response.data);
      this.dj = response.data;
    });
  },
  methods: {},
};
</script>
