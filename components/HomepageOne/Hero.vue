<script setup>
import HeroBgSvg1 from "../Icons/HeroBgSvg1.vue";
import HeroBgSvg2 from "../Icons/HeroBgSvg2.vue";
import HeroBgSvg3 from "../Icons/HeroBgSvg3.vue";
import HeroBgSvg4 from "../Icons/HeroBgSvg4.vue";
</script>

<template>
  <section
    class="hero bg-gray dark:bg-dark overflow-hidden relative max-lg:pt-[160px] max-lg:pb-25 pt-[230px] pb-[140px] max-mb:pb-[70px]"
  >
    <div class="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2 max-lg:hidden">
      <HeroBgSvg1 />
    </div>
    <div class="absolute bottom-0 left-0 w-full max-lg:hidden">
      <HeroBgSvg2 />
    </div>
    <div class="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2 lg:hidden">
      <HeroBgSvg3></HeroBgSvg3>
    </div>
    <div class="absolute bottom-0 left-0 w-full lg:hidden">
      <HeroBgSvg4 />
    </div>
    <div class="container">
      <div class="grid grid-cols-12 items-center relative z-10 max-lg:gap-y-10">
        <div class="col-span-12 md:col-span-6" v-motion-fadeUpSpringHero>
          <p class="max-lg:mb-4 mb-8 font-medium uppercase">50k+ Trusted Businesses</p>
          <h1 class="mb-12 max-md:mb-8">
            Make your
            <span
              class="font-playfair italic inline-block px-5 border-2 rounded-[88px] pt-0.5 pb-2.5 leading-none border-paragraph bg-[#D9D9D900] dark:border-[#F0F3EA]"
              >Finance</span
            >
            more efficient.
          </h1>
          <p class="mb-12 max-md:mb-8 max-w-[590px]">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text. It's not Latin, though it looks like it
          </p>
          <form>
            <div
              class="grid grid-cols-12 items-center border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColor pl-4 sm:pl-5 pe-1 pt-1 pb-1 max-w-[520px] w-full focus-within:border-primary dark:focus-within:border-primary duration-300 transition-all"
            >
              <input
                type="text"
                placeholder="Enter your email"
                class="col-span-8 xs:col-span-8 bg-transparent outline-none placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none leading-[1.75]"
              />
              <button class="btn col-span-4 xs:col-span-4 max-lg:!px-3 max-lg:!text-sm">
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div class="col-span-12 md:col-span-6">
          <div class="relative w-full min-h-[530px] max-md:min-h-[400px] lg:ml-15">
            <div
              class="absolute !left-1/2 !top-1/2 -translate-x-1/2 -translate-y-1/2"
              v-motion="{
                initial: {
                  y: 100,
                  opacity: 0,
                },
                enter: {
                  y: -130,
                  x: -110,
                  opacity: 1,
                  transition: {
                    delay: 200,
                    duration: 700,
                  },
                },
              }"
            >
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-circle.png"
                alt="hero Image"
                class="inline-block dark:hidden"
              />
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-circle-dark.png"
                alt="hero Image"
                class="hidden dark:inline-block"
              />
            </div>

            <div
              v-motion-slide-visible-once-bottom
              :duration="700"
              :delay="300"
              class="absolute max-lg:w-[220px] max-lg:aspect-video max-lg:!left-0 max-md:!top-5 !top-15 !-left-[40px] lg:!-top-[20px] parallax-effect"
            >
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-policy.png"
                alt="hero Image"
                class="inline-block dark:hidden"
              />
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-policy-dark.png"
                alt="hero Image"
                class="hidden dark:inline-block"
              />
            </div>
            <div
              class="absolute max-lg:w-28 max-lg:aspect-square max-md:!left-[50px] max-md:!bottom-[70px] !bottom-[150px] !left-[50px] lg:!bottom-0 lg:!left-[45px] xl:!left-[85px] parallax-effect"
              v-motion-slide-visible-once-bottom
              :duration="700"
              :delay="300"
            >
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-rating.png"
                alt="hero Image"
                class="inline-block dark:hidden"
              />
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-rating-dark.png"
                alt="hero Image"
                class="hidden dark:inline-block"
              />
            </div>
            <div
              class="absolute max-lg:w-[196px] !-right-5 !-bottom-0 max-md:!-bottom-5 max-md:!-right-5 lg:!not-sr-only-bottom-[45px] lg:right-0 xl:right-[30px] parallax-effect"
              v-motion-slide-visible-once-right
              :duration="900"
              :delay="300"
            >
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-chart.png"
                alt="hero Image"
                class="inline-block dark:hidden"
              />
              <NuxtImg
                sizes="1000"
                src="/images/hero/hero-chart-dark.png"
                alt="hero Image"
                class="hidden dark:inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
