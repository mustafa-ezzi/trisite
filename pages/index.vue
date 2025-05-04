<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import AiHero from "~/components/HomepageEight/AiHero.vue";
import GetStart from "~/components/HomepageEight/GetStart.vue";
import AiSteps from "~/components/HomepageEight/AiSteps.vue";
import RobustFeature from "~/components/HomepageEight/RobustFeature.vue";
import Pricing from "~/components/Shared/Pricing.vue";
// import AiIntegration from "~/components/HomepageEight/AiIntegration.vue";
import Testimonial from "~/components/Shared/Testimonial/Testimonial.vue";
import Footer from "~/components/Footer.vue";
import WhatSapp from "~/components/HomepageEight/WhatSapp.vue";
onMounted(() => {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.async = true
  script.src = "https://embed.tawk.to/6812868a00e88619103f3a8e/1iq45r45t"
  script.charset = "UTF-8"
  script.setAttribute("crossorigin", "*")
  document.head.appendChild(script)
})
useHead({
  title: "Trisite Solutions | Edit, Host, Optimize, Succeed",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <AiHero />
  <GetStart />
  <AiSteps />
  <RobustFeature />
  <Pricing />
  <!-- <AiIntegration /> -->
  <Testimonial />
  <Footer />
  <WhatSapp />
</template>
