<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  paginateFunction: Object,
});

const {
  totalPage,
  currentPage,
  setCurrentPage,
  goToNextPage,
  goToPreviousPage,
} = props.paginateFunction;
</script>

<template>
  <div class="container">
    <ul class="flex items-center justify-center gap-2">
      <li class="group">
        <button
          @click="goToPreviousPage"
          class="group flex h-10 w-10 items-center justify-center rounded-full border border-borderColor text-sm font-medium duration-300 dark:border-borderColor-dark"
          :class="
            currentPage === 1
              ? 'disabled:opacity-7 cursor-not-allowed'
              : 'cursor-pointer hover:bg-primary'
          "
          :disabled="currentPage === 1"
        >
          <FontAwesomeIcon
            :icon="faArrowLeft"
            :class="currentPage === 1 ? '' : 'dark:group-hover:text-paragraph'"
            class="duration-300"
          />
        </button>
      </li>

      <li
        v-for="index in totalPage"
        :key="index"
        class="group"
        :class="{ 'page-active': index === currentPage }"
      >
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium duration-300 hover:bg-primary hover:text-paragraph"
          :class="{
            'bg-primary': index === currentPage,
            'dark:text-paragraph': index === currentPage,
          }"
          @click="setCurrentPage(index)"
        >
          {{ index }}
        </button>
      </li>

      <li class="group">
        <button
          @click="goToNextPage"
          class="group flex h-10 w-10 items-center justify-center rounded-full border border-borderColor text-sm font-medium duration-300 dark:border-borderColor-dark"
          :class="
            currentPage === totalPage
              ? 'disabled:opacity-7 cursor-not-allowed'
              : 'cursor-pointer hover:bg-primary'
          "
          :disabled="currentPage === totalPage"
        >
          <FontAwesomeIcon
            :icon="faArrowRight"
            :class="
              currentPage === totalPage ? '' : 'dark:group-hover:text-paragraph'
            "
            class="duration-300"
          />
        </button>
      </li>
    </ul>
  </div>
</template>
