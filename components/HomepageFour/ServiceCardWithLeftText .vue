<script setup>
import servicesCard from "~/data/servicesCard.json";
</script>

<template>
  <section class="bg-white pt-150 dark:bg-dark-300 relative sm:overflow-hidden">
    <div class="container">
      <div class="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
        <div class="col-span-12 md:col-span-4">
          <div class="max-md: mb-15">
            <p class="section-tagline">Our Services</p>

            <h2 class="mb-8">
              Recommended by 98%  <br />of SME, startup,  <br />and scale-up clients
            </h2>
            <p class="max-w-[520px] mb-8">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. It's not Latin, though it looks like it
            </p>
            <NuxtLink to="/services" class="btn"> Get More Services </NuxtLink>
          </div>
        </div>
        <div class="col-span-12 md:col-span-8 1xl:pl-[120px]">
          <div class="relative z-10">
            <div
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-sm:hidden"
            >
              <div
                class="w-[330px] h-[330px] xl:w-[350px] xl:h-[350px] blur-[145px] rounded-full bg-primary-200/20"
              ></div>
              <div
                class="w-[330px] h-[330px] xl:w-[350px] xl:h-[350px] blur-[145px] rounded-full bg-primary-200/20 lg-ml-[170px]"
              ></div>
              <div
                class="w-[330px] h-[330px] xl:w-[350px] xl:h-[350px] blur-[145px] rounded-full bg-primary-200/20 lg-ml-[170px]"
              ></div>
            </div>
            <div class="grid grid-cols-2 max-md:grid-cols-1 gap-8">
              <div
                class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
                v-for="service in servicesCard"
                :key="service.id"
              >
                <div
                  class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
                >
                  <NuxtImg
                    sizes="1000"
                    :src="service.svg"
                    alt="service logo"
                    class="inline-block dark:hidden mb-6"
                  />
                  <NuxtImg
                    sizes="1000"
                    :src="service.darkSvg"
                    alt="service logo"
                    class="hidden dark:inline-block mb-6"
                  />
                  <NuxtLink :to="'/services/' + service.slug" class="block">
                    <h3 class="mb-2.5">{{ service.title }}</h3>
                  </NuxtLink>
                  <p class="mb-6">
                    {{ service.description }}
                  </p>
                  <NuxtLink
                    :to="'/services/' + service.slug"
                    class="btn-outline btn-sm"
                  >
                    Read More
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
