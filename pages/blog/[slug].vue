<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import DotSvg from "~/components/Icons/DotSvg.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <ContentDoc>
    <template #default="{ doc }">
      <section
        class="hero overflow-hidden relative max-lg:pt-150 pt-[230px] pb-[60px] z-110"
      >
        <div class="container" v-motion-fadeUpAnimation>
          <div class="max-w-[750px] mx-auto text-center">
            <p class="mb-4 font-medium uppercase">Blog List</p>
            <h1 class="max-lg:mb-10 mb-10">Recent blogs created by aplio</h1>
          </div>
        </div>
      </section>

      <article
        class="pb-150 relative"
        v-motion-fade-visible-once
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :duration="900"
      >
        <div class="container relative z-10">
          <div
            class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col max-md:-translate-y-0 -z-10 max-md:hidden"
          >
            <BgWithCustomGradient />
          </div>

          <div
            class="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box mb-16 max-md:h-[400px]"
          >
            <NuxtImg
              sizes="1000"
              :src="doc.thumbnail"
              alt="about images"
              class="rounded w-full max-md:object-cover max-md:object-center max-md:h-full"
            />
          </div>
          <div class="blog-details">
            <h2>{{ doc.title }}</h2>
            <div class="flex gap-x-2 items-center mb-12">
              <p>{{ doc.author }}</p>
              <span>
                <DotSvg />
              </span>
              <p>{{ doc.date }}</p>
            </div>
          </div>

          <div class="blog-details-body">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </article>
    </template>

    <!-- Not found slot (when no document is found) -->
    <template #not-found>
      <section
        class="text-center overflow-hidden relative max-lg:pt-150 pt-[230px] pb-[60px] z-110"
      >
        <h1 class="text-4xl font-bold">Blog Post Not Found</h1>
        <p class="mt-4">
          Sorry, the blog post you're looking for does not exist.
        </p>
        <a href="/blog-list" class="btn mt-8">Go back Blog</a>
      </section>
    </template>
  </ContentDoc>

  <Footer />
</template>
