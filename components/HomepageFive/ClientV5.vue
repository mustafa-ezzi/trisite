<script setup>
import StarBgSvg from "../Icons/hostingSvg/StarBgSvg.vue";
import StarSvg from "../Icons/hostingSvg/StarSvg.vue";
import Marquee from "../Shared/Marquee.vue";

const starArray = ["1", "2", "3", "4", "5"];
</script>

<template>
  <section class="client max-lg:py-20">
    <div class="container overflow-hidden max-lg:!px-0">
      <div class="text-center px-[10px] mx-auto max-lg:px-2.5 mb-15">
        <h2 class="mb-12">
          Hosting solutions trusted by the owners <br />
          of 2,800,000 domains.
        </h2>
        <div class="flex mx-auto w-fit">
          <div class="flex items-center gap-4 max-md:flex-col">
            <div class="flex items-center gap-4">
              <p class="text-[12px] font-bold">Excellent</p>
              <ul class="flex gap-1.5">
                <li v-for="star in starArray" :key="star">
                  <div class="w-5 h-5 bg-[#219653] flex items-center justify-center">
                    <StarBgSvg />
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex items-center gap-4">
              <p class="flex items-center text-[12px] font-bold gap-1.5">
                <strong class="text-[12px] font-bold">436</strong>
                <span class="font-normal">reviews on</span>
              </p>
              <div class="flex items-center gap-1.5">
                <StarSvg />
                <p class="text-[12px] font-bold">Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative after:absolute before:absolute after:w-[120px] after:h-[40px] after:bg-gradient-to-r after:from-white after:from-[37.5%] after:top-1/2 after:-translate-y-1/2 after:-left-0.5 after:z-10 before:w-[120px] before:h-[40px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:-right-0.5 before:top-1/2 before:-translate-y-1/2 before:z-10 dark:after:from-dark-gradient dark:before:from-dark-gradient"
      >
        <!-- Marquee - Area -->
        <Marquee />
      </div>

      <div class="mt-15 flex items-center justify-center">
        <a href="#" class="btn-outline"> Start your Journey </a>
      </div>
    </div>
  </section>
</template>
