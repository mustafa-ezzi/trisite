<template>
  <section
    v-motion-fadeUpAnimation
    class="hero relative lg:pt-[260px] max-lg:pt-[160px] pb-[140px] overflow-hidden lg:overflow-visible"
  >
    <div class="container">
      <div class="grid grid-cols-12 gap-5 items-end relative z-10">
        <div class="max-md:col-span-full md:col-span-7 max-md:mb-[350px]">
          <p class="mb-4 font-medium uppercase">Digital Payment Solution</p>
          <h1 class="mb-10">
            Smart
            <span
              class="font-playfair italic inline-block px-5 pt-0.5 pb-2.5 leading-none"
            >
              Payment
            </span>
            solution for your Business
          </h1>
          <p class="mb-12 max-w-[590px]">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text. It's not Latin, though it looks like it
          </p>
          <div class="flex items-center gap-4">
            <NuxtLink to="/contact">
              <a class="btn"> Get Started </a>
            </NuxtLink>
            <NuxtLink to="/request-demo">
              <a class="btn-outline"> Get a Demo </a>
            </NuxtLink>
          </div>
        </div>

        <div class="max-md:col-span-full md:col-span-5 relative md:z-10">
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden"
          >
            <div
              class="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
            ></div>
            <div
              class="max-lg:w-[335px] max-1xl:h-[335px] max-1xl:blur-[80px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] -mt-150 max-md:ml-0 blur-[145px]"
            ></div>
            <div
              class="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"
            ></div>
          </div>

          <div class="w-full h-full">
            <div class="relative">
              <NuxtImg
                sizes="1000"
                src="/images/payment/payment-hero.png"
                alt="hero Image"
                class="inline-block dark:hidden w-full rounded-medium shadow-nav"
              />
              <NuxtImg
                sizes="1000"
                src="/images/payment/payment-hero-dark.png"
                alt="hero Image"
                class="hidden dark:inline-block w-full rounded-medium shadow-nav"
              />
              <div
                class="absolute left-1/2 -translate-x-1/2 bottom-2.5 max-md:w-[285px] max-lg:w-4/5 lg:w-[285px] lg:aspect-video"
              >
                <NuxtImg
                  sizes="1000"
                  src="/images/payment/payment-hero-device.png"
                  alt="hero Image"
                  class="inline-block dark:hidden rounded-t-medium w-full"
                />
                <NuxtImg
                  sizes="1000"
                  src="/images/payment/payment-hero-device-dark.png"
                  alt="hero Image"
                  class="hidden dark:inline-block rounded-t-medium w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
