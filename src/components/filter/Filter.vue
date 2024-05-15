<script setup>
import { ref, watch } from "vue";
import ButtonSearch from "../button/ButtonSearch.vue";
import { useProductStore } from "@/stores/productStore";
const productStore = useProductStore();

const selectValue = ref("default");

const searchFilter = ref("");

watch(selectValue, () => {
  console.log(selectValue.value);
  productStore.getSortedProduct(selectValue.value);
});

const search = () => {
  productStore.getSearch(searchFilter.value);
  if (productStore.getSearch(searchFilter.value)) {
    searchFilter.value = "";
  }
};
</script>

<template>
  <div class="container">
    <div class="filter">
      <div class="filter-box">
        <div class="filter-mini">
          <select class="filter-box-select" v-model="selectValue">
            <option value="default">Default</option>
            <option value="expensive">expensive</option>
            <option value="cheep">cheap</option>
          </select>
        </div>
        <div class="filter-mini">
          <input
            class="filter-box-inp"
            @keydown.enter="search()"
            v-model="searchFilter"
            type="text"
            placeholder="search..."
          />
          <ButtonSearch @click="search()" />
        </div>
      </div>
    </div>
  </div>
</template>
