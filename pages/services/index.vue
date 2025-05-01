<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import Services from "~/components/Shared/Services.vue";
import MemberCounter from "~/components/Shared/MemberCounter.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Services - Trisite Solution Service Page",
});
</script>


<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <PageHero sub-title="OUR SERVICES" title="Empowering Businesses Through Technology"
    description="At Trisite Solutions, we build powerful software tailored to your needs — from web apps to custom digital solutions. Trusted by startups and enterprises alike, we turn your ideas into reality." />
  <Services />
  <!-- <MemberCounter /> -->
  <Pricing />
  <Footer />
</template>
