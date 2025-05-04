<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import Accordion from "~/components/Accordion.vue";
import Footer from "~/components/Footer.vue";
useHead({
  title: "Faq Page - Trisite Solution FAQ Page",
});
</script>

<template>
  <div>
    <ThemeSwitcher />
    <SecondaryNav />
    <PageHero
      sub-title="FAQ’S"
      description="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
    />
    <section class="pb-150 max-md:overflow-hidden" v-motion-fadeUpAnimation>
      <div class="container relative z-10">
        <div
          class="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
        >
          <div
            class="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
        </div>

        <Accordion />
      </div>
    </section>
    <Footer />
  </div>
</template>
