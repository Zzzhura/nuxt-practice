<template>
  <aside class="cart-list-results">
    <h2 class="cart-list-results__title">Итого</h2>

    <div class="cart-list-results__row">
      <span class="cart-list-results__label">Сумма заказа</span>
      <span class="cart-list-results__value">{{ formattedTotalPrice }} ₽</span>
    </div>

    <div class="cart-list-results__row">
      <span class="cart-list-results__label">Количество</span>
      <span class="cart-list-results__value">{{ cartStore.itemsCount }} шт</span>
    </div>

    <div class="cart-list-results__row">
      <span class="cart-list-results__label">Установка</span>
      <span class="cart-list-results__value">Нет</span>
    </div>

    <div class="cart-list-results__divider"></div>

    <div class="cart-list-results__total">
      <span class="cart-list-results__total-label">Стоимость товаров</span>
      <span class="cart-list-results__total-value">{{ formattedTotalPrice }} ₽</span>
    </div>

    <button type="button" class="cart-list-results__button cart-list-results__button--primary">
      Оформить заказ
    </button>
    <button type="button" class="cart-list-results__button cart-list-results__button--secondary">
      Купить в 1 клик
    </button>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const formattedTotalPrice = computed(() =>
  new Intl.NumberFormat("ru-RU").format(cartStore.totalPrice),
);
</script>

<style scoped>
.cart-list-results {
  border-radius: 5px;
  margin-right: 80px;
  margin-top: 80px;
  width: 425px;
  flex-shrink: 0;
  background-color: #f6f7fa;
  padding: 35px 30px;
  font-family: "Lato", sans-serif;
}

.cart-list-results__title {
  margin: 0 0 32px;
  font-size: 28px;
  font-weight: 700;
  color: #1f2432;
}

.cart-list-results__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
}

.cart-list-results__label,
.cart-list-results__value {
  font-size: 16px;
  color: #1f2432;
}

.cart-list-results__divider {
  height: 1px;
  background-color: #d9d9d9;
  margin: 24px 0 26px;
}

.cart-list-results__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.cart-list-results__total-label {
  font-size: 24px;
  color: #1f2432;
}

.cart-list-results__total-value {
  font-size: 32px;
  font-weight: 700;
  color: #1f2432;
}

.cart-list-results__button {
  width: 100%;
  height: 54px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.cart-list-results__button--primary {
  border: none;
  background-color: #0069b4;
  color: #fff;
  margin-bottom: 12px;
}

.cart-list-results__button--secondary {
  border: 1px solid #0069b4;
  background-color: transparent;
  color: #0069b4;
}
</style>
