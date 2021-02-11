<template>
  <div
    v-bind:style="{ backgroundImage: 'url(/img/item (' + item.id + ').jpg)' }"
    class="clothing-item-box"
  >
    <p>{{ item.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClothingItem",
  props: {
    index: Number,
    item: Object,
  },
  components: {},
});
</script>

<style scoped>
.clothing-item-box {
  height: 336px;
  width: 220px;
}
</style>
