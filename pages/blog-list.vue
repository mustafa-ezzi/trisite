<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import PageHero from "~/components/Shared/PageHero.vue";
import BlogSidebar from "~/components/BlogPage/BlogSidebar.vue";
import BlogList from "~/components/BlogPage/BlogList.vue";
import Footer from "~/components/Footer.vue";

useHead({
  title: "Blog List - Trisite Solution Blog Page",
});

const route = useRoute();
const slug = route.params.slug;
const blogs = await useAsyncData("blog", () => queryContent("/blog").find());

const search = ref("");
const getSearchInput = (value) => {
  search.value = value;
};

const searchedData = computed(() => {
  if (search.value) {
    return blogs.data.value.filter((blog) =>
      blog.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }
  return blogs.data.value;
});
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <section class="mb-150 relative overflow-hidden">
    <PageHero sub-title="BLOG LIST" title="Recent blogs created by aplio" />
    <div class="container relative z-10">
      <div
        class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
      >
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
        ></div>
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"
        ></div>
        <div
          class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"
        ></div>
      </div>

      <div class="grid grid-cols-12 max-md:gap-y-25 md:gap-5 lg:gap-8">
        <BlogList :blogItemData="searchedData" />
        <BlogSidebar
          :slug="slug"
          :blogSidebarData="blogs.data.value"
          @getSearchInput="getSearchInput"
        />
      </div>
    </div>
  </section>
  <Footer />
</template>
