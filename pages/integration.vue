<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import HeroIntegration from "~/components/IntegrationPage/HeroIntegration.vue";
import CardIntegration from "~/components/IntegrationPage/CardIntegration.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Integration - Intgration Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <HeroIntegration
    sub-title="INTEGRATION"
    title="Make productivity easier with 50+ integration"
    description="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
  />
  <CardIntegration />
  <Footer />
</template>
