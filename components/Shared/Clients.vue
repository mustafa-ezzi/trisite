<script setup>
import Marquee from "./Marquee.vue";
</script>

<template>
  <section class="client pt-[140px] pb-[145px] max-lg:py-20">
    <div class="container overflow-hidden max-lg:!px-0">
      <div class="text-center max-w-[550px] px-[10px] mx-auto max-lg:px-2.5">
        <h2 class="mb-10">The world's best companies trust aplio.</h2>
        <p class="text-light mb-15">
          Trusted by thousands of companies across 50+ countries
        </p>
      </div>
      <Marquee />

      <div class="mt-15 flex items-center justify-center">
        <NuxtLink to="/contact" class="btn-outline">
          Start your Journey
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
