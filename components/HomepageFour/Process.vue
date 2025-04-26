<script setup>
import processData from "~/data/processData.json";
</script>

<template>
  <section class="relative">
    <div class="container">
      <div
        class="text-center max-w-[620px] mx-auto mb-25"
        v-motion-fadeUpVisibleAnimation
      >
        <p class="section-tagline">Process</p>

        <h2 class="mb-8">
          Follow the minimalistic steps <br />
          of installation
        </h2>
      </div>
      <div v-motion-fadeUpVisibleAnimation>
        <div
          class="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-25 md:gap-5 lg:gap-25 relative z-10 [&>*:not(:last-child)]:after:absolute md:[&>*:not(:last-child)]:after:-right-4 lg:[&>*:not(:last-child)]:after:-right-[60px] md:[&>*:not(:last-child)]:after:top-1/2 md:[&>*:not(:last-child)]:after:-transform-y-1/2 [&>*:not(:last-child)]:after:w-10 [&>*:not(:last-child)]:after:h-2.5 [&>*:not(:last-child)]:after:bg-no-repeat [&>*:not(:last-child)]:after:bg-center [&>*:not(:last-child)]:after:bg-[url('/public/images/home-4-img/account-right-arrow.png')] dark:[&>*:not(:last-child)]:after:bg-[url('/public/images/home-4-img/account-right-arrow-dark.png')] max-md:[&>*:not(:last-child)]:after:rotate-90 max-md:[&>*:not(:last-child)]:after:left-1/2 max-md:[&>*:not(:last-child)]:after:-translate-x-1/2 max-md:[&>*:not(:last-child)]:after:-bottom-[60px] mb-15"
        >
          <div
            v-for="process in processData"
            :key="process.id"
            class="flex items-center gap-6 md:gap-2.5 lg:gap-6 relative"
          >
            <div
              class="bg-white dark:bg-dark-200 rounded-full max-lg:p-2 p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500 shrink-0"
            >
              <div
                class="border border-dashed rounded-full border-gray-100 dark:border-borderColor-dark p-6 h-full max-lg:p-5"
              >
                <NuxtImg
                  sizes="1000"
                  :src="process.lightImg"
                  alt="account icon"
                  class="dark:hidden"
                />
                <NuxtImg
                  sizes="1000"
                  :src="process.darkImg"
                  alt="account icon"
                  class="hidden dark:inline-block"
                />
              </div>
            </div>
            <h3 class="leading-8 mr-3">
              {{ process.title }}
            </h3>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/contact" class="btn-outline">
            Try it for 30 days, no credit card required
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
