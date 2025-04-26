<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import BlogFeature from "~/components/BlogPage/BlogFeature.vue";
import BlogGrid from "~/components/BlogPage/BlogGrid.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";

const { data } = await useAsyncData("blog", () => queryContent("/blog").find());
const blogsFeatureTrue = data.value.filter((blg) => blg.featured === true);

useHead({
  title: "Blogs - Trisite Solution Blogs Page",
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <PageHero sub-title="BLOG GRID" title="Recent blogs created by aplio" />
  <BlogFeature :blogs="blogsFeatureTrue" />
  <BlogGrid :blogs="data" />
  <CtaV3 />
  <Footer />
</template>
