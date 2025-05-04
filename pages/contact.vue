<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import ContactInfo from "~/components/CareerPage/ContactInfo.vue";
import TeamContact from "~/components/Shared/TeamContact.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";
import FaqV2 from "~/components/HomepageThree/FaqV2.vue";

useHead({
  title: "Contact - Trisite Solution Contact Page",
});
</script>

<template>
  <div>
    <ThemeSwitcher />
    <SecondaryNav />
    <PageHero
      sub-title="GET IN TOUCH"
      title="Contact our help desk for
    assistance"
      description="Until recently, the prevailing view assumed lorem
    ipsum was born as a nonsense text. It's not Latin, though it looks like it"
    />
    <ContactInfo />
    <TeamContact />
    <FaqV2/>
    <!-- <CtaV3 /> -->
    <Footer />
  </div>
</template>
