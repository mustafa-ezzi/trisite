<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import RequestDemoContact from "~/components/RequestDemoContact.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Request Demo - Trisite Solution Demo Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <RequestDemoContact />
  <Footer />
</template>
