<template>
  <div class="header">
    <div class="header__start"></div>
    <div class="header__end">
      <div class="header__end__summary">
        <HeaderCart />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderCart from "./HeaderCart.vue";
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95px;
}

.header__start {
  width: 100%;
  height: 100%;
}

.header__end {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.header__end__summary {
  margin: 19px 82px 25px 0px;
  height: 51px;
  width: 132px;
  background-color: white;
}
</style>
