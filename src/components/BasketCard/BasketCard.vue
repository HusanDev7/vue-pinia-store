<script setup>
import { useaddCardStore } from "@/stores/addCardStore";
import DellButton from "@/components/button/DellButton.vue";
const addCardStore = useaddCardStore();
</script>
<template>
  <div class="basket-two" v-for="item in addCardStore.addCards" :key="item.id" :cards="item">
    <div class="basket-two-cards">
      <img class="basket-two-img" :src="item.thumbnail ?? '@/assets/img/no-photo.jpg'" alt="" />
      <div class="basket-two__product-name">
        <h4 class="basket-two-title">{{ item.title }}</h4>
        <p class="basket-two-price">{{ item.price * item.quantity }}$</p>
      </div>
      <div class="adds">
        <span class="adds-minus" @click="addCardStore.decrementQ(item)">-</span>
        <span class="adds-item">{{ item.quantity }}</span>
        <span class="adds-plus" @click="addCardStore.incrementQ(item)">+</span>
      </div>
      <DellButton @click="addCardStore.removeProduct(item.id)" />
    </div>
  </div>
</template>