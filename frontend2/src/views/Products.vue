<template>
  <div class="home wrapper">
    <img src="/img/ad.png" />
    <div class="flex justify-center">
      <div class="max-w-7xl">
        <Breadcrumbs :categories="categories" />
        <Explorer :name="pageName" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Explorer from "../components/Products/Explorer.vue";

const categories: string[] = ["test", "test", "test"];
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
</style>
