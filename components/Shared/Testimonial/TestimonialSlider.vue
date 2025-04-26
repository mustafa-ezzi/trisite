<script setup>
import SwiperSlider from "./SwiperSlider.vue";
</script>

<template>
  <section class="relative pt-150 pb-150 max-md:overflow-hidden">
    <div class="container relative">
      <div class="mx-auto max-w-[550px] text-center">
        <p class="section-tagline">Testimonials</p>
        <h2>What our customer&rsquo;s say about our company</h2>
      </div>
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-[37%] -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
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

        <SwiperSlider class="py-16" />
      </div>
    </div>
  </section>
</template>
