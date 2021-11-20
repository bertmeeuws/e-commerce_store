<template>
  <div @click="navigate()" class="clothing-item-box">
    <div class="detail--image--box">
      <img :src="item.image" height="200" class="image--thumb" alt="" />
    </div>
    <div class="item__information">
      <p>{{ item.title }}</p>
      <p class="price">
        <strong>€ {{ item.price }}</strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { ClothingItem } from "../interfaces/ClothingItem.types";

export default defineComponent({
  name: "ClothingItem",
  props: {
    item: { type: Object, default: null, required: true },
  },
  components: {},

  setup(props) {
    const router = useRouter();

    const navigate = () =>
      router.push({ path: `/collection/men/${props.item.id}` });

    return {
      navigate,
    };
  },
});
</script>

<style scoped>
.clothing-item-box {
  height: 336px;
  width: 220px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.clothing-item-box:hover {
  box-shadow: 20px 20px 60px #a9a9a9, -20px -20px 60px #e5e5e5;
}
.image--thumb {
  margin-top: 1rem;
  width: 50%;
  height: auto;
}
.detail--image--box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item__information {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
