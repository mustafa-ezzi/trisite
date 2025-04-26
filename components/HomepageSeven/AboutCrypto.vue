<script setup>
import TabContent from "./TabContent.vue";
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 overflow-hidden relative pb-150 max-md:pb-20"
  >
    <div class="container relative z-10">
      <div
        class="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 max-md:items-center items-start"
      >
        <div
          class="relative flex max-md:justify-center justify-end items-center"
        >
          <NuxtImg
            v-motion-fadeUpVisibleAnimation
            src="images/home-7-img/aboutCrypto.png"
            alt="crypto image"
            sizes="1000"
            class="dark:hidden max-w-[250px] lg:max-w-[320px] xl:max-w-[420px]"
          />
          <NuxtImg
            v-motion-fadeUpVisibleAnimation
            src="images/home-7-img/aboutCrypto-dark.png"
            alt="crypto image"
            sizes="1000"
            class="hidden dark:inline-block max-w-[250px] lg:max-w-[320px] xl:max-w-[420px]"
          />
          <div
            v-motion-fadeFromLeftAnimation
            class="absolute left-0 right-auto bottom-8 top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]"
          >
            <NuxtImg
              src="images/home-7-img/aboutCrypto-shape.png"
              alt="crypto image"
              sizes="1000"
              class="dark:hidden"
            />
            <NuxtImg
              src="images/home-7-img/aboutCrypto-shape-dark.png"
              alt="crypto image"
              sizes="1000"
              class="hidden dark:inline-block"
            />
          </div>
        </div>

        <div>
          <p class="section-tagline">ABOUT</p>

          <h2 class="max-md:mb-4 mb-8">
            Crypto is the premier crowdsale service!
          </h2>
          <TabContent />
        </div>
      </div>
    </div>
  </section>
</template>
