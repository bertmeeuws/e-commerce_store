<template>
  <div class="breadcrumb">
    <p v-for="(category, index) in categories" :key="index">
      <span
        class="category-span"
        :style="[
          index >= categories.length - 1
            ? 'color: var(--grey)'
            : 'color: var(--black)',
        ]"
      >
        {{ category }}</span
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Breadcrumbs",
  components: {},
  props: {
    categories: {
      type: Array,
      required: true,
      default: [],
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.category-span:after {
  content: "  >  ";
  pointer-events: none;
  display: inline;
  color: var(--blue);
}
.category-span {
  font-size: 1.2rem;
  line-height: 1.8rem;
}
.breadcrumb {
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.breadcrumb p {
  margin-right: 1rem;
}
</style>
