<template>
  <div class="cart-list-header">
    <div class="cart-list-header__start">
      <span class="cart-list-header__title">Ваша корзина</span>
      <span class="cart-list-header__items-count">{{ cartStore.itemsCount }} товара</span>
    </div>
    <div class="cart-list-header__end">
      <button
        type="button"
        class="cart-list-header__clear-button"
        @click="cartStore.clearCart"
      >
        Очистить корзину
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
</script>

<style scoped>
.cart-list-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 53px;
  margin-bottom: 16px;
}

.cart-list-header__start {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.cart-list-header__end {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
}

.cart-list-header__title {
  font-family: "Lato", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #1f2432;
  line-height: 43px;
}

.cart-list-header__items-count {
  font-family: "Lato", sans-serif;
  padding-left: 22px;
  font-size: 18px;
  color: #797b86;
}

.cart-list-header__clear-button {
  font-family: "Lato", sans-serif;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  color: #797b86;
  border-bottom: 1px solid #797b86;
}
</style>
