<script setup>
import { useRoute } from "vue-router";
import ButtonPrice from "@/components/button/ButtonPrice.vue";
import { useProductSingleStore } from "@/stores/productSingleStore";
// import { useaddCardStore } from "@/stores/addCardStore";

// const addCardStore = useaddCardStore();

const productSingleStore = useProductSingleStore();

const roter = useRoute();

productSingleStore.getSingleProduct(roter.params.id);
</script>

<template>
  <div class="about">
    <div class="about__box">
      <img
        class="about__box-img"
        :src="
          productSingleStore.product?.thumbnail ??
          '@/src/assets/img/no-photo.jpg'
        "
        alt=""
      />
      <h2 class="about__box-brand">
        <span class="bg"> Brand:</span>
        {{ productSingleStore.product?.brand }}
      </h2>
      <h3 class="about__box-name">
        <span class="bg">Product name:</span>
        {{ productSingleStore.product?.title }}
      </h3>

      <div class="about__box-box">
        <div class="about__box-box-mini">
          <h4 class="about__box-price">
            <span class="bg">Product price:</span>
            {{ productSingleStore.product?.price }} $
          </h4>
        </div>
        <div class="about__box-box-mini">
          <router-link to="/contact">
            <ButtonPrice />
          </router-link>
          <!-- @click="addCardStore.getAddCardId(productSingleStore.product?.id)" -->
        </div>
      </div>
      <p class="about__box-desc">
        {{ productSingleStore.product?.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin-top: 100px;

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &-img {
      width: 100%;
      max-width: 500px;
      border-radius: 10px;
    }

    &-brand {
      margin: 20px 0;
    }

    &-name {
      margin: 20px 0;
    }

    &-desc {
      line-height: 30px;
      text-align: center;
    }

    &-box {
      margin: 20px 0;
      margin-top: 30px;
      align-items: center;
      display: flex;
      gap: 70px;
    }
  }

  .bg {
    color: dodgerblue;
  }
}
</style>
