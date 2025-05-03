<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import AboutHero from "~/components/AboutPage/AboutHero.vue";
import AboutUs from "~/components/AboutPage/AboutUs.vue";
import ValueFeature from "~/components/AboutPage/ValueFeature.vue";
import OnlineBanking from "~/components/HomepageThree/OnlineBanking.vue";
import Counter from "~/components/Shared/Counter.vue";
import Team from "~/components/HomepageThree/Team.vue";
import TestimonialSlider from "~/components/Shared/Testimonial/TestimonialSlider.vue";
import CtaV2 from "~/components/HomepageTwo/CtaV2.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "About - Trisite Solution About page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <AboutHero />
  <AboutUs />
  <ValueFeature />
  <OnlineBanking
    sub-title="Core Value"
    title="The philosophy that underpins our organization."
  />
  <TestimonialSlider />
  <Counter />
  <CtaV2
    title="Start your best payment <br/>
experience now!"
  />
  <Footer />
</template>
