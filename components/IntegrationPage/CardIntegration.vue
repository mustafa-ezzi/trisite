<script setup>
import IntegrationData from "~/data/IntegrationData.json";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
</script>

<template>
  <section class="pb-150 relative">
    <div class="container">
      <div class="relative z-10 max-w-[850px] mx-auto">
        <div
          class="absolute left-1/2 top-150 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-8">
          <div
            v-motion-fadeUpAnimation
            class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
            v-for="card in IntegrationData"
            :key="card.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 text-center"
            >
              <NuxtImg
                sizes="1000"
                :src="card.image"
                alt="value image"
                class="inline-block mb-8"
              />
              <h3 class="mb-2.5">{{ card.title }}</h3>
              <p>
                {{ card.details }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
