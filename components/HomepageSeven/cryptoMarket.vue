<script setup>
import { ref } from "vue";

const cryptoMarketItems = ref([
  {
    id: 1,
    title: "Cryptocurrency Market",
    description:
      'The concept of cryptocurrency is born when an anonymous individual or group known as Satoshi Nakamoto publishes the Bitcoin whitepaper titled "Bitcoin: A Peer to Peer Electronic Cash System."',
    link: "/sales",
    imgLight: "/images/home-7-img/crypto-market-1.png",
    imgDark: "/images/home-7-img/crypto-market-1-dark.png",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Bitcoin source",
    description:
      "Bitcoin was created by an unknown person or group of people using the pseudonym Satoshi Nakamoto.",
    link: "/finance-analyse",
    imgLight: "/images/home-7-img/crypto-market-2.png",
    imgDark: "/images/home-7-img/crypto-market-2-dark.png",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Crypto currencies",
    description:
      "Cryptocurrencies are digital or virtual currencies that use cryptography for security.",
    link: "/investment-bank",
    imgLight: "/images/home-7-img/crypto-market-3.png",
    imgDark: "/images/home-7-img/crypto-market-3-dark.png",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Market charts",
    description:
      "Market charts are representations of data that track the performance of financial or commodities over time.",
    link: "/investment-bank",
    imgLight: "/images/home-7-img/crypto-market-4.png",
    imgDark: "/images/home-7-img/crypto-market-4-dark.png",
    isFeatured: false,
  },
]);
</script>

<template>
  <div class="relative pb-150">
    <div class="container relative z-20">
      <div
        class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
      >
        <div
          class="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"
        ></div>
        <div
          class="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
        ></div>
        <div
          class="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
        ></div>
      </div>
      <div
        class="cryptoMarketItems grid grid-cols-12 gap-8 max-xs:gap-x-0 max-xs:gap-y-8 [&>*:nth-child(2)]:sm:col-span-12 [&>*:nth-child(2)]:lg:col-span-4"
      >
        <template v-for="item in cryptoMarketItems" :key="item.id">
          <div
            v-if="item.isFeatured"
            class="col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200"
          >
            <div
              class="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5"
            >
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 md:col-span-6 1xl:col-span-7 1xl:pr-20">
                  <h3 class="mb-8 leading-8">{{ item.title }}</h3>
                  <p class="mb-8">{{ item.description }}</p>
                  <NuxtLink
                    :to="'/services' + item.link"
                    class="btn-outline btn-sm"
                  >
                    Read More
                  </NuxtLink>
                </div>
                <div class="col-span-12 md:col-span-6 1xl:col-span-5">
                  <img
                    :src="item.imgLight"
                    :alt="item.title"
                    class="inline-block w-full rounded-lg dark:hidden max-lg:h-full"
                  />
                  <img
                    :src="item.imgDark"
                    :alt="item.title"
                    class="hidden w-full rounded-lg dark:inline-block max-lg:h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
          >
            <div
              class="flex h-full flex-col rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5"
            >
              <div class="cryptoMarketItems-image">
                <img
                  :src="item.imgLight"
                  :alt="item.title"
                  class="inline-block w-full rounded-lg dark:hidden"
                />
                <img
                  :src="item.imgDark"
                  :alt="item.title"
                  class="hidden w-full rounded-lg dark:inline-block"
                />
              </div>
              <div>
                <h3 class="mb-2.5 leading-8">{{ item.title }}</h3>
                <p class="mb-6">{{ item.description }}</p>
                <NuxtLink
                  :to="'/services' + item.link"
                  class="btn-sm btn-outline"
                >
                  Read More
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
