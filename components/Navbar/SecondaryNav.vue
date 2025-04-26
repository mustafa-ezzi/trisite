<script setup>
import { faAngleDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { debounce } from "lodash-es";
import SearchOption from "./SearchOption.vue";

const sticky = ref(false);
const scrollY = ref(0);
const showSearch = ref(false);
const showMobileMenu = ref(false);
const scrollNav = ref(false);

const handleCloseSearch = () => {
  showSearch.value = !showSearch.value;
};

// Navbar Scrolling Functionality
const handleScroll = debounce(() => {
  if (window.scrollY >= 20) {
    scrollY.value = window.scrollY;
    sticky.value = true;
  } else {
    scrollY.value = window.scrollY;
    sticky.value = false;
  }
}, 10);

// mobileMenu---------
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

watch([sticky, scrollY], () => {
  if (scrollY.value >= 20 && sticky) {
    scrollNav.value = true;
  } else {
    scrollNav.value = false;
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// defineProps({
//   hideTopBar: {
//     type: Boolean,
//     default: false,
//   },
// });

const props = defineProps({
  hideTopBar: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <!-- <TopNav :sticky="sticky" /> -->

  <header class="fixed left-0 z-[10000000000] duration-500 transition-all w-full bg-transparent"
    :class="scrollNav ? 'nav-sticky' : 'top-15'">
    <nav class="container ml-[40px] flex items-center">
      <div class="nav-logo">
        <NuxtLink to="/">
          <img src="../../assets/trisite-logo.png" alt="logo" class="w-[100px] dark:hidden" />
          <img src="../../assets/trisite-dark.svg" alt="logo dark version" class="hidden dark:inline-block w-[100px]" />
        </NuxtLink>
      </div>
      <ul style="margin-left: 15.5rem;" class="nav-list hidden lg:flex lg:ml-10 xl:ml-15 [&>*:not(:last-child)]:me-1">
        <li>
          <NuxtLink
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            to="/"> Home </NuxtLink>

        </li>
        <li>
          <NuxtLink to="/about"
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors">
            About
          </NuxtLink>
        </li>
        <li class="relative group">
          <NuxtLink
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
            to="/services">
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact"
            class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors">
            Contact Us
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center ml-auto [&>*:not(:last-child)]:me-2.5">
        <li class="">
          <button class="bg-white dark:bg-dark-200 p-2.5 rounded-full" @click="handleCloseSearch">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.11278 0C14.1369 0 18.2245 4.08758 18.2245 9.11278C18.2245 11.2861 17.4592 13.5472 16.1845 14.8512L20 18.6667L18.6667 20L14.8512 16.1856C13.5667 17.4603 11.2861 18.2245 9.11278 18.2245C4.08758 18.2245 0 14.1369 0 9.11278C0 4.08758 4.08758 0 9.11278 0ZM9.11278 16.3395C13.0974 16.3395 16.3395 13.0974 16.3395 9.11278C16.3395 5.12818 13.0974 1.88608 9.11278 1.88608C5.12709 1.88608 1.88499 5.12818 1.88499 9.11278C1.88499 13.0974 5.12709 16.3395 9.11278 16.3395Z"
                fill="" class="fill-paragraph dark:fill-white" />
            </svg>
          </button>
        </li>

        <li class="max-lg:inline-block lg:hidden">
          <button class="outline-none mobile-menu-button w-10 h-10 rounded-full bg-white dark:bg-dark-200 relative"
            @click="toggleMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <path
                d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                fill="" class="fill-paragraph dark:fill-white" />
              <path
                d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                fill="" class="fill-paragraph dark:fill-white" />
              <path
                d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                fill="" class="fill-paragraph dark:fill-white" />
            </svg>
          </button>
        </li>
      </ul>
      <div class="mobile-menu max-lg:overflow-y-auto" :class="[{ open: showMobileMenu }]">
        <button @click="toggleMobileMenu"
          class="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-white dark:bg-dark-200 absolute right-6 top-5">
          <FontAwesomeIcon :icon="faTimes" class="fa-solid fa-t"></FontAwesomeIcon>
        </button>
        <ul class="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full">
          <li>
            <NuxtLink
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
              to="/"> Home </NuxtLink>

          </li>
          <li>
            <NuxtLink to="/about"
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors">
              About
            </NuxtLink>
          </li>
          <li class="relative group">
            <NuxtLink
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors"
              to="/services">
              Services
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/contact"
              class="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColor dark:hover:bg-dark-200 dark:hover:border-borderColor/10 duration-500 hover:duration-500 transition-colors">
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

<style scoped>
.router-link-active {
  @apply border-borderColor bg-white dark:border-borderColor/10 dark:bg-dark-200;
}
</style>
