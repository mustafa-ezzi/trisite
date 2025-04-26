<script setup>
import DotSvg from "../Icons/DotSvg.vue";

const { blogData } = defineProps({
  blogData: {
    type: Object,
  },
});
</script>

<template>
  <article
    class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
  >
    <div
      class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-6 max-md:p-4"
    >
      <NuxtImg
        sizes="1000"
        :src="blogData.thumbnail"
        alt="service logo"
        class="mb-6 w-full rounded-md"
      />
      <div>
        <NuxtLink :to="'/tags/' + blogData.tags" class="badge">
          {{ blogData.tags }}
        </NuxtLink>
        <NuxtLink :to="blogData._path" class="block">
          <h3 class="mb-3 font-semibold leading-[1.33]">
            {{ blogData.title }}
          </h3>
        </NuxtLink>
        <div class="flex gap-x-2 items-center mb-4">
          <p>{{ blogData.author }}</p>
          <span>
            <DotSvg />
          </span>
          <p>{{ blogData.date }}</p>
        </div>
        <p>{{ blogData.description.slice(0, 80) }}...</p>
      </div>
    </div>
  </article>
</template>
