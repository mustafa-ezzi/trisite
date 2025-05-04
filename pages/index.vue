<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import Hero from "~/components/HomepageOne/Hero.vue";
import Clients from "~/components/Shared/Clients.vue";
import Services from "~/components/Shared/Services.vue";
import Counter from "~/components/Shared/Counter.vue";
import Vision from "~/components/HomepageOne/Vision.vue";
import Solution from "~/components/HomepageOne/Solution.vue";
import Integration from "~/components/HomepageOne/Integration.vue";
import Faq from "~/components/HomepageOne/Faq.vue";
import Testimonial from "~/components/Shared/Testimonial/Testimonial.vue";
import Blog from "~/components/Shared/Blog.vue";
import Cta from "~/components/Shared/Cta.vue";

useHead({
  title: "Trisite Solutions",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <Hero />
  <Clients />
  <Services />
  <Counter />
  <Vision />
  <Solution />
  <Integration />
  <Faq />
  <Testimonial />
  <Blog class="pb-150" />
  <Cta title="Start Your Free Trial Today." />
  <Footer />
</template>
