<script setup>
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import HeroHosting from "~/components/HomepageFive/HeroHosting.vue";
import ClientV5 from "~/components/HomepageFive/ClientV5.vue";
import HostingFeature from "~/components/HomepageFive/HostingFeature.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import ServiceCardWithLeftText from "~/components/HomepageFour/ServiceCardWithLeftText .vue";
import Testimonial from "~/components/Shared/Testimonial/Testimonial.vue";
import EasyStepFeature from "~/components/HomepageFive/EasyStepFeature.vue";
import Blog from "~/components/Shared/Blog.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Hosting - Trisite Solution Hosting Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <HeroHosting />
  <ClientV5 />
  <HostingFeature />
  <Pricing />
  <ServiceCardWithLeftText />
  <Testimonial />
  <EasyStepFeature />
  <Blog class="pb-150" />
  <Footer />
</template>
