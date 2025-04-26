<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import AnalyticsHero from "~/components/HomepageFour/AnalyticsHero.vue";
import DataIntegration from "~/components/HomepageFour/DataIntegration.vue";
import Marquee from "~/components/Shared/Marquee.vue";
import Feature from "~/components/HomepageFour/Feature.vue";
import Process from "~/components/HomepageFour/Process.vue";
import ServiceCardWithLeftText from "~/components/HomepageFour/ServiceCardWithLeftText .vue";
import Team from "~/components/HomepageThree/Team.vue";
import FAQWithLeftText from "~/components/HomepageFour/FAQWithLeftText.vue";
import TopIntegration from "~/components/HomepageFour/TopIntegration.vue";
import MemberCounter from "~/components/Shared/MemberCounter.vue";
import Blog from "~/components/Shared/Blog.vue";
import CtaV2 from "~/components/HomepageTwo/CtaV2.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Analytics - Trisite Solution Analytics Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <AnalyticsHero />
  <DataIntegration />
  <Marquee showText />
  <Feature />
  <Process />
  <ServiceCardWithLeftText />
  <Team />
  <FAQWithLeftText />
  <TopIntegration />
  <MemberCounter />
  <Blog class="pt-150 pb-150" />
  <CtaV2
    title="Boost Your Revenue Using Our <br/>
Data Analytics Solutions"
  />
  <Footer />
</template>
