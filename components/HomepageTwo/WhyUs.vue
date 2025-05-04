<script setup>
import ScalableSvg from "../Icons/WhyUsSvg/ScalableSvg.vue";
import ArtificialSvg from "../Icons/WhyUsSvg/ArtificialSvg.vue";
import OfflineSvg from "../Icons/WhyUsSvg/OfflineSvg.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <section class="relative pt-[200px] overflow-hidden">
    <div
      class="container relative z-10 max-md:[&>:nth-child(odd)]:pb-0 [&>:nth-child(odd)]:pb-25 lg:[&>:nth-child(odd)]:pb-150 max-md:[&>:nth-child(even)]:pt-10 [&>:nth-child(even)]:pt-25 lg:[&>:nth-child(even)]:pt-[200px] [&>*:nth-child(odd)]:after:absolute [&>*:nth-child(odd)]:after:h-0.5 [&>*:nth-child(odd)]:after:w-full [&>*:nth-child(odd)]:after:bg-[url('../images/payment/seperator.png')] dark:[&>*:nth-child(odd)]:after:bg-[url('../images/payment/seperator-dark.png')] [&>*:nth-child(odd)]:after:bottom-0 [&>*:nth-child(odd)]:after:left-1/2 [&>*:nth-child(odd)]:after:-translate-x-1/2 [&>*:nth-child(odd)]:after:bg-no-repeat [&>*:nth-child(odd)]:after:bg-center [&>*:nth-child(odd)]:after:bg-full"
    >
      <div
        class="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-10 gap-25 1xl:gap-x-24 items-end relative"
      >
        <div class="relative max-md:order-1" v-motion-fadeFromLeftAnimation>
          <NuxtImg
            sizes="1000"
            src="/images/payment/whyUs-bg.jpg"
            alt="hero Image"
            class="inline-block dark:hidden w-full rounded-medium shadow-nav"
          />
          <NuxtImg
            sizes="1000"
            src="/images/payment/whyUs-bg-dark.png"
            alt="hero Image"
            class="hidden dark:inline-block w-full rounded-medium shadow-nav"
          />
        </div>
        <div class="relative max-md:order-2">
          <p class="section-tagline">WHY CHOOSE US</p>

          <h2 class="max-lg:mt-5 mb-8">
            Control the flow of<br />
            money easily
          </h2>

          <ul
            class="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4"
          >
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center gap-6"
              >
                <ScalableSvg />
              </span>
              <span class="dark:text-white"> It’s scalable and secure </span>
            </li>
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center"
                ><ArtificialSvg />
              </span>
              <span class="dark:text-white"> Artificial Intelligence Feature </span>
            </li>
            <li class="flex items-center gap-x-2">
              <span
                class="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center"
              >
                <OfflineSvg />
              </span>

              <span class="dark:text-white"> Offline version available </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-25 1xl:gap-x-24 items-end">
        <div class="relative max-md:order-1 md:order-2">
          <p class="section-tagline">EXPLORE POSSIBILITIES</p>

          <h2 class="mb-8">
            Manage your money <br />
            with aplio.
          </h2>
          <p class="mb-11">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text nothing Before & After magazine.
          </p>
          <ul class="mb-14 [&>*:not(:last-child)]:mb-5 max-w-[490px]">
            <li
              class="flex items-center gap-x-5 border border-dashed border-gray-100 rounded dark:border-borderColor-dark p-2.5"
            >
              <span
                class="relative w-10 h-10 rounded-full bg-[#F3F8E8] dark:bg-dark-200 shadow-icon gap-6"
              >
                <FontAwesomeIcon
                  :icon="faCheck"
                  class="fa-solid fa-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                ></FontAwesomeIcon>
              </span>
              <span class="font-semibold font-jakarta_sans">
                It’s scalable and secure
              </span>
            </li>
            <li
              class="flex items-center gap-x-2 border border-dashed border-gray-100 rounded dark:border-borderColor-dark p-2.5"
            >
              <span
                class="relative w-10 h-10 rounded-full bg-[#F3F8E8] dark:bg-dark-200 shadow-icon gap-6"
              >
                <FontAwesomeIcon
                  :icon="faCheck"
                  class="fa-solid fa-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                ></FontAwesomeIcon>
              </span>
              <span class="font-semibold font-jakarta_sans"> Cash Flow Statements </span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn"> Get Started </NuxtLink>
        </div>
        <div class="relative max-md:order-2 md:order-2">
          <div class="max-lg:w-full lg:w-[420px] lg:h-[500px]" v-motion-fadeUpAnimation>
            <NuxtImg
              sizes="1000"
              src="/images/payment/explore.png"
              alt="explore"
              class="rounded-medium dark:hidden"
            />
            <NuxtImg
              sizes="1000"
              src="/images/payment/explore-dark.png"
              alt="explore"
              class="rounded-medium hidden dark:inline-block"
            />
          </div>

          <div
            v-motion-fadeFromRightAnimation
            class="rounded-medium absolute max-lg:-right-12 max-lg:max-w-[275px] max-lg:-top-20 lg:-top-[170px] lg:right-0"
          >
            <NuxtImg
              sizes="1000"
              src="/images/payment/summery.png"
              alt="summery"
              class="dark:hidden w-full"
            />
            <NuxtImg
              sizes="1000"
              src="/images/payment/summery-dark.png"
              alt="summery"
              class="hidden dark:inline-block w-full"
            />
          </div>
          <div
            v-motion-fadeFromRightAnimation2
            class="rounded-medium absolute max-lg:-right-12 max-lg:max-w-[275px] max-xs:top-[75px] max-lg:top-[80px] lg:top-[280px] lg:right-0"
          >
            <NuxtImg
              sizes="1000"
              src="/images/payment/payment.png"
              alt="summery"
              class="dark:hidden w-full"
            />
            <NuxtImg
              sizes="1000"
              src="/images/payment/payment-dark.png"
              alt="summery"
              class="hidden dark:inline-block w-full"
            />
          </div>
          <div
            v-motion-fadeFromRightAnimation3
            class="rounded-medium absolute max-lg:-right-12 max-lg:max-w-[275px] max-xs:top-[170px] max-lg:top-[220px] lg:top-[75px] lg:right-0"
          >
            <NuxtImg
              sizes="1000"
              src="/images/payment/expense.png"
              alt="summery"
              class="dark:hidden w-full"
            />
            <NuxtImg
              sizes="1000"
              src="/images/payment/expense-dark.png"
              alt="summery"
              class="w-full hidden dark:inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
