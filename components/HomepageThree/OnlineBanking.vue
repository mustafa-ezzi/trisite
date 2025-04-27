<script setup>
import ScalableSvg from "../Icons/WhyUsSvg/ScalableSvg.vue";
import ArtificialSvg from "../Icons/WhyUsSvg/ArtificialSvg.vue";
import OfflineSvg from "../Icons/WhyUsSvg/OfflineSvg.vue";

const props = defineProps({
  subTitle: {
    type: String,
    default: "ABOUT ONLINE BANKING",
  },
  title: {
    type: String,
    default: "Incredibly easy and hassle-free online banking",
  },
});
</script>

<template>
  <section class="overflow-hidden relative max-md:pb-20 pb-150">
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center">
        <div class="relative flex max-md:justify-center justify-end items-center">
          <figure v-motion-fadeUpAnimation>
            <img sizes="1000" src="../../assets/onlinePayment-white.png" alt="banking image"
              class="dark:hidden max-w-[250px] lg:max-w-[320px] xl:max-w-[420px]" />
            <img sizes="1000" src="../../assets/onlinePayment.jpg" alt="banking image"
              class="hidden dark:inline-block max-w-[250px] lg:max-w-[320px] xl:max-w-[420px]" />
          </figure>
          <div v-motion-fadeFromLeftAnimation
            class="absolute left-0 right-auto bottom-8 top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]">
            <img sizes="1000" src="../../assets/onlinePayment-shape.png" alt="banking image" class="dark:hidden" />
            <img sizes="1000" src="../../assets/onlinePayment-shape-dark.png" alt="banking image"
              class="hidden dark:inline-block" />
          </div>
        </div>

        <div>
          <p class="section-tagline">{{ subTitle }}</p>

          <h2 class="max-md:mb-4 mb-8">
            {{ title }}
          </h2>
          <p class="max-md:mb-6 mb-11">
            At Trisite, our work is built on trust, innovation, and a commitment to excellence. These values guide every
            project we create and every client we serve.


          </p>
          <ul class="max-md:mb-0 mb-14 [&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center gap-6">
                <ScalableSvg />
              </span>
              <span class="dark:text-white"> Custom Website Development
              </span>
            </li>
            <li class="flex items-center gap-x-2">
              <span class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center">
                <ArtificialSvg />
              </span>
              <span class="dark:text-white"> E-commerce Solutions </span>
            </li>
            <li class="flex items-center gap-x-2">
              <span class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center">
                <OfflineSvg />
              </span>

              <span class="dark:text-white"> Web Application Development </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
