<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import HeroChatbot from "~/components/HomepageSix/HeroChatbot.vue";
import Feature from "~/components/HomepageSix/Feature.vue";
import ChatbotChat from "~/components/HomepageSix/ChatbotChat.vue";
import ChatControl from "~/components/HomepageSix/ChatControl.vue";
import IntegrationFadeSlider from "~/components/HomepageSix/IntegrationFadeSlider.vue";
import PricingV2 from "~/components/Shared/PricingV2.vue";
import TestimonialV3 from "~/components/Shared/TestimonialV3.vue";
import Approach from "~/components/HomepageSix/Approach.vue";
import CtaV4 from "~/components/Shared/CtaV4.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <HeroChatbot />
  <Feature />
  <ChatbotChat />
  <ChatControl />
  <IntegrationFadeSlider />
  <PricingV2 />
  <TestimonialV3 />
  <Approach />
  <CtaV4 />
  <Footer />
</template>
