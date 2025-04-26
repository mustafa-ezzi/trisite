<script setup>
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
});

const propsNumber = ref(props.number);

const count = ref(0);
const isCounting = ref(false);
const counterRef = ref(null);

const displayCount = computed(() => Math.min(count.value, propsNumber.value));

let observer;
let timer;

onMounted(() => {
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isCounting.value = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );

    if (counterRef.value) {
      observer.observe(counterRef.value);
    }
  } else {
    isCounting.value = true;
  }
});

onUnmounted(() => {
  if (observer && counterRef.value) {
    observer.unobserve(counterRef.value);
  }
  clearInterval(timer);
});

watch([() => isCounting.value, () => count.value], () => {
  if (isCounting.value && count.value < propsNumber.value) {
    clearInterval(timer);
    timer = setInterval(() => {
      count.value = Math.min(count.value + 1, propsNumber.value);
      if (count.value >= propsNumber.value) {
        clearInterval(timer);
      }
    }, 10);
  } else {
    clearInterval(timer);
  }
});
</script>
<template>
  <span class="counter" ref="counterRef">
    {{ displayCount }}
  </span>
</template>
