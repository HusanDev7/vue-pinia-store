import { defineStore } from "pinia";

export const useaddCardStore = defineStore("addCard", {
  state: () => ({
    addCards: [],
  }),
  getters: {
    totalSum() {
      return this.addCards.reduce(
        (sum, product) => sum + (product.price || 0) * product.quantity,
        0
      );
    },
  },

  actions: {
    getAddCardId(card) {
      const index = this.addCards.findIndex(
        (product) => product.id === card.id
      );
      if (index !== -1) {
        this.addCards[index].quantity += 1;
      } else {
        card.quantity = 1;
        this.addCards.push(card);
      }
    },

    removeProduct(id) {
      const indexToRemove = this.addCards.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        this.addCards.splice(indexToRemove, 1);
      }
    },

    incrementQ(card) {
      const index = this.addCards.findIndex(
        (product) => product.id === card.id
      );
      if (index !== -1) {
        this.addCards[index].quantity += 1;
      }
    },

    decrementQ(card) {
      const index = this.addCards.findIndex(
        (product) => product.id === card.id
      );
      if (index !== -1) {
        this.addCards[index].quantity -= 1;
        if (this.addCards[index].quantity < 1) {
          this.addCards[index].quantity = 1;
        }
      }
    },
  },
  persist: true,
});
