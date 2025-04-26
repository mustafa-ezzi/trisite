<script setup>
const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let interval;

onMounted(() => {
  const target = new Date("12/31/2024 23:59:59");

  interval = setInterval(() => {
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    days.value = d < 10 ? "0" + d : d.toString();

    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hours.value = h < 10 ? "0" + h : h.toString();

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    minutes.value = m < 10 ? "0" + m : m.toString();

    const s = Math.floor((difference % (1000 * 60)) / 1000);
    seconds.value = s < 10 ? "0" + s : s.toString();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="col-span-12 mx-auto md:-mt-150">
    <div
      class="relative z-50 mb-8 inline-block rounded-[230px] bg-white p-2.5 shadow-box dark:bg-dark-200"
    >
      <div
        class="relative flex h-full w-[630px] items-center justify-center rounded-[210px] border border-dashed border-gray-100 py-2.5 text-center dark:border-borderColor-dark max-md:w-full"
      >
        <div
          class="absolute left-1/2 top-1/2 h-20 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200/40 blur-[145px] dark:bg-primary-200/10"
        ></div>
        <h2 class="text-[64px] max-md:px-2.5 max-md:text-[24px]">
          {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
        </h2>
      </div>
    </div>
  </div>
</template>
