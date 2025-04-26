<script setup>
import AnalyticsHeroBgSvg from "../Icons/AnalyticsHeroBgSvg.vue";
import AnalyticsHeroMobileBgSvg from "../Icons/AnalyticsHeroMobileBgSvg.vue";
</script>

<template>
  <section
    class="hero analytics-hero bg-white dark:bg-dark-300 overflow-hidden relative max-lg:pt-[160px] max-lg:pb-25 pt-[230px]"
  >
    <div
      class="absolute top-0 left-0 w-full h-full max-h-[400px] bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-[#F3FDD9] from-[-2.27%] to-[#F3FDD9]/10 to{-48.41%} dark:hidden"
    ></div>

    <div class="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2 max-lg:hidden">
      <AnalyticsHeroBgSvg />
    </div>

    <div class="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2 lg:hidden">
      <AnalyticsHeroMobileBgSvg />
    </div>

    <div class="container">
      <div
        v-motion-fadeUpAnimation
        class="grid grid-cols-12 items-center relative gap-5 z-10 max-lg:gap-y-10"
      >
        <div class="col-span-12 text-center mb-15 lg:mb-20">
          <p class="max-lg:mb-4 mb-8 font-medium uppercase">50k+ Trusted Businesses</p>
          <h1 class="mb-12 max-md:mb-8">
            Presenting the forefront of <br />
            product analysis.
          </h1>
          <p class="mb-12 max-md:mb-8 max-w-[590px] mx-auto">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text. It's not Latin, though it looks like it
          </p>
          <div class="flex items-center justify-center gap-4 mx-auto">
            <NuxtLink to="/contact" class="btn"> Get Started </NuxtLink>
            <NuxtLink to="/request-demo" class="btn-outline"> Get a Demo </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
