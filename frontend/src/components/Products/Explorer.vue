<template>
  <section class="explorer">
    <h1 class="h1 title">MSI PS Series (20)</h1>
    <div class="explorer-grid">
      <Filter />
      <ActiveFilters v-bind:activeFilters="Active_filters" />
      <div class="exlorer-container"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Filter from "../Products/Filter.vue";
import ActiveFilters from "../Products/ActiveFilters.vue";

import { Active_Filter } from "../../interfaces/Filters.interface";

export default defineComponent({
  components: {
    Filter,
    ActiveFilters,
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

<style lang="css" scoped>
.title {
  width: 100%;
}
.explorer-grid {
  display: grid;
  grid-template-rows: 5rem 4rem auto;
  grid-template-columns: 23.4rem 116.6rem;
  grid-column-gap: 1rem;
  grid-template-areas:
    "back  sort"
    "filter active-filters"
    "filter explorer";
}
.exlorer-container {
  grid-area: explorer;
  border: 0.1rem solid violet;
}
</style>
