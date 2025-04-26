<script setup>
import IntegrationData from "~/data/IntegrationData.json";
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
</script>

<template>
  <section class="pb-150 relative">
    <div class="container">
      <div class="text-center max-w-[620px] mx-auto mb-25">
        <p class="section-tagline">Top Integration</p>

        <h2 class="mb-8">Make productivity easier with 50+ Integrations</h2>
        <p>
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. It's not Latin though it looks like nothing.
        </p>
      </div>
      <div
        class="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 relative z-10 aos-init aos-animate"
      >
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10"
        >
          <BgWithCustomGradient />
        </div>

        <FadeUpOneByOneAnimation
          :i="i"
          class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
          v-for="(integration, i) in IntegrationData"
          :key="integration.id"
        >
          <div
            class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 text-center"
          >
            <NuxtImg
              sizes="1000"
              :src="integration.image"
              alt="value image"
              class="inline-block mb-8"
            />
            <h3 class="mb-2.5">{{ integration.title }}</h3>
            <p>
              {{ integration.details }}
            </p>
          </div>
        </FadeUpOneByOneAnimation>
      </div>
    </div>
  </section>
</template>
