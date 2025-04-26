<script setup>
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const approachList = [
  "Scalable Systems",
  "Adaptable Technologies ",
  "Versatile Tools",
];
</script>

<template>
  <section class="relative pt-150 pb-25 max-md:pb-20">
    <div class="container relative z-10">
      <div class="grid max-md:grid-cols-1 grid-cols-2 gap-10 1xl:gap-x-24">
        <div class="relative">
          <p class="section-tagline">Customer service approach</p>

          <h2 class="mb-8">Data-driven insights for better decision-making.</h2>
          <p class="mb-11">
            Monitor chatbot performance with detailed analytics and reports.
            Provide live chat support to your customers.
          </p>
          <ul class="mb-14 [&>*:not(:last-child)]:mb-5 max-w-[490px]">
            <li
              class="flex items-center gap-x-2 border border-dashed border-gray-100 rounded dark:border-borderColor-dark p-2.5"
              v-for="(list, index) in approachList"
              :key="'id' + index"
            >
              <span
                class="relative w-10 h-10 rounded-full bg-[#F3F8E8] dark:bg-dark-200 shadow-icon gap-6"
              >
                <FontAwesomeIcon
                  :icon="faCheck"
                  class="fa-solid fa-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                />
              </span>
              <span class="font-semibold font-jakarta_sans">
                {{ list }}
              </span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn"> Get Started </NuxtLink>
        </div>

        <div
          v-motion-fadeUpVisibleAnimation
          class="relative flex max-md:justify-center justify-end items-center aspect-square"
        >
          <NuxtImg
            src="images/home-6-img/chatbot-approach.png"
            alt="company image"
            class="dark:hidden"
            sizes="1000"
          />
          <NuxtImg
            src="images/home-6-img/chatbot-approach-dark.png"
            alt="company image"
            class="hidden dark:inline-block"
            sizes="1000"
          />
          <div
            class="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10"
          >
            <div
              class="w-full h-[442px] rounded-full bg-primary-200/25 blur-[145px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
