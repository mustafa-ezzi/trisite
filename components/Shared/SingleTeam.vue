<script setup>
import AttheredSvg from "../Icons/AtTheRedSvg.vue";
import PhoneSvg from "../Icons/PhoneSvg.vue";
import DribbleIcon from "../Icons/SocialSvg/DribbleIcon.vue";
import FacebookIcon from "../Icons/SocialSvg/FacebookIcon.vue";
import GithubIcon from "../Icons/SocialSvg/GithubIcon.vue";
import LinkdineIcon from "../Icons/SocialSvg/LinkdineIcon.vue";

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const team = props?.data;
</script>

<template>
  <section>
    <div class="container mb-150 pt-[250px] max-md:pt-150 relative z-10">
      <div
        class="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-w-[800px] mx-auto relative auto-rows-min"
      >
        <div
          class="absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <div
            class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/30 blur-[145px]"
          ></div>
          <div
            class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/50 -ml-[170px] max-md:ml-0 blur-[145px]"
          ></div>
          <div
            class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/30 -ml-[170px] max-md:ml-0 blur-[145px]"
          ></div>
        </div>
        <div
          v-motion-fadeUpAnimation
          class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-box self-start"
        >
          <div class="rounded bg-gray-100 dark:bg-[#30302F]">
            <NuxtImg
              sizes="1000"
              :src="team?.image"
              alt="team member image"
              class="bg-full object-cover lg:max-w-[340px] min-h-[400px]"
            />
          </div>
        </div>
        <div>
          <div class="mb-12">
            <p class="section-tagline">{{ team?.designation }}</p>
            <h1 class="mb-12 text-[48px] font-bold">{{ team?.name }}</h1>
            <div class="singlePage">
              <p v-html="team?.details"></p>
            </div>
          </div>
          <div class="mb-6 flex items-center">
            <AttheredSvg />

            <a href="mailto:hallo@hawkins.com"> {{ team?.email }} </a>
          </div>
          <div class="mb-12 flex items-center">
            <PhoneSvg />

            <a href="tel:+393035000000"> {{ team?.phone }} </a>
          </div>
          <ul
            class="flex items-center gap-x-2.5 pt-12 border-t border-dashed border-borderColor dark:border-borderColor-dark"
          >
            <li>
              <a
                href="#"
                class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
              >
                <FacebookIcon />
              </a>
            </li>

            <li>
              <a
                href="#"
                class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
              >
                <DribbleIcon />
              </a>
            </li>

            <li>
              <a
                href="#"
                class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
              >
                <GithubIcon />
              </a>
            </li>

            <li>
              <a
                href="#"
                class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
              >
                <LinkdineIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
