<script setup>
import ArtificialSvg from "../Icons/WhyUsSvg/ArtificialSvg.vue";
import OfflineSvg from "../Icons/WhyUsSvg/OfflineSvg.vue";
import ScalableSvg from "../Icons/WhyUsSvg/ScalableSvg.vue";
</script>

<template>
  <section class="relative py-150 max-md:mt-15">
    <div class="container relative z-10">
      <div
        class="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 gap-25 1xl:gap-x-24 items-end relative"
      >
      <div class="relative max-md:order-1" v-motion-fadeFromLeftAnimation>
          <NuxtImg
            sizes="1000"
            src="/images/payment/whyUs-bg.jpg"
            alt="hero Image"
            class="inline-block dark:hidden w-full rounded-medium shadow-nav"
          />
          <NuxtImg
            sizes="1000"
            src="/images/payment/whyUs-bg-dark.png"
            alt="hero Image"
            class="hidden dark:inline-block w-full rounded-medium shadow-nav"
          />
        </div>
        <div class="relative">
          <p class="section-tagline">WHY CHOOSE US</p>

          <h2 class="mb-8">
            Control the flow of<br />
            money easily
          </h2>
          <ul class="mb-14 [&>*:not(:last-child)]:mb-6">
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center gap-6"
              >
                <ScalableSvg />
              </span>
              <span class="dark:text-white"> It’s scalable and secure </span>
            </li>
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center"
              >
                <ArtificialSvg />
              </span>
              <span class="dark:text-white"> Artificial Intelligence Feature </span>
            </li>
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center"
              >
                <OfflineSvg />
              </span>

              <span class="dark:text-white"> Offline version available </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
