<template>
  <div class="cart-list">
    <CartListHeader />
    <ul v-if="cart.items.length" class="cart-list__items">
      <CartItem v-for="item in cart.items" :key="item.id" :item="item" />
    </ul>
    <div v-else class="cart-list__empty">Корзина пуста</div>
  </div>
</template>

<script setup lang="ts">
import CartItem from "~/components/CartItem.vue";
import CartListHeader from "~/components/CartListHeader.vue";

const cart = useCartStore();
</script>

<style scoped>
.cart-list {
  margin-left: 50px;
  width: 100%;
}

.cart-list__items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cart-list__empty {
  width: 100%;
  padding: 32px 0;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1f2432;
}
</style>
