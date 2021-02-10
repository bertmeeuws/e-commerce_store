<template>
  <section>
    <h2 class="title">Men's clothes</h2>
    <div class="grid">
      <ClothingItem />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClothingItem from "@/components/ClothingItem.vue";
import { ClothingApi } from "@/services/UsersApi";

export default defineComponent({
  name: "Collection",
  props: ["sex"],
  components: {
    ClothingItem,
  },
  async mounted(): Promise<void> {
    const response = await ClothingApi.getAllClothing();
    console.log(response)
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
