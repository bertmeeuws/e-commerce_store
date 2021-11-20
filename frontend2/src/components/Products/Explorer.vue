<template>
  <h1 v-if="name" class="text-xl">{{ name }} (20)</h1>
  <h1 v-if="!name" class="text-xl font-semibold my-3">Products page (20)</h1>
  <div class="grid grid-cols-6">
    <Filter class="col-span-1 row-span-full" />
    <ActiveFilters
      class="row-span-1 col-span-full my-4"
      :activeFilters="Active_filters"
    />
    <div class="col-span-5 grid grid-cols-5 gap-10 grid-rows-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Filter from "../Products/Filter.vue";
import ActiveFilters from "../Products/ActiveFilters.vue";
import ProductItem from "../Products/ProductItem.vue";

import { Active_Filter } from "../../interfaces/Filters.interface";

export default defineComponent({
  components: {
    Filter,
    ActiveFilters,
    ProductItem,
  },

  props: {
    name: {
      type: String,
      required: false,
    },
  },

  setup() {
    const Active_filters: Active_Filter[] | [] = [
      { name: "Custom pc", quantity: 24 },
      { name: "HP/Compaq pc", quantity: 24 },
      { name: "RGB", quantity: 80 },
    ];

    return { Active_filters };
  },
});
</script>

<style lang="css" scoped></style>
