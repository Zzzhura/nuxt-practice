<template>
  <section class="viewed-products-slider">
    <div class="viewed-products-slider__header">
      <h2 class="viewed-products-slider__title">Просмотренные товары</h2>
      <div class="viewed-products-slider__controls">
        <button
          type="button"
          class="viewed-products-slider__arrow viewed-products-slider__arrow--prev"
          aria-label="Предыдущий слайд"
        />
        <div class="viewed-products-slider__fraction">
          {{ currentPage }} / {{ totalPages }}
        </div>
        <button
          type="button"
          class="viewed-products-slider__arrow viewed-products-slider__arrow--next"
          aria-label="Следующий слайд"
        />
      </div>
    </div>

    <ClientOnly>
      <Swiper
        class="viewed-products-slider__swiper"
        :modules="modules"
        :slides-per-view="4"
        :slides-per-group="4"
        :space-between="20"
        :navigation="navigation"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <article class="viewed-card">
            <img
              class="viewed-card__image"
              :src="product.image"
              :alt="product.code"
            />
            <h3 class="viewed-card__code">{{ product.code }}</h3>
            <p class="viewed-card__desc">{{ product.description }}</p>
            <p class="viewed-card__price-rub">
              {{ formatRub(product.priceFrom) }} ₽ – {{ formatRub(product.priceTo) }} ₽
            </p>
            <p class="viewed-card__price-eur">
              {{ product.eurFrom }} € – {{ product.eurTo }} €
            </p>
            <button type="button" class="viewed-card__btn">Подробнее</button>
          </article>
        </SwiperSlide>
      </Swiper>
      <template #fallback>
        <div class="viewed-products-slider__fallback" />
      </template>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import g2hImage from "~/assets/cartItemsImages/G2H.png";
import bxcImage from "~/assets/cartItemsImages/BXC.png";
import ghnImage from "~/assets/cartItemsImages/GHN.png";

const modules = [Navigation];

const navigation = {
  prevEl: ".viewed-products-slider__arrow--prev",
  nextEl: ".viewed-products-slider__arrow--next",
};

/** 6 страниц × 4 товара */
const slidesPerGroup = 4;
const totalPages = 6;
const currentPage = ref(1);

const updatePageFromSwiper = (swiper: SwiperInstance) => {
  currentPage.value = Math.floor(swiper.activeIndex / slidesPerGroup) + 1;
};

const onSwiper = (swiper: SwiperInstance) => {
  updatePageFromSwiper(swiper);
};

const onSlideChange = (swiper: SwiperInstance) => {
  updatePageFromSwiper(swiper);
};

type ViewedProduct = {
  id: number;
  code: string;
  description: string;
  priceFrom: number;
  priceTo: number;
  eurFrom: string;
  eurTo: string;
  image: string;
};

const desc =
  "Вытяжное устройство для механической системы вентиляции";

const codes = ["BXC", "G2H", "GHN", "TDA"] as const;
const images = [bxcImage, g2hImage, ghnImage, bxcImage] as const;

const products: ViewedProduct[] = Array.from({ length: totalPages * slidesPerGroup }, (_, i) => {
  const idx = i % 4;
  const page = Math.floor(i / slidesPerGroup) + 1;
  return {
    id: i + 1,
    code: codes[idx],
    description: desc,
    priceFrom: 6848 + page * 120 + idx * 50,
    priceTo: 56584 + page * 200 + idx * 80,
    eurFrom: "77,60",
    eurTo: "643,86",
    image: images[idx],
  };
});

const formatRub = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value);
</script>

<style scoped>
.viewed-products-slider {
  max-width: 1280px;
  margin: 48px 80px 80px 64px;
  padding: 0 24px;
  font-family: "Lato", sans-serif;
}

.viewed-products-slider__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.viewed-products-slider__title {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1f2432;
}

.viewed-products-slider__controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.viewed-products-slider__arrow {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #c8d4e0;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.viewed-products-slider__arrow:hover {
  background-color: #b3c3d4;
}

.viewed-products-slider__arrow.swiper-button-disabled {
  opacity: 0.35;
  cursor: default;
  pointer-events: none;
}

.viewed-products-slider__arrow--prev::after,
.viewed-products-slider__arrow--next::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

.viewed-products-slider__arrow--prev::after {
  transform: rotate(45deg);
  left: 2px;
}

.viewed-products-slider__arrow--next::after {
  transform: rotate(-135deg);
  right: 2px;
}

.viewed-products-slider__fraction {
  min-width: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #1f2432;
}

.viewed-products-slider__swiper {
  overflow: hidden;
}

.viewed-products-slider__fallback {
  min-height: 320px;
}

.viewed-card {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  background-color: #f4f4f4;
  border-radius: 4px;
}

.viewed-card__image {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
  object-fit: contain;
}

.viewed-card__code {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #1f2432;
}

.viewed-card__desc {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.4;
  color: #2c3242;
  flex-grow: 1;
}

.viewed-card__price-rub {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
  color: #1f2432;
}

.viewed-card__price-eur {
  margin: 0 0 16px;
  font-size: 13px;
  color: #797b86;
}

.viewed-card__btn {
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  background-color: #0069b4;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
}

.viewed-card__btn:hover {
  filter: brightness(1.05);
}
</style>

