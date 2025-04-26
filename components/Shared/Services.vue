<script setup>
import ServiceData from "~/data/ServiceData.json";
</script>

<template>
  <section class="bg-white dark:bg-dark-300 pb-150 relative sm:overflow-hidden">
    <div class="container" v-motion-fadeUpAnimation>
      <div class="mb-12">
        <p class="section-tagline max-lg:text-center">Our Services</p>
        <div class="block max-lg:text-center lg:flex">
          <h2 class="max-lg:mb-5">
            The world's best companies <br />
            trust aplio.
          </h2>
          <p class="max-w-[520px] mx-auto lg:ml-auto">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text. It's not Latin, though it looks like it
          </p>
        </div>
      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-sm:hidden"
        >
          <div
            class="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20"
          ></div>
          <div
            class="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"
          ></div>
          <div
            class="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20 lg-ml-[170px]"
          ></div>
        </div>

        <div
          v-motion-fadeUpVisibleAnimation
          class="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8"
        >
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
            v-for="service in ServiceData"
            :key="service.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
            >
              <NuxtImg
                sizes="1000"
                :src="service.iconLight"
                alt="service logo"
                class="inline-block dark:hidden mb-6"
              />
              <NuxtImg
                sizes="1000"
                :src="service.iconDark"
                alt="service logo"
                class="hidden dark:inline-block mb-6"
              />
              <NuxtLink :to="'/services/' + service.slug" class="block">
                <h3 class="mb-2.5">{{ service.title }}</h3>
              </NuxtLink>
              <p class="mb-6">
                {{ service.excerpt }}
              </p>
              <NuxtLink
                class="btn-outline btn-sm"
                :to="'/services/' + service.slug"
                >see more</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
