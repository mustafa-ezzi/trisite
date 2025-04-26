<script setup>
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
import Integration from "~/data/Integration.json";
const { IntegrationData } = Integration;
</script>

<template>
  <section
    class="relative bg-white dark:bg-dark-300 max-lg:overflow-hidden pt-[102px]"
  >
    <div class="container">
      <div class="mb-12">
        <p class="section-tagline max-lg:text-center">Top Integration</p>
        <div class="block max-lg:text-center lg:flex">
          <h2 class="max-lg:mb-5">Connect with your preferred tools.</h2>
          <p class="mx-auto max-w-[520px] lg:ml-auto">
            We assist startups in standing out with exceptional messaging that
            effectively engages their audience.
          </p>
        </div>
      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden"
        >
          <div
            class="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[442px] xl:w-[442px]"
          ></div>
          <div
            class="h-[330px] w-[330px] rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] xl:h-[442px] xl:w-[442px]"
          ></div>
          <div
            class="lg-ml-[170px] h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[442px] xl:w-[442px]"
          ></div>
        </div>

        <div
          class="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          <FadeUpOneByOneAnimation
            v-for="items in IntegrationData"
            class="h-full rounded border border-dashed border-gray-100 bg-white p-8 dark:border-borderColor-dark dark:bg-dark-200 max-lg:p-5"
            :key="items.id"
            :i="items.id"
          >
            <NuxtImg :src="items.image" alt="image" sizes="100" class="mb-6" />
            <h3 class="mb-2.5">{{ items.title }}</h3>
            <p class="mb-6">{{ items.details }}</p>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </div>
  </section>
</template>
