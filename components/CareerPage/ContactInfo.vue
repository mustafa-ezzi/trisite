<script setup>
import EmailSvg from "../Icons/EmailSvg.vue";
import HomeSvg from "../Icons/HomeSvg.vue";
import TelePhoneSvg from "../Icons/TelePhoneSvg.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
</script>

<template>
  <section class="pb-150 relative">
    <div class="container">
      <div class="relative z-10">
        <div
          class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>
        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          <div
            v-motion-slide-visible-once-bottom
            :duration="700"
            :delay="200"
            class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 text-center"
            >
              <HomeSvg />
              <h3 class="mb-2.5">Our Address</h3>
              <p>Anda More, Randi khana chawrangi, Karachi, Pakistan</p>
            </div>
          </div>

          <div
            v-motion-slide-visible-once-bottom
            :duration="700"
            :delay="400"
            class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 text-center"
            >
              <EmailSvg />
              <h3 class="mb-2.5">Email Us</h3>
              <a href="Website@trisitesolutions.com"> Website@trisitesolutions.com </a>
            </div>
          </div>

          <div
            v-motion-slide-visible-once-bottom
            :duration="700"
            :delay="800"
            class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 text-center"
            >
              <TelePhoneSvg />
              <h3 class="mb-2.5">Call Us</h3>
              <a href="tel:+92 335 4524042">+92 335 4524042</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
