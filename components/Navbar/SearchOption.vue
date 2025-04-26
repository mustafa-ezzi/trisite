<script setup>
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ServiceData from "~/data/ServiceData.json";
const sliceServicesData = ServiceData.slice(0, 3);
</script>
<template>
  <div
    class="bg-metal-900 fixed left-0 right-0 top-0 z-[1000000000000000] flex animate-bounce items-center justify-center"
  >
    <div class="relative h-auto w-full max-w-xl p-4">
      <div
        class="relative rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
      >
        <div
          class="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark"
        >
          <div
            class="bg flex items-center justify-between border-b border-dashed border-b-borderColor pb-5 dark:border-borderColor-dark"
          >
            <h3 class="text-paragraph dark:text-white">Search</h3>
            <button
              class="text-paragraph dark:text-white"
              @click="$emit('close')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="16"
                ></circle>
                <line
                  x1="160"
                  y1="96"
                  x2="96"
                  y2="160"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="160"
                  y1="160"
                  x2="96"
                  y2="96"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            </button>
          </div>
          <form class="mt-5">
            <div>
              <div class="flex">
                <div class="relative w-full">
                  <input
                    class="border- placeholder:text-metal-400 block w-full rounded-medium border border-borderColor bg-transparent px-5 py-2.5 text-paragraph outline-none transition-all duration-300 placeholder:text-paragraph focus:border-primary focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-white"
                    placeholder="Search Component"
                    type="text"
                    name="Search Value"
                  />
                </div>
              </div>
            </div>
          </form>
          <p class="mb-12 hidden pt-5 font-medium">
            <span>No recent searches</span>
          </p>
          <div class="pt-5">
            <h3 class="mb-1">Search Result</h3>
            <ul
              class="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100 dark:[&>*:not(:last-child)]:border-borderColor-dark"
            >
              <li
                class="group"
                v-for="service in sliceServicesData"
                :key="service.id"
              >
                <NuxtLink
                  class="flex items-center justify-between py-5 font-medium"
                  :to="'/services/' + service.slug"
                >
                  {{ service.title }}
                  <FontAwesomeIcon :icon="faAngleRight" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
