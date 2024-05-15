<script setup>
import { useProductStore } from "@/stores/productStore";
import BasketCard from "../BasketCard/BasketCard.vue";
import BasketNall from "@/components/BasketNall/BasketNall.vue";
import { useaddCardStore } from "@/stores/addCardStore";

const productStore = useProductStore();
const addCardsStore = useaddCardStore();
</script>

<template>
  <div class="basket" :class="{ basketActive: productStore.drawer }" @click="productStore.toggleDrawer(false)">
    <div class="basket__saidbare" @click.stop>
      <h3 class="basket-title">
        Your <span class="basket-color">Basket</span>
      </h3>

      <BasketNall v-if="addCardsStore.addCards?.length == 0" />

      <!-- It's Cards -->
      <div class="cards-container">
        <BasketCard />
      </div>
      <!-- It's Cards -->

      <div class="basket__box">
        <div class="basket-mini">
          <h4 class="basket-totall-sum">Totall sum ...</h4>
        </div>
        <div class="basket-mini">
          <p class="basket-totall-num">
            <span class="basket-color" style="font-size: 20px">{{ addCardsStore.totalSum }} $</span>
          </p>
        </div>
      </div>

      <div class="basket__buy">
        <div class="basket__buy-mini">
          <button class="basket__buy-btn">
            <router-link @click="productStore.toggleDrawer(false)" to="/">Go back to shopping</router-link>
          </button>
        </div>
        <div class="basket__buy-mini">
          <button class="basket__buy-btn">
            <router-link to="contact" @click="productStore.toggleDrawer(false)">place an order</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
