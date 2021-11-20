<template>
  <div class="grid grid-cols-2 mb-20">
    <div class="p-10">
      <Breadcrumbs
        class="mb-4 text-xs"
        :categories="['Home', 'Laptops', 'MSI WS Series']"
      />
      <div class="">
        <div class="">
          <h1 class="text-2xl font-semibold mb-4">MSI MPG Trident 3</h1>
          <p class="text-blue-500 text-sm font-medium cursor-pointer mb-4">
            Be the first to review this product
          </p>
          <p class="font-medium text-gray-700 mt-8">
            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
            512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3
            Years Warranty Gaming Desktop
          </p>
        </div>
      </div>
    </div>
    <div class="pt-4 flex justify-center items-center">
      <img src="/img/pc.png" />
    </div>
  </div>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumbs from "../Breadcrumbs.vue";

export default defineComponent({
  components: { Breadcrumbs },

  setup() {
    return {};
  },
});
</script>

<style scoped></style>
