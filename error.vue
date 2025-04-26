<script setup>
import Footer from "~/components/Footer.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import NotFound from "~/components/NotFound.vue";
useHead({
  title: "Not Found Page ",
});
</script>

<template>
  <SecondaryNav />
  <NotFound />
  <CtaV3 />
  <Footer />
</template>
