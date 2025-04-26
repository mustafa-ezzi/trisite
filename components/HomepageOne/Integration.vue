<script setup>
import IntegrationAnimation from "./IntegrationAnimation.vue";
</script>

<template>
  <section class="bg-white dark:bg-dark-300 pb-150 max-md:pb-20">
    <div class="container relative z-10">
      <div class="text-center max-w-[620px] mx-auto">
        <p class="section-tagline">Top Integration</p>

        <h2 class="mb-8">Make productivity easier with 50+ Integrations</h2>
        <p class="mb-10">
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
          text. It's not Latin though it looks like nothing.
        </p>

        <NuxtLink to="/contact" class="btn-outline"> Start Your Journey </NuxtLink>
      </div>
      <IntegrationAnimation />
    </div>
  </section>
</template>
