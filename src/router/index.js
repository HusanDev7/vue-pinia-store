import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Pagination from "@/components/pagination/Pagination.vue";
import { useProductStore } from "@/stores/productStore";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("@/pages/ProductAboutPage.vue"),

      beforeEnter(to, from, next) {
        const productsStore = useProductStore()
        const exists = to.params.id <= productsStore?.totalCount && to.params.id > 0
        if (!exists) {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.split('/').splice(1) },
            query: to.query,
            hash: to.hash
          })
        } else {
          next()
        }
      }
    },
    {
      path: "/contact",
      name: "Contact us",
      component: () => import("@/pages/ContactPage.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
});

export default router;
