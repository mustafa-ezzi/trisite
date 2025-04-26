<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PaymentHero from "~/components/HomepageTwo/PaymentHero.vue";
import Rating from "~/components/HomepageTwo/Rating.vue";
import PaymentCoreFeature from "~/components/HomepageTwo/PaymentCoreFeature.vue";
import WhyUs from "~/components/HomepageTwo/WhyUs.vue";
import PaymentFeatures from "~/components/Shared/PaymentFeatures.vue";
import MemberCounter from "~/components/Shared/MemberCounter.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import BlogsV2 from "~/components/HomepageTwo/BlogsV2.vue";
import CtaV2 from "~/components/HomepageTwo/CtaV2.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Payment - Trisite Solution Payment Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <PaymentHero />
  <Rating />
  <PaymentCoreFeature />
  <WhyUs />
  <PaymentFeatures />
  <MemberCounter />
  <Pricing />
  <BlogsV2 class="pb-150" />
  <CtaV2
    title=" Start your best payment <br />
          experience now!"
  />
  <Footer />
</template>
