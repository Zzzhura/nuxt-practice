import { defineStore } from "pinia";
import g2hImage from "~/assets/cartItemsImages/G2H.png";
import bxcImage from "~/assets/cartItemsImages/BXC.png";
import ghnImage from "~/assets/cartItemsImages/GHN.png";

export type CartItem = {
  id: number;
  title: string;
  content: string;
  price: number;
  image: string;
  quantity: number;
  artice: string;
};

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [
      {
        id: 1,
        title: "Вытяжное устройство G2H",
        content:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        price: 12644,
        image: g2hImage,
        quantity: 1,
        artice: "G2H1065",
      },
      {
        id: 2,
        title: "Вытяжное устройство BXC",
        content:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        price: 12644,
        image: bxcImage,
        quantity: 2,
        artice: "G2H1065",
      },
      {
        id: 3,
        title: "Вытяжное устройство GHN",
        content:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        price: 12644,
        image: ghnImage,
        quantity: 1,
        artice: "G2H1065",
      },
    ] as CartItem[],
  }),

  getters: {
    itemsCount: (state) => state.items.reduce((sum, i) => sum + i.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  },
  actions: {
    increaseItemQuantity(id: number) {
      const item = this.items.find((cartItem) => cartItem.id === id);
      if (!item) {
        return;
      }
      item.quantity += 1;
    },
    decreaseItemQuantity(id: number) {
      const item = this.items.find((cartItem) => cartItem.id === id);
      if (!item) {
        return;
      }
      if (item.quantity <= 1) {
        this.removeItem(id);
        return;
      }
      item.quantity -= 1;
    },
    removeItem(id: number) {
      this.items = this.items.filter((cartItem) => cartItem.id !== id);
    },
    clearCart() {
      this.items = [];
    },
  },
});
