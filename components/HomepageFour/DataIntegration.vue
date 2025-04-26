<template>
  <section
    class="container grid grid-cols-12 items-center relative gap-5 z-10 max-lg:gap-y-10 pb-[140px] max-mb:pb-[70px]"
  >
    <div class="col-span-8 h-full" v-motion-fadeUpAnimation>
      <NuxtImg
        sizes="1000"
        src="/images/integration/analytics-hero-light.png"
        alt="analytics-hero-light"
        class="inline-block dark:hidden w-full rounded-medium h-full shadow-nav"
      />
      <NuxtImg
        sizes="1000"
        src="/images/integration/analytics-hero-dark.png"
        alt="analytics-hero-light"
        class="hidden dark:inline-block w-full rounded-medium h-full shadow-nav"
      />
    </div>
    <div class="col-span-4">
      <figure v-motion-fadeUpAnimation>
        <NuxtImg
          sizes="1000"
          src="/images/integration/analytics-hero-light-2.png"
          alt="analytics-hero-light"
          class="inline-block dark:hidden w-full rounded-medium mb-5 shadow-nav"
        />
        <NuxtImg
          sizes="1000"
          src="/images/integration/analytics-hero-dark-2.png"
          alt="analytics-hero-light"
          class="hidden dark:inline-block w-full rounded-medium mb-5 shadow-nav"
        />
      </figure>
      <figure v-motion-fadeUpVisibleAnimation>
        <NuxtImg
          sizes="1000"
          src="/images/integration/analytics-hero-light-3.png"
          alt="analytics-hero-light"
          class="inline-block dark:hidden w-full rounded-medium shadow-nav"
        />
        <NuxtImg
          sizes="1000"
          src="/images/integration/analytics-hero-dark-3.png"
          alt="analytics-hero-light"
          class="hidden dark:inline-block w-full rounded-medium shadow-nav"
        />
      </figure>
    </div>
  </section>
</template>
