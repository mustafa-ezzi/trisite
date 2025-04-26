<script setup>
import CounterAnimation from "~/utils/CounterAnimation.vue";
import HostingBgInnerShapeSvg from "../Icons/hostingSvg/HostingBgInnerShapeSvg.vue";
import HostingCercleSvg from "../Icons/hostingSvg/HostingCercleSvg.vue";
</script>

<template>
  <section class="overflow-hidden relative pt-150 pb-25 max-md:pb-20">
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center">
        <div
          v-motion-fadeUpAnimation
          class="relative flex max-md:justify-center justify-end items-center aspect-square"
        >
          <NuxtImg
            src="/images/home-5-img/hosting-company.png"
            sizes="1000"
            alt="company image"
            class="dark:hidden"
          />
          <NuxtImg
            src="/images/home-5-img/hosting-company-dark.png"
            sizes="1000"
            alt="company image"
            class="hidden dark:inline-block"
          />
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 after:absolute after:bg-primary-200/30 after:blur-[60px] after:w-[400px] after:h-[400px] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
          >
            <HostingBgInnerShapeSvg />
          </div>
        </div>

        <div>
          <p class="section-tagline">COMPANY</p>

          <h2 class="max-md:mb-4 mb-8">Real solutions for real web Hosting</h2>
          <p class="max-md:mb-6 mb-11">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text nothing Before & After magazine.
          </p>
          <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
            <div class="flex items-center gap-8">
              <div class="relative size-[90px] shrink-0">
                <HostingCercleSvg />
                <h3
                  class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center"
                >
                  <span class="companyBar"><CounterAnimation :number="60" /></span>
                  %
                </h3>
              </div>
              <h3 class="text-xl leading-6">
                Customers <br />
                are Web Pros
              </h3>
            </div>

            <div class="flex items-center gap-8">
              <div class="relative size-[90px] shrink-0">
                <HostingCercleSvg />
                <h3
                  class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center"
                >
                  <span class="companyBar"><CounterAnimation :number="40" /></span>
                  %
                </h3>
              </div>
              <h3 class="text-xl leading-6">
                Websites <br />
                Currently Hosted
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
