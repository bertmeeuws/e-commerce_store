<template>
  <div class="home wrapper">
    <img src="/img/ad.png" />
    <Breadcrumbs v-bind:categories="categories" />
    <Explorer v-bind:name="pageName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Explorer from "../components/Products/Explorer.vue";

export default defineComponent({
  name: "Products",
  components: { Breadcrumbs, Explorer },

  props: {
    pageName: {
      type: String,
      required: false,
    },
  },

  setup({ pageName }) {
    const categories: string[] = ["test", "test", "test"];

    console.log(pageName);
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
