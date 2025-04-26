<script setup>
import { faAngleRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ServiceData from "~/data/ServiceData.json";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});


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
    class="pt-[200px] pb-150 max-md:pt-25 relative max-md:overflow-hidden max-md:pb-20"
  >
    <div class="container relative z-10">
      <div
        class="absolute left-1/2 top-52 -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden"
      >
        <div
          class="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20"
        ></div>
        <div
          class="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"
        ></div>
        <div
          class="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20 lg-ml-[170px]"
        ></div>
      </div>

      <div class="grid grid-cols-12 gap-y-15 md:gap-8 lg:gap-16 auto-rows-max">
        <div
          class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav max-md:hidden md:col-span-6 lg:col-span-4 self-start md:sticky md:top-20 max-md:static"
        >
          <div
            class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark pt-9 px-10 pb-7"
          >
            <h3 class="mb-3">Categories</h3>
            <ul
              class="[&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100 dark:[&>*:not(:last-child)]:border-borderColor-dark [&>*:not(:last-child)]:border-b"
            >
              <li
                class="group"
                :class="service.slug === data?.slug ? 'tabActive' : ''"
                v-for="service in ServiceData"
                :key="service.id"
              >
                <NuxtLink
                  class="flex items-center justify-between py-5 font-medium relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                  :to="'/services/' + service.slug"
                >
                  {{ service.title }}
                  <FontAwesomeIcon
                    :icon="faAngleRight"
                    class="hidden group-[.tabActive]:block"
                  ></FontAwesomeIcon>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="relative max-md:col-span-full md:col-span-6 lg:col-span-8">
          <div
            class="relative singlePage max-md:mt-20"
            v-motion-fadeUpAnimation
          >
            <h2 class="capitalize">{{ data?.slug }}</h2>
            <p>
              {{ data?.serviceDetails }}
              <br />
              <br />

              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu
              lacus non ornare. Porttitor in rhoncus magna augue adipiscing.
            </p>
            <div
              class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav"
            >
              <NuxtImg
                sizes="1000"
                :src="data?.featureImage"
                alt="service images"
                class="rounded w-full"
              />
            </div>

            <h3>What to Expect</h3>
            <p>
              {{ data?.serviceExpectation }}
              <br />
              <br />
              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu
              lacus non ornare. Porttitor in rhoncus magna augue adipiscing.
            </p>
            <ul>
              <li v-for="(list, i) in data?.serviceExpectationList" :key="i">
                {{ list.item }}
              </li>
            </ul>

            <div
              @click="openModal"
              class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative"
            >
              <NuxtImg
                sizes="1000"
                src="/images/services/video-bg.png"
                alt="service images"
                class="rounded w-full"
              />
              <a
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <NuxtImg
                  sizes="1000"
                  src="/images/services/play.svg"
                  alt="play"
                  class="max-md:w-15 aspect-square"
                />
              </a>
            </div>

            <h3>Qualifications & Requirements</h3>
            <p>
              {{ data?.serviceExpectation }}
              <br />
              <br />
              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu
              lacus non ornare. Porttitor in rhoncus magna augue adipiscing.
            </p>
            <ul>
              <li v-for="(list, i) in data?.serviceQualificationsList" :key="i">
                {{ list.item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
