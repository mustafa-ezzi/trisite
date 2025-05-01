<script setup>
import ServiceData from "~/data/ServiceData.json";
</script>
<style lang="css">
.color{
  color: #C0FF68;
}
</style>

<template>
  <section class="bg-white dark:bg-dark-300 pb-150 relative sm:overflow-hidden">
    <div class="container" v-motion-fadeUpAnimation>
      <div class="mb-12">
        <p class="section-tagline max-lg:text-center color">Our Services</p>
        <div class="block max-lg:text-center lg:flex">
          <h2 class="max-lg:mb-5">
            Empowering Your Digital Dreams<br /> with <span class="color"> Trisite Solutions</span>
          </h2>
          <p class="max-w-[520px] mx-auto lg:ml-auto">
            At Trisite Solutions, we specialize in crafting high-performing, visually stunning websites that drive
            success. Our services are designed to cater to businesses of all sizes and industries. Here's what we offer:
          </p>
        </div>
      </div>

      <div class="relative z-10">
        <!-- glowing blur bg -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-sm:hidden">
          <div class="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20"></div>
          <div class="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"></div>
          <div class="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20 lg-ml-[170px]"></div>
        </div>

        <!-- services cards -->
        <div v-motion-fadeUpVisibleAnimation class="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8">
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-transform duration-500"
            v-for="service in ServiceData" :key="service.id">
            <div class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10">
              <NuxtImg sizes="1000" :src="service.iconLight" alt="service logo" class="inline-block dark:hidden mb-6" />
              <NuxtImg sizes="1000" :src="service.iconDark" alt="service logo" class="hidden dark:inline-block mb-6" />
              <NuxtLink :to="'/services/' + service.slug" class="block">
                <h3 class="mb-2.5">{{ service.title }}</h3>
              </NuxtLink>
              <p class="mb-6">{{ service.excerpt }}</p>
              <NuxtLink class="btn-outline btn-sm" :to="'/services/' + service.slug">see more</NuxtLink>
            </div>
          </div>
        </div>

        <!-- WHY CHOOSE US Section -->
        <div class="mt-20 text-center max-w-3xl mx-auto px-4" v-motion-fadeUpAnimation>
          <h3 class="text-3xl font-semibold mb-6">
            Why <span class="color">Choose Trisite Solutions?</span>
          </h3>
          <ul class="text-lg space-y-4 text-gray-800 dark:text-gray-200">
            <li>✨ Professional & Customized Solutions</li>
            <li>⚡ Fast Turnaround Time</li>
            <li>🔒 Secure and Scalable Development</li>
            <li>📱 Mobile-First Approach</li>
            <li>🤝 Dedicated Support Team</li>
          </ul>

          <div class="mt-10">
            <p class="text-xl font-medium mb-4">Ready to Start?</p>
            <p class="mb-6">Let’s create something amazing together.</p>
            <NuxtLink to="/contact" class="btn-outline btn-sm">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

