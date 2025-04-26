<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import CareerBanner from "~/components/CareerPage/CareerBanner.vue";
import ValueFeature from "~/components/AboutPage/ValueFeature.vue";
import CareerPosition from "~/components/CareerPage/CareerPosition.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Career - Trisite Solution Career Page",
});

const { data } = await useAsyncData("career", () => queryContent("/career").find());
const careerData = data.value;
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <PageHero sub-title="CAREER PAGE" title="Become a part of the Trisite team" />
  <CareerBanner />
  <ValueFeature />
  <CareerPosition :careerData="careerData" />
  <CtaV3 />
  <Footer />
</template>
