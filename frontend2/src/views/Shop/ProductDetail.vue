<template>
  <Wrapper>
    <div class="flex items-center justify-between border-b-2 border-t-2 py-4">
      <div class="flex space-x-8 font-medium">
        <p
          @click="changePage('About product')"
          :style="[
            state.currentPage === 'About product' ? 'color: var(--black)' : '',
          ]"
          class="border-b border-b-2 border-blue-600 cursor-pointer"
        >
          About Product
        </p>
        <p
          @click="changePage('Details')"
          :style="[
            state.currentPage === 'Details' ? 'color: var(--black)' : '',
          ]"
          class="border-b border-b-2 border-transparent cursor-pointer"
        >
          Details
        </p>
        <p
          @click="changePage('Specs')"
          :style="[state.currentPage === 'Specs' ? 'color: var(--black)' : '']"
          class="border-b border-b-2 border-transparent cursor-pointer"
        >
          Specs
        </p>
      </div>
      <form @submit.prevent="addToCart()" class="flex items-center space-x-3">
        <p class="">
          On sale from <span class="font-semibold">$3,299.00</span>
        </p>
        <input
          class="w-16 bg-gray-200 border-none rounded-md"
          min="1"
          value="1"
          type="number"
        />
        <p
          class="
            rounded-full
            bg-blue-700
            text-sm text-white
            font-medium
            px-8
            py-3
            cursor-pointer
          "
        >
          Add to cart
        </p>
        <p
          class="
            rounded-full
            bg-yellow-400
            text-sm text-white
            font-medium
            px-8
            py-3
          "
        >
          <img src="/img/paypal.png" alt="" />
        </p>
      </form>
    </div>
    <div class="py-4">
      <AboutProduct />
    </div>
  </Wrapper>
  <img src="/img/productdetailbanner.png" />
</template>

<script setup lang="ts">
import { defineComponent, reactive } from "vue";
import AboutProduct from "../../components/Products/AboutProduct.vue";
import Wrapper from "@/components/Wrapper.vue";

const state = reactive<any>({
  currentPage: "About product",
});

const navigate = () => {};

const addToCart = () => {};

const changePage = (page: any) => {
  state.currentPage = page;
};
</script>

<style scoped></style>
