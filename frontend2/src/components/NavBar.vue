<template>
  <div>
    <div class="text-white bg-black p-3 flex justify-between text-sm">
      <p class="p-semibold"><span>Mon-Thu</span> 9.00 AM - 5:30PM</p>
      <p class="p-semibold">
        Visit our showroom in 123 Street Address,
        <span class="underline cursor-pointer">Contact us</span>
      </p>
      <p class="p-semibold">Call us: (00) 1234 5678</p>
    </div>
    <div class="flex justify-center">
      <nav class="max-w-7xl px-4 flex items-center flex-grow">
        <div class="flex justify-between py-8 w-full">
          <ul class="flex items-center flex-row space-x-6 font-medium">
            <li @click="navigate('/')" class="">
              <img src="@/assets/img/logo.svg" alt="" />
            </li>
            <li
              :class="{
                'ring-4 px-6 py-2 rounded-full ring-blue-500 text-blue-500 ring-opacity-100':
                  nav.ring,
              }"
              @click="navigate('/laptops')"
              v-for="nav in navigation"
              :key="nav.name"
              class="text-sm cursor-pointer font-semibold"
            >
              {{ nav.name }}
            </li>
          </ul>
          <div class="flex justify-end items-center flex-row space-x-6">
            <p
              class="text-sm cursor-pointer"
              v-for="authNav in authNavigation"
              :key="authNav.name"
              @click="navigate(authNav.route)"
            >
              {{ authNav.name }}
            </p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, computed } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

const router = useRouter();

const navigation = [
  {
    name: "Laptops",
    route: "laptops",
  },
  {
    name: "Desktops pc",
    route: "laptops",
  },
  {
    name: "Printers & scanners",
    route: "laptops",
  },
  {
    name: "All other products",
    route: "laptops",
  },
  {
    name: "Repairs",
    route: "laptops",
  },
  {
    name: "Our deals",
    route: "laptops",
    ring: true,
  },
];

const authNavigation = [
  { name: "Register", route: "/register" },
  { name: "Login", route: "/login" },
  { name: "Cart", route: "/cart" },
];

const navigate = (url: RouteLocationRaw) => {
  router.push(url);
};
</script>

<style scoped></style>
