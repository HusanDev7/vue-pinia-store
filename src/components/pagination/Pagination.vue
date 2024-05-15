<script setup>
import { ref } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useRoute, useRouter } from "vue-router";

const productStore = useProductStore();
const route = useRoute();
const router = useRouter();

const onClickHandler = (page) => {
  if (page === 1) router.push("/");
  else router.push(`/?page=${page}`);
  productStore.getProduct(page * 30 - 30);
};

const currentPage = ref(+route.query.page || 1);

productStore.getProduct(currentPage.value * 30 - 30);
</script>
<template>
  <div class="pagination">
    <vue-awesome-paginate :total-items="+productStore.totalCount" :items-per-page="30" :max-pages-shown="5"
      v-model="currentPage" :on-click="onClickHandler" />
  </div>
</template>