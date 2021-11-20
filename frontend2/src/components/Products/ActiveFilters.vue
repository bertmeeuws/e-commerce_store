<template>
  <div class="flex items-center space-x-3">
    <span
      class="font-medium border py-2 px-4 rounded border-2"
      :key="index"
      v-for="(filter, index) in activeFilters"
    >
      {{ filter.name }}
      <span class="text-gray-600"> ({{ filter.quantity }})</span>
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
