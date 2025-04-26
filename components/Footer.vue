<script setup>
import FooterData from "~/data/FooterData.json";
import FooterFacebookVue from "./Icons/SocialSvg/FooterSvg/Facebook.vue";
import Github from "./Icons/SocialSvg/FooterSvg/Github.vue";
import Linkedin from "./Icons/SocialSvg/FooterSvg/Linkedin.vue";
import Behance from "./Icons/SocialSvg/FooterSvg/behance.vue";

</script>

<template>
  <footer class="bg-white dark:bg-dark-300 overflow-hidden relative pt-20 z-40">
    <div class="container">
      <div class="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center">
        <div class="col-span-12 lg:col-span-6">
          <img
            sizes="100"
            src="../assets/trisite-logo.png"
            alt="logo"
            class="inline-block dark:hidden mb-10 w-[250px]"
          />
          <img
            sizes="100"
            src="../assets/trisite-dark.svg"
            alt="logo dark version"
            class="hidden dark:inline-block mb-10 w-[250px]"
          />
          <p class="max-w-[350px] -mt-[70px] max-lg:mx-auto">
            Edit, Host, Optimize. Succeed!
          </p>
        </div>
        <div class="col-span-12 lg:col-span-2 max-lg:text-center">
          <h3 class="mb-8 font-medium text-lg">Explore</h3>
          <ul class="[&>*:not(:last-child)]:mb-3">
            <li v-for="explore in FooterData?.explore" :key="explore.id">
              <NuxtLink
                :to="explore.link"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                {{ explore.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-12 lg:col-span-2 max-lg:text-center">
          <h3 class="mb-8 font-medium text-lg">Get In touch</h3>
          <p class="mb-3">Need Support?</p>
          <p class="mb-3">
            <a
              href="mailto:Website@trisitesolutions.com"
              class="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              {{ FooterData?.email }}
            </a>
          </p>

          <p class="mb-3">
            <a
              href="tel:+92335 4524042"
              class="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              {{ FooterData?.phone }}
            </a>
          </p>
          <ul class="flex items-center max-lg:justify-center social-link gap-4">
            <li>
              <a href="#" class="transiton-all">
                <FooterFacebookVue />
              </a>
            </li>
            <li>
              <a href="https://github.com/mustafa-ezzi/"><Github /> </a>
            </li>
            <li>
              <a href="#">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="seperator">
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
          <p class="max-lg:mb-10">
            {{ FooterData?.copyright }}
          </p>
          <ul class="lg:ml-auto flex items-center gap-15 max-lg:justify-center">
            <li>
              <NuxtLink
                to="/privacy"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
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
