<script setup>
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import OurTeam from "~/components/Shared/OurTeam.vue";
import Counter from "~/components/Shared/Counter.vue";
import TestimonialSlider from "~/components/Shared/Testimonial/TestimonialSlider.vue";
import FaqV2 from "~/components/HomepageThree/FaqV2.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Our Teams - Trisite Solution Teams Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <PageHero
    sub-title="OUR TEAM"
    title="Our leading, strong and creative team"
    description="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
  />
  <OurTeam />
  <Counter />
  <TestimonialSlider />
  <FaqV2 />
  <CtaV3 />
  <Footer />
</template>
