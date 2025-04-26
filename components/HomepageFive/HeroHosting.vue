<script setup>
import HostingBgSvg from "../Icons/hostingSvg/HostingBgSvg.vue";
</script>

<template>
  <section
    class="hero bg-white dark:bg-dark-300 overflow-hidden relative max-lg:pt-[160px] pt-[230px] pb-[280px] max-mb:pb-[70px]"
  >
    <div class="container">
      <div
        v-motion-fadeUpAnimation
        class="grid grid-cols-12 items-center relative z-[100] max-lg:gap-y-10 mb-[165px]"
      >
        <div class="col-span-12 md:col-span-7">
          <p class="max-lg:mb-4 mb-8 font-medium uppercase">BRING YOUR IDEAS TO LIFE</p>
          <h1 class="mb-12 max-md:mb-8">
            Fastest
            <span
              class="font-playfair italic inline-block px-5 border-2 rounded-[88px] pt-0.5 pb-2.5 leading-none border-paragraph bg-[#D9D9D900] dark:border-[#F0F3EA]"
            >
              Web Hosting
            </span>
            performance
          </h1>
          <p class="mb-12 max-md:mb-8 max-w-[590px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium
            doloremque laudantium, totam rem aperiam inventore.
          </p>
          <form @click.prevent>
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
        <div class="col-span-12 md:col-span-5">
          <div class="relative w-full">
            <NuxtImg
              src="/images/home-5-img/hosting-hero.png"
              alt="hero Image"
              class="inline-block dark:hidden"
              sizes="1000"
            />
            <NuxtImg
              src="/images/home-5-img/hosting-hero-dark.png"
              alt="hero Image"
              class="hidden dark:inline-block"
              sizes="1000"
            />
          </div>
        </div>
      </div>
      <div class="relative z-20" v-motion-fadeUpAnimation>
        <div
          class="absolute left-1/2 -translate-x-1/2 -z-10 max-md:top-[400px] top-[-500px]"
        >
          <HostingBgSvg />
        </div>
        <div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-box">
          <div
            class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-10 h-full max-lg:p-5 grid grid-cols-2 max-md:grid-cols-1"
          >
            <div class="max-md:mb-8">
              <h2>
                Find Your Perfect Domain Name <br />
                Your Business
              </h2>
            </div>
            <div class="h-full">
              <form @click.prevent>
                <div class="flex gap-8 max-lg:flex-col">
                  <div class="w-full">
                    <input
                      type="text"
                      placeholder="Name"
                      class="block w-full text-sm rounded-[48px] border border-borderColor py-2.5 h-[50px] dark:border-borderColor-dark px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all mb-2.5"
                    />
                    <ul class="flex items-center justify-between mx-5">
                      <li>.info</li>
                      <li>.com</li>
                      <li>.biz</li>
                      <li>.org</li>
                      <li>.io</li>
                    </ul>
                  </div>

                  <button class="btn shrink-0 h-[50px]">Search Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
