<template>
  <div class="flex justify-center">
  <div class="max-w-7xl">
    <img class="img" src="/img/adbig.png" />
    <div class="flex justify-between my-8">
      <h1 class="text-lg text-gray-800 font-semibold cursor-pointer">New products</h1>
      <p class="text-md text-gray-600 font-normal underline cursor-pointer">See all new products</p>
    </div>
    <div class="flex justify-between my-4 items-center">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <img class="my-12" src="/img/adlong.png" />
    <div class="flex justify-between items-center space-x-5 mb-12">
      <img class="" src="/img/custompc.png" />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <div class="flex justify-between items-center space-x-5 mb-12">
      <img class="img row-img" src="/img/laptops.png" />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <div class="flex justify-between items-center space-x-5 mb-12">
      <img class="img row-img" src="/img/desktops.png" />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <div class="flex justify-between items-center mb-12">
      <img class="" src='@/assets/img/Frame 22.png' />
      <img class="" src='@/assets/img/Frame 23.png' />
      <img class="" src='@/assets/img/Frame 24.png' />
      <img class="" src='@/assets/img/Frame 25.png' />
      <img class="" src='@/assets/img/Frame 26.png' />
      <img class="" src='@/assets/img/Frame 27.png' />
      <img class="" src='@/assets/img/Frame 34.png' />
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "../components/Products/ProductItem.vue";

export default defineComponent({
  name: "Home",
  components: { ProductItem },

  setup() {
    const categories: string[] = ["test", "test", "test"];

    return {
      categories,
    };
  },
});
</script>

<style scoped>

</style>
