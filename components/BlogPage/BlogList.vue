<script setup>
import DotSvg from "../Icons/DotSvg.vue";
import Pagination from "../Shared/Pagination.vue";

const props = defineProps({
  blogItemData: {
    type: Array,
    required: true,
  },
});

const currentPage = ref(1);
const itemsPerPage = 6;

const totalPage = computed(() =>
  Math.ceil(props.blogItemData.length / itemsPerPage)
);

const paginateData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return props.blogItemData.slice(startIndex, endIndex);
});

// No need to use an additional computed property here, `paginateData` should be sufficient.
const currentPageData = paginateData;

const goToNextPage = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value += 1;
  }
};

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const setCurrentPage = (page) => {
  currentPage.value = page;
};

const paginateFunction = {
  totalPage,
  currentPage,
  setCurrentPage,
  goToNextPage,
  goToPreviousPage,
};
</script>

<template>
  <div
    class="max-lg:col-span-7 max-md:order-2 max-md:col-span-full lg:col-span-8 [&>*:not(:last-child)]:mb-8"
  >
    <h2 v-if="!currentPageData.length" class="text-center">No Blog Found</h2>

    <!-- Render blog items -->
    <article
      class="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
      v-for="blog in currentPageData"
      :key="blog.id"
    >
      <div
        class="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark max-md:px-4"
      >
        <div class="grid grid-cols-2 items-center gap-12 max-lg:grid-cols-1">
          <div class="w-ful mb-6 h-full">
            <NuxtImg
              :src="blog.thumbnail"
              alt="service logo"
              class="aspect-square h-full w-full rounded-md object-cover object-center"
            />
          </div>
          <div>
            <NuxtLink :to="'/tags/' + blog.tags" class="badge">
              {{ blog.tags }}
            </NuxtLink>
            <NuxtLink :to="blog._path" class="block">
              <h3 class="mb-3 font-semibold leading-[1.33]">
                {{ blog.title }}
              </h3>
            </NuxtLink>
            <div class="mb-4 flex items-center gap-x-2">
              <p>{{ blog.author }}</p>
              <span>
                <DotSvg />
              </span>
              <p>{{ blog.date }}</p>
            </div>
            <p>{{ blog.description }}...</p>
          </div>
        </div>
      </div>
    </article>

    <Pagination :paginateFunction="paginateFunction" />
  </div>
</template>
