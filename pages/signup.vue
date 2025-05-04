<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import SignUpPage from "~/components/SignUpPage.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "SignUp Page - Trisite Solution Signup Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <SignUpPage />
  <Footer />
</template>
