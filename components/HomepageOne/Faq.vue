<script setup>
import FaqBgSvg1 from "../Icons/FaqBgSvg1.vue";
import FaqBgSvg2 from "../Icons/FaqBgSvg2.vue";
import FAQData from "~/data/FAQData.json";
import FaqItem from "../Shared/FaqItem.vue";

const activeIndex = ref(null);
const handleItemClick = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section
    class="bg-gray dark:bg-dark overflow-hidden relative pt-150 pb-[130px] max-md:py-20"
  >
    <div class="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2">
      <FaqBgSvg1 />
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <FaqBgSvg2 />
    </div>
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-10 1xl:gap-x-24">
        <div>
          <p class="section-tagline">Faq’s</p>

          <h2 class="mb-8">
            Frequently Asked <br />
            Question
          </h2>
          <p>
            Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper
            suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames
            eget eget nascetur ornare
          </p>
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
