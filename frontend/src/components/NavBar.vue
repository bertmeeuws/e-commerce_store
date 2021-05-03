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
          <li @click="navigate('/')" class="">
            <img src="@/assets/img/logo.svg" alt="" />
          </li>
          <li @click="navigate('/laptops')" class="nav-item p-semibold-nav">
            Laptops
          </li>
          <li @click="navigate('/Desktops')" class="nav-item p-semibold-nav">
            Desktop pc's
          </li>
          <li
            @click="navigate('/Networkingdevices')"
            class="nav-item p-semibold-nav"
          >
            Networking devices
          </li>
          <li @click="navigate('/Printers')" class="nav-item p-semibold-nav">
            Printers & scanners
          </li>
          <li class="nav-item p-semibold-nav">PC Parts</li>
          <li class="nav-item p-semibold-nav">All other products</li>
          <li class="nav-item p-semibold-nav">Repairs</li>
          <li class="nav-item item-important-blue">Our deals</li>
        </ul>
        <div class="nav-right">
          <p @click="navigate('/register')" class="p-semibold-nav">Register</p>
          <p @click="navigate('/login')" class="p-semibold-nav">Login</p>
          <p @click="navigate('/cart')" class="p-semibold-nav">Cart</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NavBar",
  components: {},

  setup() {
    const store = useStore();
    const router = useRouter();

    const navigate = (url: RouteLocationRaw) => {
      router.push(url);
    };

    return {
      length: computed(() => store.state.cart.length),
      navigate,
    };
  },
});
</script>

<style scoped>
.nav-right p {
  margin-left: 2rem;
  cursor: pointer;
}
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
.nav-item {
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid transparent;
  margin-top: 0.5rem;
}
.nav-item:hover {
  border-bottom: 0.3rem solid var(--blue);
}
.nav-item:last-child {
  border: 0.2rem solid var(--blue);
  padding: 1rem 2rem;
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
