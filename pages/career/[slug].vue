<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
import Footer from "~/components/Footer.vue";
import NotFound from "~/components/NotFound.vue";
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />

  <!-- ContentDoc with default content and not-found slot -->
  <ContentDoc>
    <!-- Default slot content (when document exists) -->
    <template #default="{ doc }">
      <PageHero sub-title="CAREER SINGLE PAGE" :title="doc.title" />
      <section class="mb-150 relative">
        <div class="container relative z-10">
          <div
            class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
          >
            <BgWithCustomGradient />
          </div>
          <div class="grid grid-cols-12 max-lg:gap-y-25 lg:gap-16">
            <div
              class="col-span-full max-lg:order-2 lg:col-span-8 singlePage relative"
            >
              <ContentRenderer :value="doc" />
            </div>
            <div
              class="col-span-full max-lg:order-1 lg:col-span-4 self-start relative"
            >
              <div
                class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative z-10"
              >
                <div
                  class="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-md:p-5 py-10 px-8"
                >
                  <h3 class="mb-1">Job Overview</h3>
                  <div
                    class="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark"
                  >
                    <div class="py-5">
                      <h4 class="text-lg font-medium mb-2">Date Posted</h4>
                      <p>{{ doc.publishDate }}</p>
                    </div>
                    <div class="py-5">
                      <h4 class="text-lg font-medium mb-2">Expiration date</h4>
                      <p>{{ doc.expirationDate }}</p>
                    </div>
                    <div class="py-5">
                      <h4 class="text-lg font-medium mb-2">Location</h4>
                      <p>{{ doc.location }}</p>
                    </div>
                    <div class="py-5">
                      <h4 class="text-lg font-medium mb-2">Offered Salary</h4>
                      <p>{{ doc.salary }} / week</p>
                    </div>
                    <div class="py-5">
                      <h4 class="text-lg font-medium mb-2">Experience</h4>
                      <p>{{ doc.experience }} Years Experience</p>
                    </div>
                    <div class="py-5">
                      <h4 class="text-lg font-medium mb-2">Qualification</h4>
                      <p>{{ doc.qualification }}</p>
                    </div>
                  </div>
                  <div class="mb-12 mt-4">
                    <h3 class="mb-8">Job Skills</h3>
                    <div class="flex flex-wrap w-full gap-3">
                      <div v-for="skill in doc.skills" :key="skill">
                        <span
                          class="inline-block w-full items-center justify-between rounded-[60px] border border-borderColor px-5 py-2 font-medium text-paragraph-light dark:border-borderColor-dark"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="#" class="btn w-full text-center"> Apply Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- Not found slot content (when no document exists) -->
    <template #not-found>
      <section class="pt-[200px] pb-150 bg-white dark:bg-dark-300">
        <div class="container relative" v-motion-fadeUpAnimation>
          <div class="max-w-[700px] mx-auto text-center">
            <h1
              class="text-[140px] font-bold bg-clip-text text-transparent dark:text-transparent bg-gradient-to-b from-primary from-0to-primary/0 to-90% leading-[1]"
            >
              No Data
            </h1>

            <h2 class="text-[64px] font-bold mb-9 leading-[1.22]">
              Career Document Not Found
            </h2>
            <p class="text-xl mb-8">
              Sorry, the document you're looking for <br />
              does not exist.
            </p>
            <NuxtLink to="/" class="btn"> Go Back-Home </NuxtLink>
          </div>
        </div>
      </section>
      />
    </template>
  </ContentDoc>

  <CtaV3 />
  <Footer />
</template>
