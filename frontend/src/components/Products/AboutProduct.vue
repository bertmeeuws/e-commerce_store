<template>
  <div class="about-container">
    <div class="about-left">
      <div class="float-right">
        <Breadcrumbs v-bind:categories="['Home', 'Laptops', 'MSI WS Series']" />
        <h1 class="h1 product-title">MSI MPG Trident 3</h1>
        <p class="p-blue">Be the first to review this product</p>
        <p class="product-description">
          MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
          512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
          Warranty Gaming Desktop
        </p>
      </div>
    </div>
    <div class="about-right">
      <img :src="require('@/assets/img/pc.png')" />
    </div>
  </div>
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

<style scoped>
.product-title {
  margin-bottom: 2rem;
}
.product-description {
  max-width: 56.7rem;
  line-height: 3rem;
  font-size: 1.8rem;
  margin-top: 2rem;
}
.about-container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 55rem;
  border-top: 0.1rem solid var(--grey);
}
.float-right {
  float: right;
  margin-right: 20rem;
}
.about-left {
  background-color: var(--ghost);
  padding-top: 4rem;
}
.about-right {
  padding: 1.5rem;
}
</style>
