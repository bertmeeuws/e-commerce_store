<template>
  <div class="flex space-x-2">
    <p
      class="flex items-center"
      v-for="(category, index) in props.categories"
      :key="index"
    >
      <span class="mr-2 cursor-pointer hover:text-gray-800 font-medium">
        {{ category }}</span
      >
      <ChevronRightIcon class="w-4 h-4 text-gray-500" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/outline";

interface IProps {
  categories: string[];
}

const props = defineProps<IProps>();
</script>

<style scoped></style>
