<script setup>

defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <section
    class="relative max-md:pt-25 pb-20 max-md:pb-25 z-10 overflow-hidden"
  >
    <div class="container relative">
      <div
        class="absolute left-1/2 -bottom-[442px] -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden"
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
      <div
        class="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-[url('../images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
      ></div>
      <div class="text-center mx-auto">
        <h2
          class="mb-5 max-lg:text-[32px] text-[48px] font-semibold"
          v-html="title"
        ></h2>
        <p class="max-lg:mt-6 mb-12 max-w-[400px] mx-auto">
          By creating a custom Web design for your business, we can bring your
          vision to life.
        </p>
        <NuxtLink to="/services" class="btn"> Get Started Today </NuxtLink>

      </div>
    </div>
  </section>
</template>
