<script setup>
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";

const StepsData = [
  {
    id: 1,
    title: "Tell Us About Your Business",
    details:
      "We start by understanding your goals, target audience, and the unique needs of your business.",
  },
  {
    id: 2,
    title: "We Design Your Website",
    details:
      "Our team creates a custom design that reflects your brand identity, ensuring a professional and user-friendly experience.",
  },
  {
    id: 3,
    title: "We Build and Launch It for You",
    details:
      "Once approved, we develop and deploy your website—fully optimized, responsive, and ready to grow with your business.",
  },
];

</script>

<template>
  <section
    class="relative bg-white pb-150 dark:bg-dark-300 max-md:overflow-hidden max-md:pb-25"
  >
    <div class="container">
      <div class="mx-auto mb-12 text-center">
        <p class="section-tagline">How it works</p>

        <h2 class="mb-8">Your Vision, Our Expertise</h2>
        <p class="text-lg text-gray-600">Custom websites built to fit your business—no templates, no shortcuts</p>

      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
        >
          <div
            class="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
        </div>
        <div class="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          <FadeUpOneByOneAnimation
            v-for="items in StepsData"
            :key="items.id"
            :i="items.id"
            class="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
          >
            <div
              class="h-full rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark max-lg:p-5"
            >
              <div
                class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-box dark:bg-primary/30"
              >
                <div
                  class="flex h-15 w-15 items-center justify-center rounded-full border border-dashed border-white dark:border-borderColor-dark"
                >
                  <span
                    class="font-jakarta_sans text-[36px] font-bold leading-normal"
                    >{{ items.id }}</span
                  >
                </div>
              </div>
              <h3 class="mb-2.5">{{ items.title }}</h3>
              <p>{{ items.details }}</p>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </div>
  </section>
</template>
