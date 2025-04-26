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
  <PageHero
    sub-title="OUR SERVICES"
    title=" The world’s best companies trust aplio"
    description=" Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. It's not Latin, though it looks like it"
  />
  <Services />
  <MemberCounter />
  <Pricing />
  <CtaV3 class="pt-150" />
  <Footer />
</template>
