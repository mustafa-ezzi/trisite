<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import BlogSidebar from "~/components/BlogPage/BlogSidebar.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "~/components/Footer.vue";
import DotSvg from "~/components/Icons/DotSvg.vue";

const route = useRoute();
const slug = route.params.slug;
const { data } = await useAsyncData("blog", () => queryContent("/blog").find());
const tags = data.value?.filter((tag) => tag.tags === slug);

const search = ref("");
const getSearchInput = (value) => {
  search.value = value;
};

const searchedData = computed(() => {
  if (search.value) {
    return tags.filter((blog) =>
      blog.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }
  return tags;
});

useHead({
  title: `${slug}- Trisite Solution ${slug} Page`,
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <section class="mb-150 relative overflow-hidden">
    <PageHero sub-title="BLOG Category" title="Recent blogs created by aplio" />

    <div class="container relative z-10">
      <div
        class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
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

      <div class="grid grid-cols-12 max-md:gap-y-25 md:gap-5 lg:gap-8">
        <div
          class="max-lg:col-span-7 max-md:order-2 max-md:col-span-full lg:col-span-8 [&>*:not(:last-child)]:mb-8"
        >
          <h2 v-if="!searchedData?.length" class="text-center">
            No Blog Found
          </h2>
          <article
            v-for="(tag, i) in searchedData"
            :key="`${i}-tag`"
            class="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
          >
            <div
              class="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark max-md:px-4"
            >
              <div
                class="grid grid-cols-2 items-center gap-12 max-lg:grid-cols-1"
              >
                <div class="w-ful mb-6 h-full">
                  <NuxtImg
                    sizes="1000"
                    :src="tag.thumbnail"
                    alt="service logo"
                    class="aspect-square h-full w-full rounded-md object-cover object-center"
                  />
                </div>
                <div>
                  <NuxtLink :to="'/tags/' + tag.tags" class="badge">
                    {{ tag.tags }}
                  </NuxtLink>
                  <NuxtLink :to="tag._path" class="block">
                    <h3 class="mb-3 font-semibold leading-[1.33]">
                      {{ tag.title }}
                    </h3>
                  </NuxtLink>
                  <div class="mb-4 flex items-center gap-x-2">
                    <p>{{ tag.author }}</p>
                    <span>
                      <DotSvg />
                    </span>
                    <p>{{ tag.date }}</p>
                  </div>
                  <p>{{ tag.description }}</p>
                </div>
              </div>
            </div>
          </article>

          <div class="container" v-if="searchedData?.length">
            <ul class="flex items-center justify-center gap-2">
              <li class="group">
                <button
                  class="group flex h-10 w-10 items-center justify-center rounded-full border border-borderColor text-sm font-medium duration-300 dark:border-borderColor-dark disabled:opacity-7 cursor-not-allowed"
                >
                  <FontAwesomeIcon :icon="faArrowLeft" />
                </button>
              </li>

              <li class="group">
                <button
                  class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium bg-primary text-paragraph"
                >
                  1
                </button>
              </li>

              <li class="group">
                <button
                  class="group flex h-10 w-10 items-center justify-center rounded-full border border-borderColor text-sm font-medium duration-300 dark:border-borderColor-dark disabled:opacity-7 cursor-not-allowed"
                >
                  <FontAwesomeIcon :icon="faArrowRight" class="duration-300" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <BlogSidebar
          :slug="slug"
          :blogSidebarData="data"
          @getSearchInput="getSearchInput"
        />
      </div>
    </div>
  </section>

  <Footer />
</template>
