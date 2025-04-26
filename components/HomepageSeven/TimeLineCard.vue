<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
  index: {
    type: Number,
  },
});
const { item, index } = props;
</script>

<template>
  <li class="sticky top-28">
    <div
      class="relative flex items-center gap-2.5 md:gap-5 lg:gap-20"
      :style="{ top: `calc(-5vh + ${index * 25}px)` }"
    >
      <div class="item-center relative flex shrink-0 justify-center">
        <div
          class="relative w-[240px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 max-md:w-auto max-xs:p-2"
        >
          <div
            class="flex w-full items-center justify-center rounded border border-dashed border-gray-100 dark:border-borderColor-dark max-1xl:p-5 max-xs:p-2 1xl:p-10"
          >
            <h3 class="max-md:text-base">{{ item.yearRange }}</h3>
          </div>
          <NuxtImg
            src="/images/home-7-img/line.png"
            alt="line"
            class="absolute right-[-90px] top-1/2 -z-10 max-w-[none] -translate-y-1/2"
          />
        </div>
      </div>
      <div
        class="w-[300px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 max-xs:p-2 1xl:w-[400px]"
      >
        <div
          class="flex h-full flex-col justify-center rounded border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-xs:p-2 1xl:p-8"
        >
          <h3 class="mb-3 leading-8">{{ item.title }}</h3>
          <ul class="lg:list-disc">
            <li
              class="mb-2.5 last:mb-0"
              v-for="(list, i) in item.item"
              :key="i"
            >
              <strong>{{ list.year }}</strong
              >: {{ list.details }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>
