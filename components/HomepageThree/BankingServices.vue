<script setup>
import BankingServicesData from "~/data/BankingServicesData.json";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 py-150 max-md:py-25 relative max-md:overflow-hidden"
  >
    <div class="container">
      <div class="mb-12 text-center max-w-[475px] mx-auto">
        <p class="section-tagline">our Services</p>

        <h2>The world's best companies trust aplio.</h2>
      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>
        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          <div
            class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
            v-for="banking in BankingServicesData"
            :key="banking.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 text-center"
            >
              <NuxtImg
                sizes="1000"
                :src="banking.iconLight"
                alt="banking logo"
                class="inline-block dark:hidden mb-6"
              />
              <NuxtImg
                sizes="1000"
                :src="banking.iconDark"
                alt="banking logo"
                class="hidden dark:inline-block mb-6"
              />
              <h3 class="mb-2.5">{{ banking.title }}</h3>
              <p>
                {{ banking.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
