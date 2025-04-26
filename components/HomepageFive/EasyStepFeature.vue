<script setup>
import easyStepPlan from "~/data/easyStepPlan.json";
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
</script>

<template>
  <section class="overflow-hidden relative pb-150">
    <div class="container relative z-10">
      <div class="text-center max-w-[550px] mx-auto mb-16">
        <p class="section-tagline">Easy Steps</p>
        <h2>
          What's the procedure for <br />
          its operation?
        </h2>
      </div>

      <div
        class="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center"
      >
        <div class="[&>*:not(:last-child)]:mb-8 max-md:order-1">
          <FadeUpOneByOneAnimation
            :i="i"
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-box"
            v-for="(plan, i) in easyStepPlan"
            :key="plan.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-8 max-md:p-4"
            >
              <div class="flex gap-10 max-lg:gap-5">
                <div
                  class="size-10 rounded-full relative flex items-center justify-center shrink-0 bg-primary after:absolute after:size-[30px] after:rounded-full after:border after:border-dashed after:border-borderColor-dark after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                >
                  <p
                    class="font-jakarta_sans font-bold text-paragraph dark:text-paragraph"
                  >
                    {{ plan.id }}
                  </p>
                </div>
                <div>
                  <h3 class="mb-2.5">{{ plan.title }}</h3>
                  <p>
                    {{ plan.description }}
                  </p>
                </div>
              </div>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
        <div
          v-motion-fadeFromRightAnimation
          class="relative flex max-md:justify-center justify-end items-center aspect-square"
        >
          <NuxtImg
            src="/images/home-5-img/hosting-steps.png"
            alt="company image"
            class="dark:hidden"
            sizes="1000"
          />
          <NuxtImg
            src="/images/home-5-img/hosting-steps-dark.png"
            alt="company image"
            class="hidden dark:inline-block"
            sizes="1000"
          />
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 after:absolute after:bg-primary-200/30 after:blur-[60px] after:w-[465px] after:h-[465px] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
