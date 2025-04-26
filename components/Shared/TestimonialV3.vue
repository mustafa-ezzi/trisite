<script setup>
import TestimonialList from "~/data/TestimonialList.json";
import TestimonialBgSvg from "../Icons/TestimonialBgSvg.vue";
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
</script>

<template>
  <section class="pt-25 pb-25 relative overflow-hidden">
    <div class="container relative">
      <div class="text-center max-w-[550px] mx-auto mb-15">
        <p class="section-tagline">Testimonials</p>
        <h2>What our customer’s say about our company</h2>
      </div>
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10"
        >
          <TestimonialBgSvg />
        </div>
        <div
          class="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8"
        >
          <FadeUpOneByOneAnimation
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav"
            v-for="testiData in TestimonialList.TestimonialData"
            :key="testiData.id"
            :i="testiData.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-8 h-full"
            >
              <div class="pb-7 flex items-center">
                <NuxtImg
                  :src="testiData.author.image"
                  sizes="1000"
                  alt="avatar"
                  class="mr-4 rounded-full"
                />
                <div class="block">
                  <h3 class="text-base font-semibold">
                    {{ testiData.author.name }}
                  </h3>
                  <p
                    class="text-paragraph-light dark:text-[#A1A49D] font-jakarta_sans text-sm font-medium"
                  >
                    {{ testiData.author.designation }}
                  </p>
                </div>
              </div>

              <blockquote
                class="text-paragraph dark:text-white italic mb-7 leading-[1.75]"
              >
                {{ testiData.testimonial }}
              </blockquote>
              <div
                class="pt-7 flex justify-between items-center border-t border-dashed border-gray-100 dark:border-borderColor-dark"
              >
                <div>
                  <NuxtImg
                    :src="testiData.logoLight"
                    sizes="1000"
                    alt="image"
                    class="inline-block dark:hidden"
                  />
                  <NuxtImg
                    :src="testiData.logoDark"
                    sizes="1000"
                    alt="image"
                    class="hidden dark:inline-block"
                  />
                </div>
                <p class="text-paragraph-light text-sm">{{ testiData.date }}</p>
              </div>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </div>
  </section>
</template>
