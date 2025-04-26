<script setup>
import FAQData from "~/data/FAQData.json";
import FaqItem from "./Shared/FaqItem.vue";

const categories = ["general", "changelog", "terms"];
const filterData = ref([...FAQData]);
const active = ref(0);
const activeIndex = ref(null);

const handleItemClick = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

onMounted(() => {
  filterData.value = FAQData.filter((faq) => faq.type.includes("general"));
});

const handleClick = (type, index) => {
  filterData.value = FAQData.filter((item) => item.type.includes(type));
  active.value = index;
};
</script>

<template>
  <div class="mx-auto max-w-[850px]">
    <ul
      class="faq-tabs mx-auto mb-15 flex w-fit max-w-[530px] items-center border-b-2 border-white dark:border-borderColor-dark max-md:flex-col max-md:border-none"
    >
      <li
        v-for="(btn, index) in categories"
        :key="index"
        :class="index === active ? 'tabActive group' : 'group'"
      >
        <button
          @click="handleClick(btn, index)"
          class="relative -mb-0.5 px-7 py-4 text-center text-xl font-medium capitalize after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:origin-right after:-translate-x-1/2 after:scale-x-0 after:bg-paragraph after:transition-transform after:duration-500 group-[.tabActive]:after:origin-left group-[.tabActive]:after:scale-x-100 dark:after:bg-white"
        >
          {{ btn }}
        </button>
      </li>
    </ul>

    <div class="[&>*:not(:last-child)]:mb-5">
      <FaqItem
        v-for="faq in filterData"
        :key="faq.id"
        :question="faq.question"
        :answer="faq.answer"
        :isOpen="activeIndex === faq.id"
        @click="handleItemClick(faq.id)"
      />
    </div>
  </div>
</template>
