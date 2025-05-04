<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import AiHero from "~/components/HomepageEight/AiHero.vue";
import GetStart from "~/components/HomepageEight/GetStart.vue";
import AiSteps from "~/components/HomepageEight/AiSteps.vue";
import RobustFeature from "~/components/HomepageEight/RobustFeature.vue";
import Pricing from "~/components/Shared/Pricing.vue";
// import AiIntegration from "~/components/HomepageEight/AiIntegration.vue";
import Testimonial from "~/components/Shared/Testimonial/Testimonial.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <AiHero />
  <GetStart />
  <AiSteps />
  <RobustFeature />
  <Pricing />   
  <!-- <AiIntegration /> -->
  <Testimonial />
  <Footer />
</template>
