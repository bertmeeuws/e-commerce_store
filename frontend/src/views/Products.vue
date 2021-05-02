<template>
  <div class="home wrapper">
    <img src="@/assets/img/ad.png" />
    <Breadcrumbs v-bind:categories="categories" />
    <Explorer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Explorer from "../components/Products/Explorer.vue";

export default defineComponent({
  name: "Products",
  components: { Breadcrumbs, Explorer },

  setup() {
    const categories: string[] = ["test", "test", "test"];

    return {
      categories,
    };
  },
});
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
</style>
