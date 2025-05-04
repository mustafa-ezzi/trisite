<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import BankingHero from "~/components/HomepageThree/BankingHero.vue";
import BankingDetails from "~/components/HomepageThree/BankingDetails.vue";
import MemberCounter from "~/components/Shared/MemberCounter.vue";
import BankingServices from "~/components/HomepageThree/BankingServices.vue";
import OnlineBanking from "~/components/HomepageThree/OnlineBanking.vue";
import Marquee from "~/components/Shared/Marquee.vue";
import Team from "~/components/HomepageThree/Team.vue";
import Counter from "~/components/Shared/Counter.vue";
import Pricing from "~/components/Shared/Pricing.vue";
import FaqV2 from "~/components/HomepageThree/FaqV2.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Banking - Trisite Solution Banking Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <BankingHero />
  <BankingDetails />
  <MemberCounter />
  <BankingServices />
  <OnlineBanking />
  <Marquee />
  <Team />
  <Counter />
  <Pricing />
  <FaqV2 />
  <Footer />
</template>
