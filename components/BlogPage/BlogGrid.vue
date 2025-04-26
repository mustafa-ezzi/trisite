<script setup>
import BlogItems from "../Shared/BlogItems.vue";
import Pagination from "../Shared/Pagination.vue";

const props = defineProps({
  blogs: {
    type: Array,
  },
});
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPage = computed(() => Math.ceil(props.blogs.length / itemsPerPage));

const paginateData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return props.blogs.slice(startIndex, endIndex);
});

const currentPageData = computed(() => paginateData.value);

const goToNextPage = () => {
  currentPage.value += 1;
};

const goToPreviousPage = () => {
  currentPage.value -= 1;
};

const paginateFunction = {
  totalPage,
  currentPage,
  setCurrentPage: (page) => (currentPage.value = page),
  goToNextPage,
  goToPreviousPage,
};
</script>

<template>
  <section class="relative py-150 max-md:py-20 overflow-hidden">
    <div class="container relative mb-16">
      <div class="mx-auto mb-16 max-w-[550px] text-center">
        <p class="section-tagline">Tips and Tricks</p>
        <h2>Our recent news & insights</h2>
      </div>
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-60 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
        >
          <div
            class="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
        </div>
        <div class="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          <BlogItems
            v-for="(blog, i) in currentPageData"
            :key="i"
            :blogData="blog"
            :column="false"
          />
        </div>
      </div>
    </div>
    <Pagination :paginateFunction="paginateFunction" />
  </section>
</template>
