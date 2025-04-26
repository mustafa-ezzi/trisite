<script setup>
import CounterData from "~/data/CounterData.json";
import CounterAnimation from "~/utils/CounterAnimation.vue";
</script>

<template>
  <section class="relative z-10">
    <div class="container">
      <div
        class="mx-auto max-w-[850px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200"
      >
        <div
          class="grid grid-cols-3 items-center rounded border border-dashed border-gray-100 bg-white py-10 dark:border-borderColor-dark dark:bg-dark-200 max-md:grid-cols-1 max-md:gap-y-10 [&>*:not(:last-child)]:after:absolute max-md:[&>*:not(:last-child)]:after:-bottom-5 max-md:[&>*:not(:last-child)]:after:left-1/2 max-md:[&>*:not(:last-child)]:after:h-[1px] max-md:[&>*:not(:last-child)]:after:w-[270px] max-md:[&>*:not(:last-child)]:after:-translate-x-1/2 max-md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile.svg')] max-md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile-dark.svg')] md:[&>*:not(:last-child)]:after:right-0 md:[&>*:not(:last-child)]:after:top-1/2 md:[&>*:not(:last-child)]:after:h-[60px] md:[&>*:not(:last-child)]:after:w-[1px] md:[&>*:not(:last-child)]:after:-translate-y-1/2 md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border.svg')] md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-dark.svg')]"
        >
          <div
            v-for="counter in CounterData"
            class="relative flex flex-col items-center justify-center"
            :key="counter.id"
          >
            <h2 class="text-[48px]">
              <CounterAnimation :number="parseInt(counter.number)" />

              <span class="percent">{{ counter.rightIcon }}</span>
            </h2>
            <p class="text-light font-jakarta_sans">{{ counter.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
