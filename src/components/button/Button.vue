<script setup>
import { useaddCardStore } from "@/stores/addCardStore";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();
const addCardsStore = useaddCardStore();
</script>

<template>
  <button class="btn" @click="productStore.toggleDrawer(true)">
    <img src="@/assets/icons/baskett.svg" alt="" />
    <span class="shot">{{ addCardsStore.addCards.length }}</span>
  </button>
</template>
