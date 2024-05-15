<script setup>
import { ref } from "vue";
import { useaddCardStore } from "@/stores/addCardStore";

const addCardStore = useaddCardStore();



</script>

<template>
  <router-link to="/" class="test">
    <button
      class="btn-price"
    >
      Buy now !
    </button>
  </router-link>
</template>
