<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import TestimonialV2 from "~/components/Shared/Testimonial/TestimonialV2.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import Footer from "~/components/Footer.vue";
import Marquee from "~/components/Shared/Marquee.vue";

useHead({
  title: "Testimonial - Trisite Solution Testimonials Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <PageHero
    title="What our customer’s say about our company"
    description="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
  />
  <TestimonialV2 />
  <div class="container mx-auto pb-1">
    <Marquee />
  </div>
  <Pricing />
  <Footer />
</template>
