<template>
  <div class="wrapper">
    <Breadcrumbs v-bind:categories="categories" />
    <h1 class="h1">Shopping cart</h1>
    <p v-if="cart.length === 0">Geen items</p>
    <div class="cart--content" v-else>
      <div class="cart--item" v-for="(item, index) in cart" :key="index">
        <button @click="deleteItem(item.id)">X</button>
        <img class="cart--item--img" :src="item.image" alt="" />
        <p>{{ item.title }}</p>
        <input class="input" type="number" min="0" v-model="item.count" />
      </div>
    </div>
    <table class="table" style="width:100%">
      <tr class="p-semibold-nav">
        <th>Item</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Subtotal</th>
      </tr>
      <tr>
        <td class="first-column">
          <img :src="require('@/assets/img/laptop.png')" alt="" />
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </td>
        <td class="p-semibold-nav">$4,349.00</td>
        <td><input class="input" value="1" /></td>
        <td class="p-semibold-nav">$13,047.00</td>
      </tr>
      <tr>
        <td class="first-column">
          <img :src="require('@/assets/img/laptop.png')" alt="" />
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </td>
        <td class="p-semibold-nav">$4,349.00</td>
        <td><input class="input" value="1" /></td>
        <td class="p-semibold-nav">$13,047.00</td>
      </tr>
      <tr>
        <td class="first-column">
          <img :src="require('@/assets/img/laptop.png')" alt="" />
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </td>
        <td class="p-semibold-nav">$4,349.00</td>
        <td><input class="input" value="1" /></td>
        <td class="p-semibold-nav">$13,047.00</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Breadcrumbs from "../../components/Breadcrumbs.vue";

export default defineComponent({
  name: "Cart",
  components: { Breadcrumbs },

  setup() {
    const store = useStore();

    const deleteItem = (id: number) => {
      store.commit("deleteFromCart", id);
    };
    const categories: string[] = ["Home", "Login"];

    return {
      cart: computed(() => store.state.cart),
      deleteItem,
      categories,
    };
  },
});
</script>

<style scoped>
.table .input {
  width: 3rem;
  text-align: center;
}
.table {
  text-align: left;
  border-collapse: collapse;
  margin-top: 3rem;
}
.table .first-column {
  max-width: 42rem;
  display: flex;
  justify-content: flex-start;
  line-height: 2rem;
}

.table .first-column img {
  margin-right: 2.5rem;
}
.table,
td {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  vertical-align: top;
}
.table th {
  padding-bottom: 1rem;
}
.table tr {
  border-bottom: 0.1rem solid var(--grey);
}
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
  align-items: center;
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
.input {
  margin-left: 30px;
}
</style>
