<template>
  <div class="active-filters">
    <span
      class="span p-semibold"
      :key="index"
      v-for="(filter, index) in activeFilters"
    >
      {{ filter.name }}
      <span :style="{ color: 'var(--grey)', marginLeft: '0.5rem' }">
        ({{ filter.quantity }})</span
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Active_Filter } from "../../interfaces/Filters.interface";

export default defineComponent({
  props: {
    activeFilters: {
      type: [],
      required: false,
      default: [],
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.active-filters {
  display: flex;
  align-items: center;
  width: 100%;
  grid-area: active-filters;
}
.span {
  border: 0.1rem solid var(--grey);
  padding: 1rem 3rem;
  display: flex;
  margin-right: 1rem;
  border-radius: 0.2rem;
}
.span {
  cursor: pointer;
}
</style>
