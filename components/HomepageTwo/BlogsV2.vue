<script setup>
import DotSvg from "../Icons/DotSvg.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
const { data } = useAsyncData("blog", () => queryContent("/blog").find());
const financeBlog = data.value?.filter((blog) => blog.tags === "Finance");
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 pt-150 max-md:pt-25 max-md:pb-0 relative"
  >
    <div
      class="absolute left-0 right-0 top-25 bg-[url('../images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1000px] md:hidden"
    ></div>
    <div class="container">
      <div class="mb-12">
        <p class="section-tagline">Financial blog tips and tricks</p>
        <div class="md:flex md:gap-10">
          <h2 class="md:shrink-0">Our recent news & insights</h2>
          <p class="max-md:mt-4 max-w-[600px] ml-auto">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text. It's not Latin though it looks like nothing.
          </p>
        </div>
      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>
        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          <article
            v-for="blogData in financeBlog?.slice(0, 3)"
            :key="blogData._id"
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-6 max-md:p-4"
            >
              <div>
                <NuxtLink
                  :to="'/tags/' + blogData.tags"
                  class="badge badge-primary"
                >
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
                <p class="mb-6">{{ blogData.description.slice(0, 39) }}</p>
                <NuxtLink :to="blogData._path" class="btn-outline btn-sm">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
