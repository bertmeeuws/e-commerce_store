<template>
  <div>
    <div class="text-white bg-black p-3 flex justify-between text-sm">
        <p class="p-semibold"><span>Mon-Thu</span> 9.00 AM - 5:30PM</p>
        <p class="p-semibold">
          Visit our showroom in 123 Street Address, <span class="underline cursor-pointer">Contact us</span>
        </p>
        <p class="p-semibold">Call us: (00) 1234 5678</p>
    </div>

    <nav class="min-w-xl2 px-4 flex items-center">
      <div class="flex justify-between py-8">
        <ul class="flex items-center flex-row space-x-6 font-medium">
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
        <div class="flex justify-end items-center flex-row space-x-6">
          <p @click="navigate('/register')" class="p-semibold-nav">Register</p>
          <p @click="navigate('/login')" class="p-semibold-nav">Login</p>
          <p @click="navigate('/cart')" class="p-semibold-nav">Cart</p>
        </div>
      </div>
    </nav>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NavBar",
  components: {},

  setup() {
    const router = useRouter();

    const navigate = (url: RouteLocationRaw) => {
      router.push(url);
    };

    return {
      length: 1,
      navigate,
    };
  },
});
</script>

<style scoped>


</style>
