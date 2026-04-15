<template>
  <div class="cart-list">
    <CartListHeader />
    <ul v-if="cart.items.length" class="cart-list__items">
      <CartItem v-for="item in cart.items" :key="item.id" :item="item" />
    </ul>
    <div v-else class="cart-list__empty">Корзина пуста</div>

    <footer v-if="cart.items.length" class="cart-list__footer">
      <label class="cart-list__install">
        <input
          v-model="cart.installationSelected"
          type="checkbox"
          class="cart-list__install-check"
        />
        <span class="cart-list__install-icon" aria-hidden="true">
          <img
            class="cart-list__install-icon-img"
            :src="installationIconUrl"
            alt=""
          />
        </span>
        <span class="cart-list__install-body">
          <span class="cart-list__install-title">Установка</span>
          <span class="cart-list__install-desc">
            Отметьте, если Вам необходима консультация профессионала по монтажу
            выбранных товаров.
          </span>
        </span>
      </label>
    </footer>
  </div>
</template>

<script setup lang="ts">
import CartItem from "~/components/CartItem.vue";
import CartListHeader from "~/components/CartListHeader.vue";
import installationIconUrl from "~/assets/icons/installation.svg";

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

.cart-list__footer {
  margin-top: 28px;
  border-radius: 5px;
}

.cart-list__install {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 22px 24px;
  background-color: #f6f8fa;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
}

.cart-list__install-check {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin: 0;
  cursor: pointer;
}

.cart-list__install-icon {
  flex-shrink: 0;
  line-height: 0;
}

.cart-list__install-icon-img {
  display: block;
  width: 50px;
  height: 50px;
}

.cart-list__install-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.cart-list__install-title {
  font-size: 16px;
  font-weight: 600;
  color: #2C3242;
}

.cart-list__install-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  color: #797B86;
}
</style>
