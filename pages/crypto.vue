<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import CryptoHero from "~/components/HomepageSeven/CryptoHero.vue";
import AboutCrypto from "~/components/HomepageSeven/AboutCrypto.vue";
import Process from "~/components/HomepageFour/Process.vue";
import ServicesCrypto from "~/components/HomepageSeven/ServicesCrypto.vue";
import Team from "~/components/HomepageThree/Team.vue";
import TimeLine from "~/components/HomepageSeven/TimeLine.vue";
import CryptoMarket from "~/components/HomepageSeven/cryptoMarket.vue";
import Blog from "~/components/Shared/Blog.vue";
import Marquee from "~/components/Shared/Marquee.vue";
import FooterV2 from "~/components/FooterV2.vue";
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <CryptoHero />
  <AboutCrypto />
  <Process />
  <ServicesCrypto />
  <Team />
  <TimeLine />
  <CryptoMarket />
  <Blog class="pb-150" />

  <div class="container mx-auto bg-transparent">
    <p class="text-light mb-15 flex justify-center dark:pt-4">
      Trusted by thousands of companies across 50+ countries
    </p>
    <Marquee />
  </div>

  <FooterV2 />
</template>
