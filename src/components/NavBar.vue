<template>
  <nav>
    <h1>E-Commerce Store</h1>
    <router-link to="/collection/men">Men</router-link>
    <router-link to="/collection/women">Women</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NavBar",
  components: {},
});
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  flex-direction: row;
}
nav a {
  margin-left: 4rem;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-in-out;
}
nav a:hover {
  color: #42b983;
}
</style>
