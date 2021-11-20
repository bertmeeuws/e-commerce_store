<template>
  <div class="w-full h-auto bg-gray-100 rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center mb-4">Filters</h2>
    <p class="border rounded-full py-1 border-2 border-gray-400 text-center">
      Clear filter
    </p>
    <div class="my-8">
      <div>
        <div class="flex justify-between items-center mb-3">
          <p class="font-semibold">Category</p>
          <ChevronDownIcon class="text-black w-4 h-4 cursor-pointer" />
        </div>
        <ul class="text-sm">
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="my-8">
      <div>
        <div class="flex justify-between items-center mb-3">
          <p class="font-semibold">Price</p>
          <ChevronDownIcon class="text-black w-4 h-4 cursor-pointer" />
        </div>
        <ul class="text-sm">
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="my-8">
      <div>
        <div class="flex justify-between items-center mb-3">
          <p class="font-semibold">Color</p>
          <ChevronDownIcon class="text-black w-4 h-4 cursor-pointer" />
        </div>
        <div class="flex space-x-2">
          <div class="w-8 h-8 bg-red-500"></div>
          <div class="w-8 h-8 bg-gray-800"></div>
        </div>
      </div>
    </div>
    <div class="my-8">
      <div>
        <div class="flex justify-between items-center mb-3">
          <p class="font-semibold">Filter name</p>
          <ChevronDownIcon class="text-black w-4 h-4 cursor-pointer" />
        </div>
        <ul class="hidden">
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
          <li class="flex justify-between items-start">
            <span class="text-left">Item</span
            ><span class="text-right">Item2</span>
          </li>
        </ul>
      </div>
    </div>
    <p
      class="
        bg-blue-600
        hover:bg-blue-500 hover:shadow-lg
        transition
        duration-200
        text-white
        font-medium
        rounded-full
        py-2
        text-center
        cursor-pointer
      "
    >
      Clear filter
    </p>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/outline";
</script>

<style scoped></style>
