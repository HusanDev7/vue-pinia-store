<script setup>
import Cards from "@/components/cards/Cards.vue";
import { useProductStore } from "@/stores/productStore";
import Pagination from "@/components/pagination/Pagination.vue";

const productStore = useProductStore();
</script>

<template>
  <div class="wrap">
    <div class="cont">
      <div class="card" v-if="productStore.totalCount > 0">
        <Cards
          v-for="item in productStore.product"
          :key="item.id"
          :cards="item"
        />
      </div>

      <div class="notf" v-else>
        <h1>The product was <span>not found</span> 🙃</h1>
        <button><a href="/">← Go back for shopping</a></button>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 320px));
  gap: 30px;
  margin-top: 100px;
  justify-content: center;
  align-content: center;
}

.notf {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70dvh;
}

.notf h1 {
  display: flex;
  align-items: center;
  font-size: 5vw;
}

.notf span {
  color: dodgerblue;
}

.notf button {
  width: 220px;
  padding: 15px 0;
  background: dodgerblue;
  border-radius: 7px;
}

.notf button a {
  color: #fff;
  font-size: 16px;
}
</style>
