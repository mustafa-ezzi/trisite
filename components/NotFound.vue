<script setup lang="ts"></script>

<template>
  <section class="pt-[200px] pb-150 bg-white dark:bg-dark-300">
    <div class="container relative" v-motion-fadeUpAnimation>
      <div class="max-w-[700px] mx-auto text-center">
        <h1
          class="text-[140px] font-bold bg-clip-text text-transparent dark:text-transparent bg-gradient-to-b from-primary from-0to-primary/0 to-90% leading-[1]"
        >
          404
        </h1>
        <p class="section-tagline -mt-16">Error</p>
        <h2 class="text-[64px] font-bold mb-9 leading-[1.22]">
          Ooops! <br />
          Page Not Found
        </h2>
        <p class="text-xl mb-8">
          This page doesn’t exist or was removed! <br />
          We suggest you go back to home.
        </p>
        <NuxtLink to="/" class="btn"> Go Back-Home </NuxtLink>
      </div>
    </div>
  </section>
</template>
