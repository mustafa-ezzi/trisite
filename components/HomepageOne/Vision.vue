<script setup>
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import VisionLine1 from "../Icons/VisionLine1.vue";
import VisionLine2 from "../Icons/VisionLine2.vue";
import VisionLine3 from "../Icons/VisionLine3.vue";
import VisionLine4 from "../Icons/VisionLine4.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const visionList = [
  "Guided Payment Procurement",
  "Guided Payment Procurement",
  "Guided Payment Procurement",
];
</script>

<template>
  <section
    class="bg-gray dark:bg-dark overflow-hidden relative pt-[300px] pb-150 max-md:pb-20 -mt-24 max-md:pt-[320px] max-md:-mt-60 dark:-mt-24 dark:max-md:-mt-60"
  >
    <div class="absolute top-0 max-w-[1612px] left-0 max-md:hidden">
      <VisionLine1 />
    </div>
    <div class="absolute top-0 max-w-[1612px] right-0 max-md:hidden">
      <VisionLine2 />
    </div>
    <div class="absolute top-0 max-w-[1612px] left-0 md:hidden">
      <VisionLine3 />
    </div>
    <div class="absolute top-0 max-w-[1612px] right-0 md:hidden">
      <VisionLine4 />
    </div>
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-end">
        <div>
          <p class="section-tagline">Data Integrations</p>

          <h2 class="max-lg:mb-4 mb-8">
            A strong vision is crucial for the analysis of wealth.
          </h2>
          <p class="max-lg:mb-5 mb-11">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text nothing Before & After magazine.
          </p>
          <ul
            class="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4"
          >
            <li
              class="flex items-center gap-x-2"
              v-for="(list, i) in visionList"
              :key="i"
            >
              <span
                class="relative w-7 h-7 rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center"
              >
                <FontAwesomeIcon
                  :icon="faCheck"
                  class="fa-solid fa-check text-paragraph dark:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </span>
              <span class="dark:text-white font-jakarta_sans font-medium">{{
                list
              }}</span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn"> Start Your Journey </NuxtLink>
        </div>
        <div class="relative max-md:mt-150">
          <figure v-motion-fadeFromLeftAnimation>
            <NuxtImg
              sizes="1000"
              src="/images/vision/vision-image.png"
              alt="vision image"
              class="w-[260px] xl:w-[310px] dark:hidden"
            />
            <NuxtImg
              sizes="1000"
              src="/images/vision/vision-image-dark.png"
              alt="vision image"
              class="w-[260px] xl:w-[310px] hidden dark:inline-block"
            />
          </figure>
          <div
            v-motion-fadeFromRightAnimation
            class="absolute -top-25 left-40 md:-top-12 xl:-top-[150px] xl:left-[290px] w-[200px] md:w-[200px] xl:w-[310px]"
          >
            <NuxtImg
              sizes="1000"
              src="/images/vision/vision-image-1.png"
              alt="vision image shape"
              class="w-full full dark:hidden"
            />
            <NuxtImg
              sizes="1000"
              src="/images/vision/vision-image-dark-1.png"
              alt="vision image shape"
              class="w-full full hidden dark:inline-block"
            />
          </div>
          <div
            v-motion-fadeUpAnimation
            class="absolute bottom-5 left-20 md:bottom-0 xl:bottom-8 md:left-[100px] xl:left-150 w-[280px] md:w-[200px] xl:w-[350px]"
          >
            <NuxtImg
              sizes="1000"
              src="/images/vision/vision-image-2.png"
              alt="vision image shape"
              class="w-full h-full dark:hidden"
            />
            <NuxtImg
              sizes="1000"
              src="/images/vision/vision-image-dark-2.png"
              alt="vision image shape"
              class="w-full h-full hidden dark:inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
