<template>
  <section class="wrapper">
    <div class="product-navigation">
      <div class="nav-left">
        <p
          @click="changePage('About product')"
          :style="[
            state.currentPage === 'About product' ? 'color: var(--black)' : '',
          ]"
          class="p-semibold-nav"
        >
          About Product
        </p>
        <p
          @click="changePage('Details')"
          :style="[
            state.currentPage === 'Details' ? 'color: var(--black)' : '',
          ]"
          class="p-semibold-nav"
        >
          Details
        </p>
        <p
          @click="changePage('Specs')"
          :style="[state.currentPage === 'Specs' ? 'color: var(--black)' : '']"
          class="p-semibold-nav"
        >
          Specs
        </p>
      </div>
      <form @submit.prevent="addToCart()" class="nav-right">
        <p class="p-regular">
          On sale from <span class="p-semibold-nav">$3,299.00</span>
        </p>
        <input class="input" min="1" value="1" type="number" />
        <p class="button button-blue">Add to cart</p>
        <p class="button button-yellow">
          <img src="@/assets/img/paypal.png" alt="" />
        </p>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {},
  name: "ProductDetail",

  setup() {
    const state = reactive<any>({
      currentPage: "About product",
    });

    const navigate = () => {};

    const addToCart = () => {};

    const changePage = (page: any) => {
      state.currentPage = page;
    };

    return { navigate, addToCart, state, changePage };
  },
});
</script>

<style scoped>
.button {
  font-weight: 600;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-yellow {
  background-color: var(--yellow);
  width: 14rem;
  height: 5rem;
}
.button-blue {
  background-color: var(--blue);
  color: white;
  width: 15rem;
  height: 5rem;
}
.product-navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}
.nav-left,
.nav-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-right .input {
  width: 3rem;
  text-align: center;
}
.nav-right p {
  margin-left: 2rem;
  cursor: pointer;
}
.nav-left p {
  margin-right: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid transparent;
  cursor: pointer;
}
.nav-left p:hover {
  border-bottom: 0.3rem solid var(--blue);
}
</style>
