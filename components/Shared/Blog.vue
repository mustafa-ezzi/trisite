<script setup>
import DotSvg from "../Icons/DotSvg.vue";

const { data } = await useAsyncData("blog", () => queryContent("/blog").find());
const notFeaturedData = data.value.filter((blog) => blog.featured === true);
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 relative max-md:pb-20 overflow-hidden"
  >
    <div
      class="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[url('../images/service-bg.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1800px] md:hidden"
    ></div>
    <div class="container relative">
      <div class="text-center max-w-[550px] mx-auto mb-16">
        <p class="section-tagline">Financial blog tips and tricks</p>
        <h2>Our recent news & insights</h2>
      </div>
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-lg:flex-col -z-10 max-md:hidden"
        >
          <div
            class="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20"
          ></div>
          <div
            class="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"
          ></div>
          <div
            class="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"
          ></div>
        </div>

        <div
          class="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8"
        >
          <article
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
            v-for="blog in notFeaturedData.slice(0, 3)"
            :key="blog._id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-6 max-md:p-4"
            >
              <NuxtImg
                :src="blog.thumbnail"
                sizes="1000"
                alt="service logo"
                class="mb-6 w-full rounded-md"
              />
              <div>
                <NuxtLink :to="'/tags/' + blog.tags" class="badge">
                  Marketing
                </NuxtLink>
                <NuxtLink :to="blog._path" class="block">
                  <h3 class="mb-3 font-semibold leading-[1.33]">
                    {{ blog.title }}
                  </h3>
                </NuxtLink>
                <div class="flex gap-x-2 items-center mb-4">
                  <p>{{ blog.author }}</p>
                  <span>
                    <DotSvg />
                  </span>
                  <p>{{ blog.date }}</p>
                </div>
                <p>
                  {{ blog.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
