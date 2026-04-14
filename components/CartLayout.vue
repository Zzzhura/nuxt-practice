<template>
  <div class="cart-layout">
    <div class="cart-layout-content">
      <CartList />
      <CartListResults />
    </div>
  </div>
</template>
<script setup lang="ts">
import CartListResults from "~/components/CartListResults.vue";
</script>
<style scoped>
.cart-layout {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

.cart-layout-content {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
</style>
