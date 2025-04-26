<script setup>
import TestimonialList from "~/data/TestimonialList.json";
const { TestimonialData } = TestimonialList;
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import RatingStar from "./RatingStar.vue";

const breakpoints = ref({
  200: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 45,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 45,
  },
});
</script>

<template>
  <Swiper
    :slides-per-view="3"
    :modules="[Pagination, Autoplay]"
    :pagination="{ clickable: true }"
    :breakpoints="breakpoints"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide
      v-for="testimonial in TestimonialData"
      class="py-16"
      :key="testimonial.id"
      ><div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <div
          class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-7"
        >
          <NuxtImg
            sizes="1000"
            :src="testimonial.logoLight"
            alt="service logo"
            class="inline-block dark:hidden mb-6"
          />
          <NuxtImg
            sizes="1000"
            :src="testimonial.logoDark"
            alt="service logo"
            class="hidden dark:inline-block mb-6"
          />
          <blockquote
            class="text-paragraph dark:text-white italic mb-5 leading-[1.75]"
          >
            {{ testimonial.testimonial }}
          </blockquote>
          <div class="mb-7">
            <i class="fa-solid fa-star text-paragraph dark:text-white"></i>
            <RatingStar :rating="testimonial.rating" />
          </div>

          <div
            class="pt-7 flex items-center border-t border-dashed border-gray-100 dark:border-borderColor-dark"
          >
            <NuxtImg
              sizes="1000"
              :src="testimonial?.author?.image"
              alt="avatar"
              class="mr-4 rounded-full"
            />
            <div class="block">
              <h3 class="text-base font-semibold">
                {{ testimonial?.author?.name }}
              </h3>
              <p
                class="text-paragraph-light dark:text-[#A1A49D] font-jakarta_sans text-sm font-medium"
              >
                {{ testimonial?.author?.designation }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
