<template>
  <p>cart</p>
  <p v-if="cart.length === 0">Geen items</p>
  <div class="cart--content" v-else>
    <div class="cart--item" v-for="(item, index) in cart" :key="index">
      <button @click="deleteItem(item.id)">X</button>
      <img class="cart--item--img" :src="item.image" alt="" />
      <p>{{ item.title }}</p>
      <p>{{ item.count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Cart",
  components: {},

  setup() {
    const store = useStore();

    const deleteItem = (id: number) => {
      store.commit("deleteFromCart", id);
    };

    return {
      cart: computed(() => store.state.cart),
      deleteItem,
    };
  },
});
</script>

<style scoped>
.cart--item {
  display: flex;
  width: 50%;
  flex-direction: row;
}
.cart--item--img {
  width: 20px;
  height: auto;
  margin-right: 2rem;
}
.cart--content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart--item button {
  margin: 0 auto;
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  color: red;
  cursor: pointer;
}
</style>
