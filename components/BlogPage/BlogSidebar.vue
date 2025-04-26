<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SearchSvgIcon from "../Icons/SearchSvgIcon.vue";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  blogSidebarData: {
    type: Array,
    required: true,
  },
  uniqueTags: {
    type: Array,
  },
  slug: {
    type: String,
  },
});

const { blogSidebarData, slug } = props;

const uniqueTags = computed(() => {
  const tagsSet = [];
  blogSidebarData.forEach((blog) => {
    const tags = blog?.tags;
    if (!tagsSet.includes(tags)) {
      tagsSet.push(tags);
    }
  });
  return tagsSet.sort();
});

const uniqueCategory = computed(() => {
  const categorySet = [];
  blogSidebarData.forEach((blog) => {
    const category = blog.categories;
    if (!categorySet.includes(category)) {
      categorySet.push(category);
    }
  });
  return categorySet.sort();
});

const search = ref("");
</script>

<template>
  <div
    class="max-md:col-span-full max-lg:col-span-5 max-md:order-1 lg:col-span-4 self-start"
  >
    <div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
      <div
        class="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColor-dark py-12 px-8"
      >
        <div class="mb-12">
          <h3 class="mb-8">Search</h3>
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-5">
              <SearchSvgIcon />
            </span>
            <input
              class="w-full border bg-white dark:bg-transparent border-borderColor dark:border-borderColor-dark rounded-[60px] py-5 pl-12 pr-5 focus:outline-none placeholder:text-paragraph-light dark:text-paragraph-light font-jakarta_sans placeholder:font-jakarta_sans focus:border-primary dark:focus:border-primary duration-300 transition-all"
              placeholder="Search..."
              type="text"
              v-model="search"
              @input="$emit('getSearchInput', search)"
            />
          </label>
        </div>
        <div class="mb-12">
          <h3 class="mb-3">Categories</h3>
          <div
            class="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark"
          >
            <NuxtLink
              v-for="(category, index) in uniqueCategory"
              :key="`${index}+category`"
              :to="'/categories/' + category"
              :class="slug == category ? 'blogActive' : ''"
              class="font-jakarta_sans text-lg font-medium group flex items-center justify-between py-5 relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              {{ category }}
              <FontAwesomeIcon
                :icon="faAngleRight"
                class="hidden group-[.blogActive]:block"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="mb-12">
          <h3 class="mb-8">Latest Articles</h3>
          <div class="[&>*:not(:last-child)]:mb-6">
            <article
              class="grid grid-cols-12 gap-4"
              v-for="blog in blogSidebarData?.slice(0, 2)"
              :key="blog.slug"
            >
              <div class="col-span-4">
                <NuxtImg
                  sizes="100"
                  :src="blog.thumbnail"
                  alt="blog image"
                  class="rounded-lg object-cover"
                />
              </div>
              <div class="col-span-8">
                <NuxtLink :to="blog._path">
                  <h5 class="mb-2 text-xl">A digital prescription for the banking...</h5>
                </NuxtLink>
                <p>{{ blog.date }}</p>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3 class="mb-8">Tags</h3>

          <div class="flex flex-wrap w-full gap-3">
            <div
              v-for="(tags, i) in uniqueTags"
              :key="i"
              :class="[slug == tags ? 'tagActive group' : '']"
            >
              <NuxtLink
                :to="'/tags/' + tags"
                class="btn-outline btn-sm group-[.tagActive]:bg-paragraph group-[.tagActive]:text-white dark:group-[.tagActive]:bg-primary dark:group-[.tagActive]:text-paragraph"
              >
                {{ tags }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
