<template>
  <aside class="filters">
    <h2 class="filters-title">Filters</h2>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const maxPrice: number = 7000;

    return {};
  },
});
</script>

<style scoped>
.filters {
  background-color: var(--ghost);
  grid-area: filter;
}
</style>
