import { defineStore } from "pinia";
import apiProduct from "@/helpers/api";

export const useProductStore = defineStore("product", {
  state: () => ({
    drawer: false,
    product: null,
    totalCount: null
  }),
  actions: {
    toggleDrawer(bool) {
      this.drawer = bool;
    },
    async getProduct(skip = 0, limit = 30) {
      try {
        const res = await apiProduct.getProduct(skip, limit);
        this.product = res.products;
        this.totalCount = res.total
      } catch (error) {
        console.error(error);
      }
    },

    getSortedProduct(selectName) {
      if (selectName == "expensive") this.product?.sort((a, b) => b.price - a.price)
      else if (selectName == "cheep") this.product?.sort((a, b) => a.price - b.price)
      else { return this.product }
    },

    async getSearch(search) {
      try {
        const res = await apiProduct.getSearch(search);
        this.product = res.products;
        this.totalCount = res.total
      } catch {
        console.error(error);
      }
    }

  },
});
