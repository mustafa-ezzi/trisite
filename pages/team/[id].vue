<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import SingleTeam from "~/components/Shared/SingleTeam.vue";
import TeamContact from "~/components/Shared/TeamContact.vue";
import Footer from "~/components/Footer.vue";
import teamData from "~/data/teamData.json";

const route = useRoute();
const slug = route.params.id;

const data = teamData?.find((team) => team?.slug == slug);

useHead({
  title: `${slug} - Trisite Solution ${slug} Page`,
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <SingleTeam :data="data" />
  <TeamContact />
  <Footer />
</template>
