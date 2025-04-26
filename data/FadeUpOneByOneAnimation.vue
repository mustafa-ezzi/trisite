<script setup>
const props = defineProps({
  className: String,
  i: {
    type: Number,
    default: 0,
  },
});

const refElement = ref(null);
</script>
<template>
  <div
    ref="refElement"
    v-motion
    :initial="{
      y: 70,
      opacity: 0,
      delay: 300,
    }"
    :visible-once="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 500,
        delay: i * 180,
      },
    }"
    :class="className"
  >
    <slot></slot>
  </div>
</template>
