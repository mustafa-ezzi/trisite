<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Privacy - Trisite Solution Privacy Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <section
    v-motion-fadeUpAnimation
    class="relative pb-150 pt-[250px] max-md:pt-150 overflow-hidden z-10 policy-page"
  >
    <div class="container relative !max-w-[800px]">
      <div
        class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden"
      >
        <div
          class="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
        ></div>
        <div
          class="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"
        ></div>
        <div
          class="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"
        ></div>
      </div>
      <h2 class="!mb-9">Private Policy</h2>
      <ContentDoc />
    </div>
  </section>
  <!-- <CtaV3 /> -->
  <Footer />
</template>
