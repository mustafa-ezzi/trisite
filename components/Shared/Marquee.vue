<script setup>
import ClientData from "~/data/ClientData.json";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/node_modules/vue3-marquee-slider/dist/style.css";

const props = defineProps({
  showText: {
    type: Boolean,
  },
});
</script>
<template>
  <div class="container mx-auto">
    <p class="text-light mb-15 flex justify-center" v-if="showText">
      Trusted by thousands of companies across 50+ countries
    </p>
    <div
      class="relative after:absolute before:absolute after:w-[120px] after:h-[110px] after:bg-gradient-to-r after:from-white after:from-[37.5%] after:top-1/2 after:-translate-y-1/2 after:-left-0.5 after:z-10 before:w-[120px] before:h-[110px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:-right-0.5 before:top-1/2 before:-translate-y-1/2 before:z-10 dark:after:from-dark-gradient dark:before:from-dark-gradient"
    >
      <div class="absolute left-0 top-0 w-full max-lg:hidden">
        <NuxtImg
          sizes="1000"
          src="/images/clients/client-border.svg"
          alt="border"
          class="inline-block dark:hidden"
        />
        <NuxtImg
          sizes="1000"
          src="/images/clients/client-border-dark.svg"
          alt="border"
          class="hidden dark:inline-block"
        />
      </div>
      <VueMarqueeSlider
        id="marquee-slider-loop"
        :speed="30000"
        :pause="true"
        class="marquee marquee-items"
      >
        <div
          v-for="(client, index) in ClientData"
          :key="client.id"
          class="marquee-content-list"
        >
          <NuxtImg
            sizes="1000"
            :src="client.imageLight"
            :key="index"
            alt="group"
            class="inline-block dark:hidden"
          />
          <NuxtImg
            sizes="1000"
            :src="client.imageDark"
            :key="index"
            alt="group"
            class="hidden dark:inline-block"
          />
        </div>
      </VueMarqueeSlider>
    </div>
  </div>
</template>
