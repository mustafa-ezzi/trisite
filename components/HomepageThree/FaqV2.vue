<script setup>
import FAQData from "~/data/FAQData.json";
import FaqItem from "../Shared/FaqItem.vue";

const activeIndex = ref(null);

const handleItemClick = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="relative pt-150 pb-150 max-md:overflow-hidden">
    <div class="container relative z-10">
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
      >
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
        ></div>
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"
        ></div>
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"
        ></div>
      </div>

      <div class="max-w-[830px] mx-auto">
        <div class="text-center">
          <p class="section-tagline mb-3">Faq’s</p>

          <h2 class="mb-12">
            Frequently Asked <br />
            Question
          </h2>
        </div>
        <div class="[&>*:not(:last-child)]:mb-5">
          <FaqItem
            v-for="faq in FAQData"
            :key="faq.id"
            :question="faq.question"
            :answer="faq.answer"
            :isOpen="activeIndex === faq.id"
            @click="handleItemClick(faq.id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
