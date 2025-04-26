<script setup>
import Feature from "~/data/Feature.json";
</script>

<template>
  <section class="relative pb-150 pt-150">
    <div class="container">
      <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
        <div
          class="bg-white dark:bg-dark-200 rounded-medium shadow-nav relative max-lg:p-5 p-8 border border-solid border-transparent"
          v-for="feature in Feature"
          :key="feature.id"
        >
          <NuxtImg
            sizes="1000"
            :src="feature.lightImg"
            alt="service logo"
            class="inline-block dark:hidden mb-10 rounded w-full"
          />
          <NuxtImg
            sizes="1000"
            :src="feature.darkImg"
            alt="service logo"
            class="hidden dark:inline-block mb-10 rounded w-full"
          />
          <h3 class="mb-2.5 leading-8 max-w-[250px]">
            {{ feature.title }}
          </h3>
          <p>
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
