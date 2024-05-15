<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from "vue";
import HeaderLayouts from "../src/layouts/header/HeaderLayouts.vue";
import Filter from "@/components/filter/Filter.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
  return {
    loading,
  };
});
</script>

<template>

  <!-- It's my loading code -->
  <div class="bg__loading" v-if="loading">
    <div class="loader"></div>
  </div>
  <!-- It's my loading code -->
  <div class="wrapper" v-else>
    <HeaderLayouts />
    <Filter />
    <RouterView />
  </div>
</template>
