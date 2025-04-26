<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import Counter from "~/components/Shared/Counter.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";
import WhyChoicesFirstFeature from "~/components/Shared/WhyChoicesFirstFeature.vue";
import FaqV2 from "~/components/HomepageThree/FaqV2.vue";

useHead({
  title: "Pricing Page - Trisite Solution Pricing Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <Pricing class="mt-[100px] pb-[102px]" fast />
  <Counter />
  <WhyChoicesFirstFeature />
  <FaqV2 />
  <CtaV3 />
  <Footer />
</template>
