<script setup>
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TestimonialList from "~/data/TestimonialList.json";
const { TestimonialData } = TestimonialList;
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 pb-150 mt-150 max-md:py-20 @@topSpacing relative"
  >
    <div class="container relative">
      <div class="text-center max-w-[550px] mx-auto mb-16">
        <p class="section-tagline">Testimonials</p>
        <h2>What our customer’s say about our company</h2>
      </div>
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2 flex max-lg:flex-col max-lg:item-center -z-10 max-md:hidden"
        >
          <div
            class="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20"
          ></div>
          <div
            class="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"
          ></div>
          <div
            class="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"
          ></div>
        </div>

        <div class="flex flex-wrap max-md:flex-col gap-6 gap-y-8 justify-center mb-12">
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 md:w-[calc(50%_-_20px)] lg:w-[calc(33.33%_-_20px)] shadow-nav"
            v-for="testimonial in TestimonialData.slice(0, 5)"
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
                {{ testimonial.testimonial }}
              </blockquote>
              <div class="mb-7">
                <FontAwesomeIcon :icon="faStar" />
                <FontAwesomeIcon :icon="faStar" />
                <FontAwesomeIcon :icon="faStar" />
                <FontAwesomeIcon :icon="faStar" />
              </div>

              <div
                class="pt-7 flex items-center border-t border-dashed border-gray-100 dark:border-borderColor-dark"
              >
                <img
                  :src="testimonial?.author?.image"
                  alt="avatar"
                  class="mr-4 rounded-full"
                />
                <div class="block">
                  <h3 class="text-base font-semibold">
                    {{ testimonial?.author?.name }}
                  </h3>
                  <p
                    class="text-paragraph-light dark:text-[#A1A49D] font-jakarta_sans text-sm font-medium"
                  >
                    {{ testimonial?.author?.designation }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <NuxtLink to="/contact" class="btn-outline"> Start Your jouney </NuxtLink>
        </div>
      </div>
      <div
        class="w-full h-[450px] absolute bottom-15 left-0 z-10 bg-gradient-to-b from-transparent to-white dark:to-dark-300 to-100%"
      ></div>
    </div>
  </section>
</template>
