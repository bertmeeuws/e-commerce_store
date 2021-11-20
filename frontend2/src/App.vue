<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <div class="app">
    <link rel="icon" type="image/x-icon" />
    <NavBar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: { NavBar },
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app {
  padding-bottom: 10rem;
}
body {
  font-family: "Poppins", sans-serif;
}
</style>
