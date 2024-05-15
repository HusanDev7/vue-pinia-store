<script setup>
import { ref } from "vue";
import Button from "@/components/button/Button.vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

const pages = [
  {
    path: "/",
    name: "Home",
  },

  {
    path: "/contact",
    name: "Contact us",
  },
];

const active = ref(false);
</script>
<template>
  <div class="container">
    <nav class="nav">
      <router-link to="/" class="nav__logo">Online <span class="nav__logo-color">Shops</span></router-link>
      <div class="nav__menu" :class="{ active: active }">
        <ul class="nav__menu-list">
          <li class="nav__menu-item" v-for="item in pages" :key="item.name">
            <router-link :to="item.path" @click="active = !active">{{
              item.name
              }}</router-link>
          </li>
        </ul>
      </div>

      <Button />

      <div class="togler" @click="(active = !active), productStore.toggleDrawer(false)">
        <span class="togler-line" :class="{ active: active }"></span>
      </div>
    </nav>
  </div>
</template>
