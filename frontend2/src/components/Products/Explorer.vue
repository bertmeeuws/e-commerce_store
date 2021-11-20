<template>
  <h1 v-if="name" class="text-xl">{{ name }} (20)</h1>
  <h1 v-if="!name" class="text-xl font-semibold my-3">Products page (20)</h1>
  <div class="grid grid-cols-9 gap-4">
    <Filter class="row-start-2 col-start-1 col-span-2" />
    <ActiveFilters
      class="row-start-1 row-span-1 col-span-full my-4"
      :activeFilters="Active_filters"
    />
    <div class="col-start-3 col-span-full grid grid-cols-5 gap-10 grid-rows-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem /><ProductItem /><ProductItem /><ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem /><ProductItem /><ProductItem />
      <Pagination class="col-span-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Filter from "../Products/Filter.vue";
import ActiveFilters from "../Products/ActiveFilters.vue";
import ProductItem from "../Products/ProductItem.vue";
import { Active_Filter } from "../../interfaces/Filters.interface";
import Pagination from "./Pagination.vue";

export default defineComponent({
  components: {
    Pagination,
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
