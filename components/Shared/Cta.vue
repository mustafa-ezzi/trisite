<script setup>
import CtaBgSvg1 from "../Icons/CtaBgSvg1.vue";
import CtaBgSvg2 from "../Icons/CtaBgSvg2.vue";
import CtaBgSvg3 from "../Icons/CtaBgSvg3.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const ctaListOption = [
  "No Credit Card Required",
  "Free For 30 Day Trial.",
  "Money Back Guarente.",
];
</script>

<template>
  <section
    class="bg-gray dark:bg-dark overflow-hidden relative pt-[135px] pb-[145px] max-md:py-20"
  >
    <div
      class="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2 max-md:hidden"
    >
      <CtaBgSvg1 />
    </div>
    <div class="absolute bottom-0 left-0 w-full max-md:hidden">
      <CtaBgSvg2 />
    </div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 md:hidden">
      <CtaBgSvg3 />
    </div>

    <div class="container relative z-10">
      <div class="text-center mx-auto">
        <h2
          class="mb-5 max-lg:text-[32px] text-[48px] font-semibold max-w-[400px] mx-auto"
        >
          {{ title }}
        </h2>
        <p class="max-lg:mt-6 mb-12 max-w-[400px] mx-auto">
          By creating a custom Web design for your business, we can bring your
          vision to life.
        </p>
        <NuxtLink to="/contact" class="btn"> Get Started Today </NuxtLink>
        <ul
          class="flex max-md:flex-col max-md:gap-5 items-center justify-between max-lg:mt-5 mt-20 max-w-[815px] mx-auto"
        >
          <li
            class="flex items-center"
            v-for="(option, i) in ctaListOption"
            :key="i"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <path
                d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                class="stroke-paragraph dark:stroke-primary"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>{{ option }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
