<template>
  <li class="cart-list__item">
    <div class="cart-list__image-wrap">
      <img class="cart-list__image" :src="item.image" :alt="item.title" />
    </div>

    <div class="cart-list__info">
      <h3 class="cart-list__title">{{ item.title }}</h3>
      <p class="cart-list__content">{{ item.content }}</p>
      <p class="cart-list__article">Артикул: {{ item.artice }}</p>
    </div>

    <div class="cart-list__qty">
      <button
        type="button"
        class="cart-list__btn cart-list__btn-minus"
        @click="decreaseQuantity"
      >
        −
      </button>
      <div class="cart-list__count">{{ item.quantity }}</div>
      <button
        type="button"
        class="cart-list__btn cart-list__btn-plus"
        @click="increaseQuantity"
      >
        +
      </button>
    </div>

    <div class="cart-list__price">{{ item.price * item.quantity }} ₽</div>
    <button type="button" class="cart-list__delete-btn" @click="removeItem">
      <img :src="deleteIconUrl" alt="cross" />
    </button>
  </li>
</template>

<script setup lang="ts">
import { useCartStore, type CartItem } from "~/stores/cart";
import deleteIconUrl from "~/assets/icons/cross.svg";

const props = defineProps<{
  item: CartItem;
}>();

const cartStore = useCartStore();

const increaseQuantity = () => {
  cartStore.increaseItemQuantity(props.item.id);
};

const decreaseQuantity = () => {
  cartStore.decreaseItemQuantity(props.item.id);
};

const removeItem = () => {
  cartStore.removeItem(props.item.id);
};
</script>

<style scoped>
.cart-list__title,
.cart-list__content,
.cart-list__article {
  font-family: "Lato", sans-serif;
  margin: 0;
}

.cart-list__item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto 24px;
  gap: 20px;
  align-items: center;
  padding: 24px 0;
}

.cart-list__item:not(:last-child) {
  border-bottom: 1px solid #d9d9d9;
}

.cart-list__title {
  font-size: 16px;
  font-weight: 600;
  color: #1F2432;
  padding-bottom: 6px;
}

.cart-list__content {
  font-size: 12px;
  font-weight: 400;
  width: 263px;
  color:#2C3242;
  padding-bottom: 6px;
}

.cart-list__article {
  font-size: 14px;
  font-weight: 400;
  color:#797B86;
  padding-top: 7px;
}

.cart-list__price {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color:#1F2432;
}

.cart-list__image {
  width: 100px;
  height: 100px;
  padding-right:31px;
}

.cart-list__qty {
  display: flex;
  flex-direction: row;
}

.cart-list__btn {
  background-color: #F6F8FA;
  width: 38px;
  height: 34px;
  color:#33374E;
  border: none;
}

.cart-list__btn-minus {
  border-radius: 4px 0 0 4px;
}

.cart-list__btn-plus {
  border-radius: 0 4px 4px 0;
}
.cart-list__count {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  display: flex;
  margin: 0 2px;
  justify-content: center;
  align-items: center;
  background-color: #F6F8FA;
  width: 38px;
  height: 34px;
  color:#1F2432;
}

.cart-list__delete-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
}
</style>
