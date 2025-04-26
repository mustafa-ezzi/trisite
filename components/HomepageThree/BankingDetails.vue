<template>
  <section class="relative z-10">
    <div class="container relative">
      <div
        class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
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
        class="max-md:mb-20 md:mb-32 max-md:mt-20 md:mt-25 relative max-md:h-[220px] max-md:w-full md:max-w-[650px] lg:max-w-[750px] xl:max-w-[1020px] mx-auto"
      >
        <figure v-motion-fadeUpAnimation>
          <NuxtImg
            src="/images/banking/banner.png"
            alt="about images"
            class="dark:hidden w-full max-md:h-full"
          />
          <NuxtImg
            src="/images/banking/banner-dark.png"
            alt="about images"
            class="hidden md:dark:inline-block w-full max-md:h-full"
          />
          <div
            class="absolute left-1/2 -translate-x-1/2 mx-auto bottom-[18px] sm:bottom-6 lg:bottom-7 xl:bottom-[38px] w-150 md:w-[250px] lg:w-[250px] xl:w-[308px]"
          >
            <NuxtImg
              src="/images/banking/banner-device.png"
              alt="about images"
              class="dark:hidden w-full"
            />
            <NuxtImg
              src="/images/banking/banner-device-dark.png"
              alt="about images"
              class="hidden dark:inline-block w-full"
            />
          </div>
        </figure>
        <div
          v-motion-fadeFromRightAnimation3
          class="absolute mx-auto -right-5 sm:-right-15 lg:-right-150 bottom-10 w-150 sm:w-[250px] lg:w-[300px] xl:w-[380px] aspect-auto"
        >
          <NuxtImg
            src="/images/banking/banner-shape-1.png"
            alt="about images"
            class="dark:hidden w-full"
          />
          <NuxtImg
            src="/images/banking/banner-shape-1-dark.png"
            alt="about images"
            class="hidden dark:inline-block w-full"
          />
        </div>
        <div
          v-motion-fadeFromLeftAnimation
          class="absolute mx-auto -left-5 sm:-left-15 lg:-left-150 top-10 w-150 sm:w-[250px] lg:w-[300px] xl:w-[380px] aspect-auto"
        >
          <NuxtImg
            src="/images/banking/banner-shape-2.png"
            alt="about images"
            class="dark:hidden w-full"
          />
          <NuxtImg
            src="/images/banking/banner-shape-2-dark.png"
            alt="about images"
            class="hidden dark:inline-block w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
