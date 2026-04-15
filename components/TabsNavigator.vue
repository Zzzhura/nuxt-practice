<template>
  <nav class="tabs-navigator" aria-label="Хлебные крошки">
    <NuxtLink to="/" class="tabs-navigator__link">Главная</NuxtLink>
    <img
      class="tabs-navigator__separator"
      :src="separatorIconUrl"
      alt=""
      aria-hidden="true"
    />
    <span class="tabs-navigator__current">Корзина</span>
  </nav>
</template>

<script setup lang="ts">
import separatorIconUrl from "~/assets/icons/navigation-separator.svg";
</script>

<style scoped>
.tabs-navigator {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 1280px;
  margin-left: 55px;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  line-height: 1;
}

.tabs-navigator__link {
  color: #33374e;
  text-decoration: none;
  opacity: 0.8;
}

.tabs-navigator__link:hover {
  opacity: 1;
}

.tabs-navigator__separator {
  width: 5px;
  height: 8px;
  flex-shrink: 0;
}

.tabs-navigator__current {
  color: #797b86;
}
</style>
