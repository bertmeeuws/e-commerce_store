<template>
  <div>
    <div class="nav-topbar">
      <div class="wrapper nav-topbar-container">
        <p class="p-semibold"><span>Mon-Thu</span> 9.00 AM - 5:30PM</p>
        <p class="p-semibold">
          <span>Visit our showroom in 123 Street Address,</span> Contact us
        </p>
        <p class="p-semibold">Call us: (00) 1234 5678</p>
      </div>
    </div>
    <nav>
      <div class="nav wrapper">
        <div class="hidden">
          <router-link to="/"><h1>E-Commerce Store</h1></router-link>
          <router-link to="/collection/men">Men</router-link>
          <router-link to="/collection/women">Women</router-link>
        </div>
        <div class="hidden">
          <router-link to="/cart">Cart ({{ length }})</router-link>
          <router-link to="/login">Login</router-link>
        </div>
        <ul class="nav-items">
          <li class="nav-item p-semibold-nav">Laptops</li>
          <li class="nav-item p-semibold-nav">Desktop pc's</li>
          <li class="nav-item p-semibold-nav">Networking devices</li>
          <li class="nav-item p-semibold-nav">Printers & scanners</li>
          <li class="nav-item p-semibold-nav">PC Parts</li>
          <li class="nav-item p-semibold-nav">All other products</li>
          <li class="nav-item p-semibold-nav">Repairs</li>
          <li class="nav-item item-important-blue">Our deals</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NavBar",
  components: {},

  setup() {
    const store = useStore();
    return {
      length: computed(() => store.state.cart.length),
    };
  },
});
</script>

<style scoped>
.nav-topbar {
  background-color: var(--black);
  color: white;
}
.nav-topbar-container {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.nav-topbar-container span {
  color: var(--grey);
}
.nav-items {
  display: flex;
  align-items: center;
}
.nav-items li {
  margin-right: 2.5rem;
}
.nav {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
nav {
  border-bottom: 0.1rem solid var(--grey);
}
nav div {
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
nav a:first-child {
  margin-left: 0rem;
}
nav a:hover {
  color: #42b983;
}
</style>
