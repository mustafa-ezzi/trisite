<script setup>
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  rating: {
    type: Number,
  },
  ratingColor: {
    type: String,
  },
  ratingEmptyColor: {
    type: String,
  },
});
</script>

<template>
  <div>
    <FontAwesomeIcon v-for="star in props.rating" :key="star" :icon="faStar" />
  </div>
</template>
