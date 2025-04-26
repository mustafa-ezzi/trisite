<script setup>
const props = defineProps({
  careerData: {
    type: Array,
  },
});
</script>

<template>
  <section class="pb-150 relative max-md:overflow-hidden">
    <div class="container relative">
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
      >
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
        ></div>
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"
        ></div>
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"
        ></div>
      </div>
      <div class="text-center mb-14">
        <p class="section-tagline">Open Positions</p>
        <h2>Become part of the dream team</h2>
      </div>

      <div class="[&>*:not(:last-child)]:mb-10">
        <div
          class="bg-white dark:bg-dark-200 rounded-medium p-2.5 max-w-[1050px] mx-auto shadow-nav"
          v-for="(career, i) in props.careerData"
          :key="i"
        >
          <div
            class="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColor-dark py-6 px-5 xl:px-8"
          >
            <div class="grid grid-cols-12 max-md:gap-y-5 items-center">
              <div class="col-span-full lg:col-span-4">
                <h3 class="text-xl">{{ career.title }}</h3>
              </div>
              <div class="col-span-full sm:col-span-full md:col-span-5 lg:col-span-3">
                <p class="font-jakarta_sans text-light">{{ career.shortDesc }}...</p>
              </div>

              <div
                class="col-span-full sm:col-span-9 md:col-span-4 lg:col-span-3 flex items-center gap-2"
              >
                <span
                  class="bg-primary py-1 px-4 rounded-medium border text-paragraph border-paragraph text-sm font-medium"
                >
                  {{ career.location }}
                </span>
                <span
                  class="bg-primary py-1 px-4 rounded-medium border text-paragraph border-paragraph text-sm font-medium"
                >
                  {{ career.jobType }}
                </span>
              </div>
              <div class="col-span-full sm:col-span-3 lg:col-span-2">
                <NuxtLink :to="career._path" class="btn-outline btn-sm">
                  Read More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
