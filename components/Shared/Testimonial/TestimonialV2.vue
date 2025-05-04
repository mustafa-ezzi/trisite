<script setup>
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TestimonialList from "~/data/TestimonialList.json";
const { TestimonialData } = TestimonialList;
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
</script>

<template>
  <section class="pb-25 relative">
    <div class="container relative">
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>
        <div class="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-11">
          <FadeUpOneByOneAnimation
            :i="i"
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav"
            v-for="(testimonial, i) in TestimonialData"
            :key="testimonial.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-7"
            >
              <NuxtImg
                sizes="1000"
                :src="testimonial.logoLight"
                alt="service logo"
                class="inline-block dark:hidden mb-6"
              />
              <NuxtImg
                sizes="1000"
                :src="testimonial.logoDark"
                alt="service logo"
                class="hidden dark:inline-block mb-6"
              />
              <blockquote
                class="text-paragraph dark:text-white italic mb-5 leading-[1.75]"
              >
                “{{ testimonial.testimonial }}”
              </blockquote>
              <div class="mb-7">
                <FontAwesomeIcon
                  :icon="faStar"
                  class="fa-solid fa-star text-paragraph dark:text-white"
                />
                <FontAwesomeIcon
                  :icon="faStar"
                  class="fa-solid fa-star text-paragraph dark:text-white"
                />
                <FontAwesomeIcon
                  :icon="faStar"
                  class="fa-solid fa-star text-paragraph dark:text-white"
                />
                <FontAwesomeIcon
                  :icon="faStar"
                  class="fa-solid fa-star text-paragraph dark:text-white"
                />

                <FontAwesomeIcon
                  :icon="faStar"
                  class="fa-solid fa-star text-[#A7A7B4] dark:text-[#646463]"
                />
              </div>

              <div
                class="pt-7 flex items-center border-t border-dashed border-gray-100 dark:border-borderColor-dark"
              >
                <div class="block">
                  <h3 class="text-base font-semibold">
                    {{ testimonial.author.name }}
                  </h3>
                  <p
                    class="text-paragraph-light dark:text-[#A1A49D] font-jakarta_sans text-sm font-medium"
                  >
                    {{ testimonial.author.designation }}
                  </p>
                </div>
              </div>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </div>
  </section>
</template>
