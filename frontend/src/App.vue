<template>
  <div class="app">
    <link
      rel="icon"
      :href="require('@/assets/img/logo.png')"
      type="image/x-icon"
    />
    <NavBar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"; // @ is an alias to /src

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
</style>
