<script setup lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { onMounted } from "vue";

interface PathConfig {
  id: string;
  path: string;
}

const paths: PathConfig[] = [
  { id: "#rect", path: "#path" },
  { id: "#rect-2", path: "#path-2" },
  { id: "#rect-3", path: "#path-3" },
  { id: "#rect-4", path: "#path-4" },
  { id: "#rect-5", path: "#path-5" },
  { id: "#rect-6", path: "#path-6" },
];

const nuxtApp = useNuxtApp();

const initializeAnimations = () => {
  if (import.meta.client) {
    gsap.registerPlugin(MotionPathPlugin);

    paths.forEach(({ id, path }) => {
      const element = document.querySelector(id);
      const pathElement = document.querySelector(path);

      if (element && pathElement) {
        gsap.set(id, { opacity: 1 });
        gsap.from(id, {
          motionPath: {
            path,
            autoRotate: true,
            align: path,
            alignOrigin: [0.5, 0.5],
          },
          duration: 2,
          ease: "none",
          repeat: -1,
          repeatDelay: 0,
        });
      }
    });
  }
};

onMounted(() => {
  if (nuxtApp.isHydrating) {
    nextTick(() => {
      initializeAnimations();
    });
  } else {
    initializeAnimations();
  }
});
</script>

<template>
  <section>
    <div class="max-w-[1068px] mx-auto -mt-15 max-md:hidden relative -z-10">
      <div class="relative max-lg:py-25 max-xl:py-150 py-[175px] w-full z-10">
        <div
          class="relative flex flex-row align-center justify-center mx-auto w-150 h-150 rounded-full bg-white dark:bg-dark-200 shadow-nav"
        >
          <div
            class="flex flex-row align-center justify-center mx-auto absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[122px] h-[122px] rounded-full bg-primary-100 dark:bg-[#2B2D2A]"
          >
            <span
              class="inline-block text-primary text-[30px] font-semibold py-[46px] px-[25px] leading-none"
            >
              aplio
            </span>
          </div>
        </div>
        <div
          class="w-1/2 h-full block absolute top-0 left-0 bottom-auto right-auto"
        >
          <div
            class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 xl:w-[120px] aspect-square rounded-full absolute top-0 left-0 right-auto bottom-auto"
          >
            <div
              class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full 1xl:p-2.5"
            >
              <NuxtImg
                sizes="1000"
                src="/images/twitter.svg"
                alt="value image"
                class="inline-block"
              />
            </div>
          </div>
          <div
            class="w-auto leading-0 absolute max-lg:top-5 max-xl:top-[42px] top-[58px] bottom-auto left-25 right-auto -z-10"
          >
            <svg
              width="100%"
              height="193"
              viewBox="0 0 437 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-visible"
            >
              <path
                id="path"
                d="M0 1H122.022C130.298 1 137.01 7.70248 137.022 15.9782L137.175 122.029C137.187 130.302 143.895 137.003 152.168 137.007L275.007 137.066C283.289 137.07 290 143.785 290 152.066V177C290 185.284 296.716 192 305 192H437"
                stroke="#DCE0D3"
                stroke-dasharray="5 3"
              />
              <g
                id="rect"
                data-svg-origin="25.5 25.5"
                transform="matrix(1,0,0,1,255.40852,119.431)"
              >
                <g filter="url(#filter0_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="7.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
                <g filter="url(#filter1_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="5.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_283_246"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_283_246"
                  x="13"
                  y="13"
                  width="25"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>

          <div
            class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 xl:w-[120px] aspect-square rounded-full absolute top-1/2 -translate-y-1/2 left-10 bottom-auto right-auto"
          >
            <div
              class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full 1xl:p-2.5"
            >
              <NuxtImg
                sizes="1000"
                src="/images/snapchat.svg"
                alt="value image"
                class="inline-block"
              />
            </div>
          </div>
          <div
            class="w-auto leading-0 absolute top-1/2 -translate-y-1/2 bottom-auto left-25 right-auto -z-10"
          >
            <svg
              width="100%"
              height="2"
              viewBox="0 0 373 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-visible"
            >
              <path
                id="path-2"
                d="M0 1H373"
                stroke="#DCE0D3"
                stroke-dasharray="5 3"
              />
              <g
                id="rect-2"
                data-svg-origin="25.5 25.5"
                transform="matrix(1,0,0,1,255.40852,119.431)"
              >
                <g filter="url(#filter0_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="7.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
                <g filter="url(#filter1_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="5.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_283_246"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_283_246"
                  x="13"
                  y="13"
                  width="25"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>

          <div
            class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 xl:w-[120px] aspect-square rounded-full absolute top-auto left-0 bottom-0 right-auto"
          >
            <div
              class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full 1xl:p-2.5"
            >
              <NuxtImg
                sizes="1000"
                src="/images/dropbox.svg"
                alt="value image"
                class="inline-block"
              />
            </div>
          </div>
          <div
            class="w-auto leading-0 absolute top-auto -translate-y-1/2 max-lg:-bottom-[76px] max-xl:-bottom-[54px] -bottom-[38px] left-25 right-auto -z-10"
          >
            <svg
              width="100%"
              height="193"
              viewBox="0 0 437 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-visible"
            >
              <path
                id="path-3"
                d="M0 192H122.022C130.298 192 137.01 185.298 137.022 177.022L137.175 70.971C137.187 62.6981 143.906 55.9968 152.179 55.9928C198.05 55.9707 229.13 55.9557 274.996 55.9336C283.278 55.9296 290 49.215 290 40.9336V16C290 7.7157 296.716 0.999985 305 0.999985H437"
                stroke="#DCE0D3"
                stroke-dasharray="5 3"
              />
              <g
                id="rect-3"
                data-svg-origin="25.5 25.5"
                transform="matrix(1,0,0,1,255.40852,119.431)"
              >
                <g filter="url(#filter0_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="7.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
                <g filter="url(#filter1_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="5.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_283_246"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_283_246"
                  x="13"
                  y="13"
                  width="25"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div
          class="w-1/2 h-full block absolute top-0 left-auto bottom-auto right-0"
        >
          <div
            class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 xl:w-[120px] aspect-square rounded-full absolute top-0 left-auto right-0 bottom-auto"
          >
            <div
              class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full 1xl:p-2.5"
            >
              <NuxtImg
                sizes="1000"
                src="/images/slack.svg"
                alt="value image"
                class="inline-block"
              />
            </div>
          </div>
          <div
            class="w-auto leading-0 absolute max-lg:top-5 max-xl:top-[42px] top-[58px] bottom-auto right-25 left-auto -z-10"
          >
            <svg
              width="100%"
              height="193"
              viewBox="0 0 437 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-visible"
            >
              <path
                id="path-4"
                d="M437 1H314.978C306.702 1 299.99 7.70248 299.978 15.9782L299.825 122.029C299.813 130.302 293.105 137.003 284.832 137.007L161.993 137.066C153.711 137.07 147 143.785 147 152.066V177C147 185.284 140.284 192 132 192H0"
                stroke="#DCE0D3"
                stroke-dasharray="5 3"
              />
              <g
                id="rect-4"
                data-svg-origin="25.5 25.5"
                transform="matrix(1,0,0,1,255.40852,119.431)"
              >
                <g filter="url(#filter0_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="7.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
                <g filter="url(#filter1_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="5.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_283_246"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_283_246"
                  x="13"
                  y="13"
                  width="25"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>

          <div
            class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 xl:w-[120px] aspect-square rounded-full absolute top-1/2 -translate-y-1/2 left-auto bottom-auto right-10"
          >
            <div
              class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full 1xl:p-2.5"
            >
              <NuxtImg
                sizes="1000"
                src="/images/asana.svg"
                alt="value image"
                class="inline-block"
              />
            </div>
          </div>
          <div
            class="w-auto leading-0 absolute top-1/2 -translate-y-1/2 bottom-auto right-25 left-auto -z-10"
          >
            <svg
              width="100%"
              height="2"
              viewBox="0 0 373 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-visible"
            >
              <path
                id="path-5"
                d="M373 1H0"
                stroke="#DCE0D3"
                stroke-dasharray="5 3"
              />
              <g
                id="rect-5"
                data-svg-origin="25.5 25.5"
                transform="matrix(1,0,0,1,255.40852,119.431)"
              >
                <g filter="url(#filter0_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="7.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
                <g filter="url(#filter1_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="5.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_283_246"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_283_246"
                  x="13"
                  y="13"
                  width="25"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>

          <div
            class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 xl:w-[120px] aspect-square rounded-full absolute top-auto left-auto bottom-0 right-0"
          >
            <div
              class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full 1xl:p-2.5"
            >
              <NuxtImg
                sizes="1000"
                src="/images/google-drive.svg"
                alt="value image"
                class="inline-block"
              />
            </div>
          </div>
          <div
            class="w-auto leading-0 absolute top-auto -translate-y-1/2 max-lg:-bottom-[76px] max-xl:-bottom-[54px] -bottom-[38px] left-auto right-25 -z-10"
          >
            <svg
              width="100%"
              height="193"
              viewBox="0 0 437 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-visible"
            >
              <path
                id="path-6"
                d="M437 192H314.978C306.702 192 299.99 185.298 299.978 177.022L299.825 70.971C299.813 62.6981 293.105 55.9968 284.832 55.9928L161.993 55.9336C153.711 55.9296 147 49.215 147 40.9336V16C147 7.7157 140.284 0.999985 132 0.999985H0"
                stroke="#DCE0D3"
                stroke-dasharray="5 3"
              />
              <g
                id="rect-6"
                data-svg-origin="25.5 25.5"
                transform="matrix(1,0,0,1,255.40852,119.431)"
              >
                <g filter="url(#filter0_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="7.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
                <g filter="url(#filter1_f_283_246)">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="5.5"
                    fill=""
                    class="fill-primary"
                  ></circle>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_283_246"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_283_246"
                  x="13"
                  y="13"
                  width="25"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="3.5"
                    result="effect1_foregroundBlur_283_246"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-8 md:hidden mt-10">
      <div
        class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 aspect-square rounded-full mx-auto"
      >
        <div
          class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full"
        >
          <NuxtImg
            sizes="1000"
            src="/images/figma.svg"
            alt="value image"
            class="inline-block"
          />
        </div>
      </div>

      <div
        class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 aspect-square rounded-full mx-auto"
      >
        <div
          class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full"
        >
          <NuxtImg
            sizes="1000"
            src="/images/dropbox.svg"
            alt="value image"
            class="inline-block"
          />
        </div>
      </div>

      <div
        class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 aspect-square rounded-full mx-auto"
      >
        <div
          class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full"
        >
          <NuxtImg
            sizes="1000"
            src="/images/twitter.svg"
            alt="value image"
            class="inline-block"
          />
        </div>
      </div>
      <div
        class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 aspect-square rounded-full mx-auto"
      >
        <div
          class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full"
        >
          <NuxtImg
            sizes="1000"
            src="/images/slack.svg"
            alt="value image"
            class="inline-block"
          />
        </div>
      </div>
      <div
        class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 aspect-square rounded-full mx-auto"
      >
        <div
          class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full"
        >
          <NuxtImg
            sizes="1000"
            src="/images/google-drive.svg"
            alt="value image"
            class="inline-block"
          />
        </div>
      </div>
      <div
        class="bg-white dark:bg-dark-200 shadow-box p-2.5 w-25 aspect-square rounded-full mx-auto"
      >
        <div
          class="flex items-center justify-center border border-dashed border-gray-100 dark:border-borderColor-dark text-center aspect-square rounded-full"
        >
          <NuxtImg
            sizes="1000"
            src="/images/asana.svg"
            alt="value image"
            class="inline-block"
          />
        </div>
      </div>
    </div>
  </section>
</template>
