<script setup>
defineProps({
  subTitle: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <section class="hero overflow-hidden relative max-lg:pt-150 pt-[230px] pb-[60px] z-110">
    <div class="container" v-motion-fadeUpAnimation>
      <div class="max-w-[850px] mx-auto text-center">
        <p class="mb-4 font-medium uppercase">{{ subTitle }}</p>
        <h1 class="max-lg:mb-10 mb-10">
          {{ title }}
        </h1>
        <p class="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
