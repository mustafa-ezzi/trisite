<script setup>
import CoreFeatures from "~/data/CoreFeatures.json";
const coreFeature1 = CoreFeatures.slice(0, 3);
const coreFeature2 = CoreFeatures.slice(3);
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
</script>

<template>
  <section class="pt-150 relative">
    <div
      class="absolute left-0 right-0 top-150 bg-[url('../images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1800px] md:hidden"
    ></div>
    <div class="container">
      <div class="mb-12 text-center max-w-[575px] mx-auto">
        <p class="section-tagline">Core Features</p>

        <h2>Features that help you run your business</h2>
      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>

        <div
          class="relative flex flex-col [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:overflow-hidden [&>*:not(:last-child)]:after:content-[url('../images/payment/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('../images/payment/seperator-dark.png')] max-md:[&>*:not(:last-child)]:after:hidden"
        >
          <div
            class="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:content-[url('../images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('../images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden"
          >
            <div
              class="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('../images/payment/coreborder-right.svg')] lg:dark:after:content-[url('../images/payment/coreborder-right-dark.svg')] group max-lg:after:content-[url('../images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('../images/payment/coreborder-bottom-mobile-dark.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto"
              v-for="future in coreFeature1"
              :key="future.id"
            >
              <NuxtImg
                sizes="1000"
                :src="future.iconLight"
                alt="payment logo"
                class="inline-block dark:hidden mb-6"
              />
              <NuxtImg
                sizes="1000"
                :src="future.iconDark"
                alt="payment logo"
                class="hidden dark:inline-block mb-6"
              />
              <h3
                class="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity"
              >
                {{ future.title }}
              </h3>
              <p>
                {{ future.desc }}
              </p>
            </div>
          </div>
          <div
            class="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:content-[url('../images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('../images/payment/coreborder-right-dark.svg')] [&>*:nth-row(n+2)]:mb-32 max-lg:[&>*:nth-child(3n+1)]:before:hidden"
          >
            <div
              class="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('../images/payment/coreborder-right.svg')] lg:dark:after:content-[url('../images/payment/coreborder-right-dark.svg')] group max-lg:after:content-[url('../images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('../images/payment/coreborder-bottom-mobile-dark.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto"
              v-for="future in coreFeature2"
              :key="future.id"
            >
              <NuxtImg
                sizes="1000"
                :src="future.iconLight"
                alt="payment logo"
                class="inline-block dark:hidden mb-6"
              />
              <NuxtImg
                sizes="1000"
                :src="future.iconDark"
                alt="payment logo"
                class="hidden dark:inline-block mb-6"
              />
              <h3
                class="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity"
              >
                {{ future.title }}
              </h3>
              <p>
                {{ future.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
