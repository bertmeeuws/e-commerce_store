import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import router from "@/router/index";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

app.use(router);
app.mount("#app");
