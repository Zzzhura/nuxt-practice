<template>
  <div class="header-cart">
    <div class="header-cart__icon">
      <img :src="cartIconUrl" width="29" height="26" />
    </div>
    <div class="header-cart__text">
      <span class="header-cart__text__title">Ваша корзина</span>
      <span class="header-cart__text__count">{{ itemsCount }} товара</span>
      <span class="header-cart__text__price"> {{ totalPrice }} ₽</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import cartIconUrl from "~/assets/icons/cart.svg";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const itemsCount = computed(() => cartStore.itemsCount);
const totalPrice = computed(() => cartStore.totalPrice);
</script>
<style scoped>
.header-cart__text__title,
.header-cart__text__count,
.header-cart__text__price {
  font-family: "Lato", sans-serif;
}

.header-cart {
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.header-cart__text {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.header-cart__text__title {
  font-size: 14px;
  font-weight: 400;
}

.header-cart__text__count {
  font-size: 12px;
  color: #797b86;
  font-weight: 400;
}

.header-cart__text__price {
  font-size: 16px;
  font-weight: 700;
}

.header-cart__text__price {
  font-size: 14px;
  font-weight: 400;
  color: #1f2432;
}
</style>
