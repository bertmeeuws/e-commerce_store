<template>
  <div class="wrapper">
    <div class="detail--grid" v-if="state.item !== null">
      <img class="detail--image1" :src="state.item.image" height="200" alt="" />
      <div class="detail--information">
        <h1>{{ state.item.title }}</h1>
        <p>{{ state.item.description }}</p>
        <p>€ {{ state.item.price }}</p>
        <button class="button--add" @click="addToCart()">Add to cart</button>
      </div>
    </div>
    <p v-if="state.item === null">Loading</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { ClothingApi } from "@/services/UsersApi";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "ClothingDetail",

  components: {},
  setup() {
    const state = reactive<any>({
      item: null,
    });

    const router = useRouter();
    const store = useStore();

    const idParam: number = Number(router.currentRoute.value.params.item);

    const addToCart = () => {
      if (state.item !== null) {
        store.commit("addToCart", state.item);
      }
    };

    onMounted(async () => {
      const response = await ClothingApi.getAllClothing();
      const item = response.find((item) => item.id === idParam);
      if (!item) {
        router.push({ path: `/` });
      }
      state.item = item;
    });
    return {
      state,
      addToCart,
    };
  },
});
</script>

<style scoped>
.detail--grid {
  display: grid;
  grid-template-columns: 350px 500px;
  margin: 0 auto;
  width: calc(350px + 500px);
  text-align: left;
  margin-top: 10rem;
}
.detail--image1 {
  display: flex;
  place-items: center;
}
.wrapper {
  margin: 0 auto;
  max-width: 1200px;
}
.button--add {
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.button--add:hover {
  background-color: white;
  color: black;
}
</style>
