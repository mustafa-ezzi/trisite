<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import SignUpPage from "~/components/SignUpPage.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "SignUp Page - Trisite Solution Signup Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <SignUpPage />
  <CtaV3 />
  <Footer />
</template>
