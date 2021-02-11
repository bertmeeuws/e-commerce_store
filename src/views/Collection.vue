<template>
  <section>
    <h2 class="title">Men's clothes</h2>
    <div class="grid">
      <clothing-item
        v-for="(item, index) in state.items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import ClothingItem from "@/components/ClothingItem.vue";
import { ClothingApi } from "@/services/UsersApi";
import { ClothingItemState } from "@/interfaces/ClothingItem.types";

export default defineComponent({
  name: "Collection",
  props: ["sex"],
  components: {
    ClothingItem,
  },
  setup() {
    const state = reactive<ClothingItemState>({
      items: null,
    });

    onMounted(async () => {
      const response = await ClothingApi.getAllClothing();
      state.items = response;
      console.log(state.items);
    });
    return {
      state,
    };
  },
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}
</style>
