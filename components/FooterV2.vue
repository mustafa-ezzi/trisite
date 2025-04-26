<script setup>
import FooterData from "~/data/FooterData.json";
import FooterFacebookVue from "./Icons/SocialSvg/FooterSvg/Facebook.vue";
import Github from "./Icons/SocialSvg/FooterSvg/Github.vue";
import Linkedin from "./Icons/SocialSvg/FooterSvg/Linkedin.vue";
import Behance from "./Icons/SocialSvg/FooterSvg/behance.vue";

const email = ref("");

const submitNewsletter = () => {
  console.log("Submitting email:", email.value);
  email.value = "";
};

const lists = ["No Credit Card Required", "Free For 30 Day Trial."];
</script>
<template>
  <footer
    class="relative overflow-hidden bg-white pt-150 dark:bg-dark-300 max-md:pt-20 mt-1"
  >
    <div class="container relative z-10">
      <div
        class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:flex-col"
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
        class="mb-10 flex items-center justify-between max-md:flex-col max-md:gap-y-10"
      >
        <div class="max-md:text-center">
          <NuxtImg
            :src="FooterData.logo"
            sizes="1000"
            alt="logo"
            class="mb-10 inline-block dark:hidden"
            width="70"
            height="29"
          />
          <NuxtImg
            :src="FooterData.logoDark"
            sizes="1000"
            alt="logo dark version"
            class="mb-10 hidden dark:inline-block"
            width="70"
            height="29"
          />
          <p class="max-w-[350px] max-lg:mx-auto">
            {{ FooterData.footerText }}
          </p>
        </div>
        <div>
          <ul class="flex items-center max-lg:justify-center social-link gap-4">
            <li>
              <a href="#">
                <FooterFacebookVue />
              </a>
            </li>
            <li>
              <a href="#"><Github /> </a>
            </li>
            <li>
              <a href="#">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <Behance />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mb-10 relative after:absolute before:absolute after:w-[200px] after:h-[50px] after:bg-gradient-to-r after:from-white after:from-[37.5%] after:top-1/2 after:-translate-y-1/2 after:-left-0.5 after:z-10 before:w-[200px] before:h-[50px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:-right-0.5 before:top-1/2 before:-translate-y-1/2 before:z-10 dark:after:from-transparent dark:before:from-transparent"
      >
        <NuxtImg
          sizes="100"
          src="/images/footer-seperator.svg"
          alt="footer-seperator"
          class="w-full object-cover dark:hidden max-md:h-[1px]"
        />
        <NuxtImg
          sizes="100"
          src="/images/footer-seperator-dark.svg"
          alt="footer-seperator"
          class="hidden w-full object-cover dark:block max-md:h-[1px]"
        />
      </div>
      <div class="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
        <div class="col-span-12 max-lg:text-center md:col-span-6 lg:col-span-2">
          <h3 class="mb-8 text-lg font-medium">Explore</h3>
          <ul class="[&>*:not(:last-child)]:mb-3">
            <li v-for="item in FooterData.explore" :key="item.id">
              <NuxtLink
                :to="item.link"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-12 max-lg:text-center md:col-span-6 lg:col-span-2">
          <h3 class="mb-8 text-lg font-medium">Resources</h3>
          <ul class="[&>*:not(:last-child)]:mb-3">
            <li v-for="item in FooterData.resources" :key="item.id">
              <NuxtLink
                :to="item.link"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-12 max-lg:text-center md:col-span-6 lg:col-span-2">
          <h3 class="mb-8 text-lg font-medium">Get In touch</h3>
          <p class="mb-3">Need Support?</p>
          <p class="mb-3">
            <a
              :href="`mailto:${FooterData.email}`"
              class="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
            >
              {{ FooterData.email }}
            </a>
          </p>
          <p class="mb-3">
            <a
              :href="`tel:${FooterData.phone.split(' ').join('')}`"
              class="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
            >
              {{ FooterData.phone }}
            </a>
          </p>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-6">
          <div class="1xl:pl-150">
            <h3 class="mb-8 text-lg font-medium">Newsletter</h3>
            <form @submit.prevent="submitNewsletter">
              <div
                class="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6"
              >
                <input
                  v-model="email"
                  type="text"
                  placeholder="Enter your email"
                  class="placeholder:text-light text-light border-borderColor h-full rounded-[60px] border bg-transparent bg-white ps-5 leading-[1.5] text-[#A1A49D] outline-none transition-all duration-300 focus:border-primary focus:outline-none dark:border-[#31332F] dark:bg-dark-200 dark:placeholder:text-[#A1A49D] dark:focus:border-primary max-lg:col-span-full max-lg:py-3.5 lg:col-span-8"
                />
                <button class="btn max-lg:col-span-full lg:col-span-4">
                  Get Started
                </button>
              </div>
            </form>
            <ul
              class="mt-6 flex items-center max-lg:justify-between max-lg:gap-y-2.5 max-md:flex-col lg:gap-5"
            >
              <li
                class="flex items-center"
                v-for="(list, i) in lists"
                :key="('Zaks', i)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-3"
                >
                  <path
                    d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                    stroke=""
                    class="stroke-paragraph dark:stroke-primary"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>{{ list }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="mb-10 relative after:absolute before:absolute after:w-[400px] after:h-[50px] after:bg-gradient-to-r after:from-white after:from-[37.5%] after:top-1/2 after:-translate-y-1/2 after:-left-0.5 after:z-10 before:w-[400px] before:h-[50px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:-right-0.5 before:top-1/2 before:-translate-y-1/2 before:z-10 dark:after:from-transparent dark:before:from-transparent"
      >
        <NuxtImg
          sizes="100"
          src="/images/footer-seperator.svg"
          alt="footer-seperator"
          class="dark:hidden w-full object-cover"
        />
        <NuxtImg
          sizes="100"
          src="/images/footer-seperator-dark.svg"
          alt="footer-seperator"
          class="hidden dark:block w-full object-cover"
        />
      </div>
      <div class="py-10 max-lg:text-center">
        <div class="flex max-lg:flex-col lg:items-center">
          <p class="max-lg:mb-10">{{ FooterData.copyright }}</p>
          <ul class="flex items-center gap-15 max-lg:justify-center lg:ml-auto">
            <li>
              <NuxtLink
                to="/privacy"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                Terms & Conditions
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
