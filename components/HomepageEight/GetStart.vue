<script setup>
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const aiStartData = ref([
  {
    id: 1,
    title: "Create a complete website with content and images.",
    description:
      "Whether you’re building a site from the ground up or giving an old one a makeover, our tools will elevate your process. Designed with flexibility and speed in mind, our platform helps you craft engaging digital experiences that look great and perform even better. From design to deployment, we’re here to support your creative journey—every step of the way.",   listItem: [
        { itemName: "Get straight to business and boost your sales." },
        { itemName: "We drive rapid growth through digital innovation." },
        { itemName: "We understand the needs of your business." },
        { itemName: "Create and launch " },
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: "User-friendly website ",
    description:
      "Tailor every element of your website with ease. Our intuitive interface empowers you to create a unique online presence.",
    imgLight: "/images/home-8-img/getstart-1.jpg",
    imgDark: "/images/home-8-img/getstart-1-dark.png",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Website Solutions for Modern Businesses",
    description: "We design and develop websites that captivate visitors and convert leads—with performance in mind.",
    imgLight: "/images/home-8-img/getstart-2.jpg",
    imgDark: "/images/home-8-img/getstart-2-dark.png",
    isFeatured: false,
  },
]);
</script>

<template>
  <div class="relative pb-150 max-lg:overflow-hidden">
    <div class="container relative">
      <div class="mb-12 text-center">
        <p class="section-tagline">Get Started</p>
        <h2 class="mb-8">Design your pixel-perfect website.</h2>
        <p class="mx-auto max-w-[520px]">
          We provide everything you need to create websites. Expand your
          customer base, save time and money, and increase sales.
        </p>
      </div>
    </div>
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
      <div class="grid grid-cols-12 items-center gap-y-8 md:gap-x-8">
        <div
          v-for="item in aiStartData"
          :key="item.id"
          :class="
            item.isFeatured
              ? 'col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200'
              : 'col-span-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 sm:col-span-6'
          "
        >
          <div
            class="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5"
          >
            <div
              v-if="item.isFeatured"
              class="grid grid-cols-12 items-center gap-6"
            >
              <div class="col-span-12 md:col-span-6 1xl:pr-20">
                <h3 class="mb-8 leading-8">{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="col-span-12 md:col-span-6">
                <ul>
                  <li
                    v-for="(listItem, index) in item.listItem"
                    :key="index"
                    class="mb-5 flex items-center gap-3.5 rounded-lg border border-dashed border-gray-100 p-2.5 last:mb-0 dark:border-borderColor-dark"
                  >
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-primary-100 dark:bg-dark-300"
                    >
                      <FontAwesomeIcon :icon="faCheck" />
                    </div>
                    <p>{{ listItem.itemName }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else>
              <div class="mb-6 text-center">
                <h3 class="mb-2.5 leading-8">{{ item.title }}</h3>
                <p class="mb-6">{{ item.description }}</p>
              </div>
              <div>
                <NuxtImg
                  :src="item.imgLight"
                  alt="image"
                  class="inline-block dark:hidden w-full rounded-lg"
                />
                <NuxtImg
                  :src="item.imgDark"
                  alt="image"
                  class="hidden dark:block w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
