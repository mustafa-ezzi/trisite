<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import DotSvg from "../Icons/DotSvg.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const props = defineProps({
  blogs: {
    type: Array,
  },
});
</script>

<template>
  <div class="relative">
    <div
      class="container pb-150 max-md:pb-10 relative after:absolute after:w-full after:h-1 after:bottom-0 after:bg-[url('../images/blog/blog-seperator.svg')] dark:after:bg-[url('../images/blog/blog-seperator-dark.svg')] after:left-1/2 after:-translate-x-1/2 after:bg-no-repeat after:bg-center after:bg-full max-md:after:hidden"
    >
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-lg:max-w-full max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>

        <Swiper
          :slides-per-view="1"
          :modules="[Pagination, Autoplay]"
          :space-between="40"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 9500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide class="pb-16" v-for="(blog, i) in props.blogs" :key="i">
            <article
              class="bg-white dark:bg-dark-200 rounded-medium p-2.5 swiper-slide shadow-nav"
            >
              <div
                class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-6 max-md:p-4"
              >
                <div
                  class="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-5 gap-12 items-center"
                >
                  <NuxtImg
                    :src="blog.thumbnail"
                    alt="blog image"
                    class="w-full rounded-lg max-md:object-cover max-md:object-center max-md:h-[350px]"
                  />
                  <div>
                    <span class="badge">
                      <NuxtLink :to="'/tags/' + blog.tags">
                        {{ blog.tags }}
                      </NuxtLink>
                    </span>
                    <h3>
                      <NuxtLink
                        :to="blog._path"
                        class="mb-3 font-semibold leading-[1.33] text-2xl"
                      >
                        {{ blog.title }}
                      </NuxtLink>
                    </h3>
                    <div class="flex gap-x-2 items-center mb-4">
                      <p>{{ blog.author }}</p>
                      <span>
                        <DotSvg />
                      </span>
                      <p>{{ blog.date }}</p>
                    </div>
                    <p class="mb-6">
                      {{ blog.description }}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
