<template>
  <div class="home wrapper">
    <img class="img" src="/img/adbig.png" />
    <div class="top-bar">
      <h1 class="title h1">New products</h1>
      <p class="p-small">See all new products</p>
    </div>
    <div class="new-products-grid">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <img class="img img-long" src="/img/adlong.png" />
    <div class="row first-row">
      <img class="img row-img" src="/img/custompc.png" />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <div class="row second-row">
      <img class="img row-img" src="/img/laptops.png" />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <div class="row third-row">
      <img class="img row-img" src="/img/desktops.png" />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
    <div class="row sponsors">
      <img class="img row-img" src='@/assets/img/Frame 22.png' />
      <img class="img row-img" src='@/assets/img/Frame 23.png' />
      <img class="img row-img" src='@/assets/img/Frame 24.png' />
      <img class="img row-img" src='@/assets/img/Frame 25.png' />
      <img class="img row-img" src='@/assets/img/Frame 26.png' />
      <img class="img row-img" src='@/assets/img/Frame 27.png' />
      <img class="img row-img" src='@/assets/img/Frame 34.png' />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "../components/Products/ProductItem.vue";

export default defineComponent({
  name: "Home",
  components: { ProductItem },

  setup() {
    const categories: string[] = ["test", "test", "test"];

    return {
      categories,
    };
  },
});
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
.img {
  max-width: 100%;
}
.p-small {
  cursor: pointer;
  text-decoration: underline;
}
.img-row,
.row-img {
  cursor: pointer;
}
.row {
  display: flex;
  justify-content: space-between;
  flex-direction: center;
  align-items: center;
  margin-top: 3rem;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  flex-direction: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.new-products-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  margin-bottom: 3rem;
}
</style>
