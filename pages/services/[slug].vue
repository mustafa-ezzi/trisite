<script setup>
import ServiceData from "~/data/ServiceData.json";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import SingleService from "~/components/ServicesPage/SingleService.vue";
import MemberCounter from "~/components/Shared/MemberCounter.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const slug = route.params.slug;
const data = ServiceData.find((post) => post?.slug === slug);
useHead({
  title: `${slug} - Trisite Solution ${slug} Page`,
});
</script>

<template>
  <div>
    <ThemeSwitcher />
    <SecondaryNav />
    <SingleService :data="data" />
    <MemberCounter />
    <Pricing />
    <Footer />
  </div>
</template>
