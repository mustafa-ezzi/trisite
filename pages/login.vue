<script setup>
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import LogInPage from "~/components/LogInPage.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "LogIn - Trisite Solution Login Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <LogInPage />
  <Footer />
</template>
