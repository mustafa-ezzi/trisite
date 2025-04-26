<script setup>
const props = defineProps({
  question: String,
  answer: String,
  isOpen: Boolean,
});

const emit = defineEmits(["click"]);
const contentHeight = ref(null);

const onClick = () => {
  emit("click");
};

watchEffect(() => {
  if (contentHeight.value) {
    contentHeight.value.style.height = props.isOpen
      ? contentHeight.value.scrollHeight + "px"
      : "0px";
  }
});
</script>

<template>
  <div class="faq-item rounded-medium bg-white p-2.5 dark:bg-dark-200 shadow-sm">
    <button
      class="faq-header flex w-full cursor-pointer items-center rounded border border-dashed border-gray-100 bg-white px-5 py-3 dark:border-borderColor-dark dark:bg-dark-200 max-md:gap-x-2.5"
      @click="onClick"
    >
      <span class="text-left text-xl font-semibold">Q. {{ question }}</span>
      <span class="ml-auto shrink-0">
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
            stroke=""
            stroke-width="1.5"
            stroke-linecap="round"
            class="stroke-paragraph dark:stroke-primary"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
            stroke=""
            stroke-width="1.5"
            stroke-linecap="round"
            class="stroke-paragraph dark:stroke-primary"
          />
        </svg>
      </span>
    </button>
    <div
      ref="contentHeight"
      class="faq-body overflow-hidden"
      :style="{ height: isOpen ? contentHeight.scrollHeight + 'px' : '0px' }"
    >
      <p class="px-6 pb-3.5 pt-6 text-paragraph-light dark:text-[#A1A49D]">
        {{ answer }}
      </p>
    </div>
  </div>
</template>
