<template>
  <div @click="navigate()" class="product__item">
    <p class="product__stock">
      <img :src="require('@/assets/img/stock.png')" alt="" /> In stock
    </p>
    <img src="@/assets/img/laptop.png" alt="" />
    <div class="product__reviews p-small">
      <img src="@/assets/img/yellowstar.png" alt="" />
      <img src="@/assets/img/yellowstar.png" alt="" />
      <img src="@/assets/img/yellowstar.png" alt="" />
      <img src="@/assets/img/yellowstar.png" alt="" />
      <img src="@/assets/img/greystar.png" alt="" />
      Reviews (4)
    </div>
    <p class="item__name">
      EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
    </p>
    <p class="item__price p-semibold-nav">$499.00</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  name: "ProductItem",

  setup() {
    const router = useRouter();

    const navigate = () => {
      router.push("/products/" + 2);
    };

    return { navigate };
  },
});
</script>

<style scoped>
.product__item {
  margin: 0.8rem;
  padding: 1.5rem;
  cursor: pointer;
  max-width: 18.5rem;
}
.item__name {
  line-height: 1.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.product__stock {
  color: var(--green);
}
</style>
