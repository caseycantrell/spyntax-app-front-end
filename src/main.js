import { createApp } from 'vue'; // Import from Vue 3
import App from "./App.vue";
import axios from "axios";
import router from './router';

// Configure Axios
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3002" : "https://spyntax.herokuapp.com";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

// Create Vue 3 app and mount it
createApp(App).use(router).mount('#app');
