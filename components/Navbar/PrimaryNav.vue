_
<script setup lang="ts">
import { faAngleDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { debounce } from "lodash-es";
import SearchIconSvg from "../Icons/SearchIconSvg.vue";
import SearchOption from "./SearchOption.vue";

const showSearch = ref(false);
const scrollY = ref(0);
const showMobileMenu = ref(false);

const handleCloseSearch = () => {
  showSearch.value = !showSearch.value;
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const handleScroll = debounce(() => {
  if (window.scrollY >= 20) {
    scrollY.value = window.scrollY;
  } else {
    scrollY.value = window.scrollY;
  }
}, 10);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed left-0 pt-8 pb-2 z-[1000000000] duration-500 transition-all w-full bg-transparent"
    :class="[
      scrollY >= 20
        ? 'backdrop-blur-2xl  transition-all duration-500 -top-6'
        : 'top-0',
    ]"
  >
    <nav class="container flex items-center">
      <div class="nav-logo xl:min-w-[266px]">
        <NuxtLink to="/ai">
          <img src="../../assets/trisite-logo.png" alt="logo" class="w-[100px] dark:hidden" />
          <img src="../../assets/trisite-dark.svg" alt="logo dark version" class="hidden dark:inline-block w-[100px]" />
        </NuxtLink>
      </div>
      <ul
        class="nav-list hidden mr-[50px]  lg:flex mx-auto bg-white dark:bg-dark-200 p-2.5 shadow-nav rounded-large [&>*:not(:last-child)]:me-1"
      >
        <li class="relative group">
          <NuxtLink
            to="/ai"
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
          >
          Home 
          </NuxtLink>
          
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
          >
            About
          </NuxtLink>
        </li>
        <li class="relative group">
          <NuxtLink
            to="/services"
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors @@if(nav == 'services'){active}"
          >
            Services
          </NuxtLink>
        </li>
        <li class="group">
          <a
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors group"
          >
            Pages
            <FontAwesomeIcon
              :icon="faAngleDown"
              class="ffa-angle-down text-paragraph dark:text-white ml-1 group-hover:rotate-180 duration-500"
            ></FontAwesomeIcon>
          </a>
          <div
            class="absolute grid gap-15 text-gray-900 dark:text-white md:grid-cols-12 w-full mx-auto container right-0 left-0 top-24 p-2.5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-medium shadow-lg z-10 items-center"
          >
            <ul class="col-span-8 columns-3 gap-10 px-15">
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/team" class="flex"> team </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/team/kristin-coper" class="flex">
                  Team Details
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/testimonial" class="flex">
                  Testimonial
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/price" class="flex"> Price </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/career" class="flex"> Career </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/career/business-administrator" class="flex">
                  Career Single
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/faq" class="flex"> FAQ </NuxtLink>
              </li>

              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/integration" class="flex">
                  Integration
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/login" class="flex"> Log In </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/signup" class="flex"> Sign Up </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/404" class="flex"> 404 </NuxtLink>
              </li>
            </ul>
            <div class="col-span-4">
              <img
                src="/images/navbar.png"
                alt="navbar"
                class="w-full dark:hidden rounded-2xl"
              />
              <img
                src="/images/navbar-dark.png"
                alt="navbar"
                class="w-full hidden dark:block rounded-2xl"
              />
            </div>
          </div>
        </li>
        <li class="relative group">
          <a
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
          >
            News
            <FontAwesomeIcon
              :icon="faAngleDown"
              class="ml-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white"
            />
          </a>
          <ul
            class="absolute min-w-[250px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark [&>*:not(:first-child)]:mt-2.5 z-10"
          >
            <li
              class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              <NuxtLink to="/blog" class="flex"> Blog Grid </NuxtLink>
            </li>
            <li
              class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              <NuxtLink to="/blog-list" class="flex"> Blog List </NuxtLink>
            </li>
            <li
              class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              <NuxtLink to="/categories/Marketing" class="flex">
                Blog Categories
              </NuxtLink>
            </li>
            <li
              class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
            >
              <NuxtLink to="/tags/Benefits" class="flex"> Blog Tags </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
          >
            Contact Us
          </NuxtLink>
        </li>
      </ul>

      <ul
        class="flex items-center max-lg:ml-auto [&>*:not(:last-child)]:me-2.5"
      >
        <li class="">
          <button
            class="bg-white dark:bg-dark-200 p-2.5 rounded-full"
            @click="handleCloseSearch"
          >
            <SearchIconSvg />
          </button>
        </li>
        <li class="max-lg:inline-block lg:hidden">
          <button
            class="outline-none mobile-menu-button w-10 h-10 rounded-full bg-white dark:bg-dark-200 relative"
            @click="toggleMobileMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                fill=""
                class="fill-paragraph dark:fill-white"
              />
              <path
                d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                fill=""
                class="fill-paragraph dark:fill-white"
              />
              <path
                d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                fill=""
                class="fill-paragraph dark:fill-white"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div
        class="mobile-menu max-lg:overflow-y-auto"
        :class="showMobileMenu ? 'open' : ''"
      >
        <button
          class="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-white dark:bg-dark-200 absolute right-6 top-5"
          @click="toggleMobileMenu"
        >
          <FontAwesomeIcon
            :icon="faTimes"
            class="text-paragraph duration-500 group-hover:rotate-180 dark:text-white"
          />
        </button>
        <ul
          class="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full"
        >
          <li class="relative group">
            <a
              class="font-Inter mr-[50px]  flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            >
              <NuxtLink to="/ai" class="flex"> Home  </NuxtLink>

            </a>
           
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            >
              Services
            </NuxtLink>
          </li>
          <li class="relative group">
            <a
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors group"
            >
              Pages
              <FontAwesomeIcon
                :icon="faAngleDown"
                class="text-paragraph dark:text-white ml-auto group-hover:rotate-180 duration-500"
              ></FontAwesomeIcon>
            </a>
            <ul
              class="absolute w-full min-w-[250px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark [&>*:not(:first-child)]:mt-2.5 z-10"
            >
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/team" class="flex"> team </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/team/kristin-coper" class="flex">
                  Team Details
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/testimonial" class="flex">
                  Testimonial
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/price" class="flex"> Price </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/career" class="flex"> Career </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/career/business-administrator" class="flex">
                  Career Single
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/faq" class="flex"> FAQ </NuxtLink>
              </li>

              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/integration" class="flex">
                  Integration
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/login" class="flex">Log In</NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/signup" class="flex"> Sign Up </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/error" class="flex"> 404 </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="relative group">
            <a
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            >
              News
              <FontAwesomeIcon
                :icon="faAngleDown"
                class="text-paragraph dark:text-white ml-auto group-hover:rotate-180 duration-500"
              ></FontAwesomeIcon>
            </a>
            <ul
              class="absolute w-full min-w-[250px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark [&>*:not(:first-child)]:mt-2.5 z-10"
            >
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/blog" class="flex"> Blog Grid </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/blog-list" class="flex"> Blog List </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/categories/Marketing" class="flex">
                  Blog Categories
                </NuxtLink>
              </li>
              <li
                class="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
              >
                <NuxtLink to="/tags/Benefits" class="flex">
                  Blog Tags
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            >
              Contact Us
            </NuxtLink>
          </li>


        </ul>
      </div>
    </nav>
    <Teleport to="body" v-if="showSearch">
      <SearchOption @close="handleCloseSearch" />
    </Teleport>
  </header>
</template>
