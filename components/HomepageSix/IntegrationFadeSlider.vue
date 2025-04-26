<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/autoplay";

const sliderItems = [
  {
    id: 1,
    image: "images/figma.svg",
  },
  {
    id: 2,
    image: "images/dropbox.svg",
  },
  {
    id: 3,
    image: "images/twitter.svg",
  },
  {
    id: 4,
    image: "images/slack.svg",
  },
  {
    id: 5,
    image: "images/google-drive.svg",
  },
  {
    id: 6,
    image: "images/asana.svg",
  },
  {
    id: 7,
    image: "images/svelte.svg",
  },
  {
    id: 8,
    image: "images/notion.svg",
  },
  {
    id: 9,
    image: "images/snapchat.svg",
  },
  {
    id: 10,
    image: "images/reddit.svg",
  },
];
</script>

<template>
  <section class="bg-white pt-150 dark:bg-dark-300 max-md:pb-20">
    <div class="container relative z-10">
      <div class="mx-auto mb-10 max-w-[620px] text-center">
        <p class="section-tagline">Top Integration</p>

        <h2 class="mb-8">Make productivity easier with 50+ Integrations</h2>
        <p class="mb-10">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. It&lsquo;s not Latin though it looks like nothing.
        </p>

        <NuxtLink to="/contact" class="btn-outline">
          Start Your Journey
        </NuxtLink>
      </div>
    </div>
    <div class="integration-slider relative overflow-hidden">
      <div class="integration-slider-shape"></div>
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 9,
            spaceBetween: 50,
          },
        }"
        class="swiper container"
        id="integration"
      >
        <SwiperSlide
          v-for="img in sliderItems"
          :key="img.id"
          class="swiper-slide group !flex aspect-square !items-center"
        >
          <div
            class="mx-auto aspect-square w-20 origin-center scale-100 rounded-full bg-white p-2.5 shadow-box transition-transform duration-500 dark:bg-dark-200"
          >
            <div
              class="flex aspect-square items-center justify-center rounded-full border border-dashed border-gray-100 text-center dark:border-borderColor-dark"
            >
              <NuxtImg
                :src="img.image"
                alt="value image"
                class="inline-block h-8 w-8"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
