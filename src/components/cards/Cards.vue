<script setup>
import ButtonPrice from "@/components/button/ButtonPrice.vue";
import { RouterLink } from "vue-router";
import { useaddCardStore } from "@/stores/addCardStore";
import { computed } from "vue";

const addCardStore = useaddCardStore();

const props = defineProps({
  cards: {
    type: Object,
    request: true,
  },
});

const adds = computed(() =>
  addCardStore.addCards.find((item) => item.id == props.cards.id)
);
</script>

<template>
  <RouterLink :to="'/product/' + cards.id" class="cards">
    <div class="cards__box">
      <img class="cards__box-img" :src="cards.thumbnail ?? '@/assets/img/no-photo.jpg'" loading="lazy" alt="" />
      <h3 class="cards__box-title">{{ cards.title }}</h3>
      <div class="cards__box-price">
        <div class="cards-price-mini">
          <h3 class="cards-price-price">{{ cards.price }} $</h3>
        </div>
        <div class="cards-price-mini">
          <ButtonPrice @click="addCardStore.getAddCardId(cards)" :class="{ active: !!adds }" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
