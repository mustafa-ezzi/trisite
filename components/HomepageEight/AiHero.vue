<script setup>
import { faX } from "@fortawesome/free-solid-svg-icons";
import AiHeroLightBgShape from "../Icons/ai/AiHeroLightBgShape.vue";
import AiHerodarkBgShape from "../Icons/ai/AiHerodarkBgShape.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// const lists = [
//   "No Credit Card Required",
//   "Free For 30 Day Trial.",
//   "Money Back Guaranty",
// ];

const modal = ref(false);
const openModal = () => {
  modal.value = !modal.value;
};
</script>

<template>
  <div class="modal-bg" v-if="modal">
    <div class="modal-align">
      <div class="modal-content">
        <span class="modal-close" @click="openModal">
          <FontAwesomeIcon :icon="faX" />
        </span>
        <div class="modal-video-align">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YE7VzlLtp-4?si=sqfM5aqWr4INIOlE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <section
    class="bg-white dark:bg-dark-300 overflow-hidden relative max-lg:pt-[160px] max-lg:pb-150 pt-[230px] pb-150 cursor-fancy"
  >
    <div
      class="absolute top-0 max-w-full left-1/2 -translate-x-1/2 dark:hidden"
    >
      <AiHeroLightBgShape />
    </div>
    <div
      class="absolute top-0 max-w-full left-1/2 -translate-x-1/2 hidden dark:block"
    >
      <AiHerodarkBgShape />
    </div>

    <div class="container">
      <div
        class="grid grid-cols-12 items-center relative gap-5 z-10 max-lg:gap-y-10"
      >
        <div
          class="col-span-12 text-center mb-15 lg:mb-25 relative"
          v-motion-fadeUpAnimation
        >
          <div class="relative">
            <img
              src="/images/home-8-img/hero-shape-code.png"
              alt="hero-shape"
              class="absolute top-1/2 -translate-y-1/2 max-md:hidden animate-floating"
            />
            <img
              src="/images/home-8-img/hero-shape-video.png"
              alt="hero-shape"
              class="absolute top-0 right-0 max-md:hidden animate-floating"
            />
            <img
              src="/images/home-8-img/hero-shape-photo.png"
              alt="hero-shape"
              class="absolute max-1xl:right-0 -right-25 bottom-0 max-md:hidden animate-floatingDown"
            />

            <p class="max-lg:mb-4 mb-8 font-medium uppercase"> Trisite Solutions</p>

            <h1 class="mb-12 max-md:mb-8">
              Easily create professional <br />
              websites.
            </h1>
            <p class="mb-12 max-md:mb-8 max-w-[590px] mx-auto">
              Create stunning websites in moments, filled with engaging content
              and images. Create impressive websites, with engaging
              content and visuals included.
            </p>
            <div
              class="mb-10 flex max-md:flex-col items-center justify-center gap-4 mx-auto"
            >
              <NuxtLink
                to="/price"
                class="bg-white dark:!bg-white dark:!text-paragraph btn-outline"
              >
                View plan and pricing
              </NuxtLink>
            </div>
          </div>

          <div class="">
            <img
              src="/images/footer-seperator.svg"
              alt="footer-seperator"
              class="dark:hidden w-full object-cover"
            />
            <img
              src="/images/footer-seperator-dark.svg"
              alt="footer-seperator"
              class="hidden dark:block w-full object-cover"
            />
          </div>

          <ul
            class="flex max-md:flex-col max-md:gap-5 items-center justify-between max-lg:mt-5 mt-20 max-w-[815px] mx-auto"
          >
            <li
              class="flex items-center gap-3.5"
              v-for="(list, i) in lists"
              :key="i"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="20"
                  height="20"
                  rx="10"
                  fill=""
                  class="fill-primary"
                ></rect>
                <path
                  d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                  fill=""
                  class="fill-paragraph"
                ></path>
              </svg>
              <p>{{ list }}</p>
            </li>
          </ul>
        </div>
        <div
          class="col-span-12 mx-auto relative"
          v-motion-fadeUpVisibleAnimation
        >
          <div class="relative z-10">
            <div
              class="absolute w-10/12 max-md:-top-32 max-lg:top-8 top-32 left-1/2 -translate-x-1/2 max-md:w-[330px] h-[330px] xl:h-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 dark:bg-primary-200/20 blur-[80px] -z-10"
            ></div>

            <div
              @click="openModal"
              class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative"
            >
              <NuxtImg
                src="/images/home-8-img/ai-hero.png"
                alt="service images"
                sizes="100000"
                class="rounded w-full"
              />
              <a
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <NuxtImg
                  sizes="1000"
                  src="/images/home-8-img/play.svg"
                  alt="play"
                  class="max-md:w-15 aspect-square"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
