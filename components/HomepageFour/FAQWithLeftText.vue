<script setup>
import FAQData from "~/data/FAQData.json";
import FaqItem from "../Shared/FaqItem.vue";
let sliceData = FAQData.slice(0, 3);

const activeIndex = ref(null);
const handleItemClick = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="overflow-hidden relative pb-[250px] max-md:pb-20">
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-center">
        <div
          class="relative flex max-lg:justify-center justify-end items-center max-lg:mb-25"
        >
          <figure v-motion-fadeUpAnimation>
            <NuxtImg
              sizes="1000"
              src="/images/home-4-img/analytics-faq.png"
              alt="banking image"
              class="dark:hidden max-w-[350px] sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px] aos-init aos-animate"
            />
            <NuxtImg
              sizes="1000"
              src="/images/home-4-img/analytics-faq-dark.png"
              alt="banking image"
              class="hidden dark:inline-block max-w-[350px] sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px] aos-init aos-animate"
            />
          </figure>
          <div
            v-motion-fadeFromLeftAnimation
            class="absolute -right-5 -bottom-20 md:right-15 lg:-right-15 xl:-right-25 left-auto lg:-bottom-25 xl:-bottom-150 top-auto max-w-[250px] xl:max-w-[344px] aos-init aos-animate"
          >
            <NuxtImg
              sizes="1000"
              src="/images/home-4-img/analytics-faq-shape.png"
              alt="banking image"
              class="dark:hidden"
            />
            <NuxtImg
              sizes="1000"
              src="/images/home-4-img/analytics-faq-shape-dark.png"
              alt="banking image"
              class="hidden dark:inline-block"
            />
          </div>
        </div>

        <div class="lg:pl-15 xl:pl-25">
          <div>
            <p class="section-tagline">Faq’s</p>

            <h2 class="mb-8">
              Frequently Asked Question<br />
              From Clients
            </h2>
          </div>
          <div class="[&>*:not(:last-child)]:mb-5">
            <FaqItem
              v-for="faq in sliceData"
              :key="faq.id"
              :question="faq.question"
              :answer="faq.answer"
              :isOpen="activeIndex === faq.id"
              @click="handleItemClick(faq.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
