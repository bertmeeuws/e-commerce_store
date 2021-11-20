<template>
  <div @click="navigate()" class="cursor-pointer flex-grow">
    <div class="flex items-center space-x-1">
      <CheckCircleIcon class="w-3 h-3 text-green-600" />
      <p class="text-green-600 text-xs">In stock</p>
    </div>
    <div class="flex justify-center">
      <img src="@/assets/img/laptop.png" alt="" />
    </div>
    <div class="flex items-center justify-between mt-4">
      <div class="flex flex-row">
        <StarIcon class="w-4 h-4 text-yellow-500" /><StarIcon
          class="w-4 h-4 text-yellow-500"
        />
        <StarIcon class="w-4 h-4 text-yellow-500" /><StarIcon
          class="w-4 h-4 text-yellow-500"
        />
        <StarIcon class="w-4 h-4 text-yellow-500" />
      </div>
      <p class="text-xs mt-2 text-gray-500">Reviews (4)</p>
    </div>
    <p class="text-medium my-2">
      EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
    </p>
    <p class="mt-3 font-medium text-gray-400 line-through text-sm">$499.00</p>
    <p class="font-semibold text-gray-900">$499.00</p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { CheckCircleIcon, StarIcon } from "@heroicons/vue/solid";

const router = useRouter();

const navigate = () => {
  router.push("/products/" + 2);
};
</script>

<style scoped>
.product__item {
  margin: 0.8rem;
  padding: 1.5rem;
  cursor: pointer;
  max-width: 18.5rem;
}
.item__name {
  line-height: 1.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.product__stock {
  color: var(--green);
}
</style>
