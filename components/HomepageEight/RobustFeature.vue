<script setup>
const RobustFeaturesData = [
{
    id: 1,
    title: "Tailored Integrations",
    desc: "We connect your website seamlessly with the tools and platforms your business relies on—CRMs, analytics, payment gateways, and more.",
    iconLight: "/images/home-8-img/ai-feature-1.svg",
    iconDark: "/images/home-8-img/ai-feature-1-dark.svg",
  },
  {
    id: 2,
    title: "Fully Custom Designs",
    desc: "Every site we build is designed from scratch to match your brand’s style, voice, and goals—no generic templates here.",
    iconLight: "/images/home-8-img/ai-feature-2.svg",
    iconDark: "/images/home-8-img/ai-feature-2-dark.svg",
  },
  {
    id: 3,
    title: "Performance Optimization",
    desc: "Your site will be fast, responsive, and optimized for search engines—because performance and visibility matter.",
    iconLight: "/images/home-8-img/ai-feature-3.svg",
    iconDark: "/images/home-8-img/ai-feature-3-dark.svg",
  },
  {
    id: 4,
    title: "End-to-End Support",
    desc: "From first concept to post-launch updates, we’re with you at every step—offering guidance, maintenance, and technical support.",
    iconLight: "/images/home-8-img/ai-feature-4.svg",
    iconDark: "/images/home-8-img/ai-feature-4-dark.svg",
  },
];
</script>

<template>
  <section class="relative max-lg:overflow-hidden">
    <div class="container">
      <div class="relative z-10">
        <div class="grid grid-cols-12 items-center">
          <div class="md:sol-span-5 col-span-12 lg:col-span-4 1xl:pr-5">
            <div class="mb-12">
              <p class="section-tagline">Robust Features</p>

              <h2 class="mb-8">Simplify operations for your business.</h2>
              <p class="mb-8">
                With concepts in mind, we carefully design and perfect every
                detail to match your vision and goals.
              </p>
              <NuxtLink to="/services" class="btn btn-sm"> Read More </NuxtLink>
            </div>
          </div>
          <div class="md:col-span-7 relative col-span-12 lg:col-span-8">
            <div
              class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
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
            <div
              class="relative flex flex-col [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:overflow-hidden [&>*:not(:last-child)]:after:content-[url('/images/home-8-img/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('/images/home-8-img/seperator-dark.png')] max-lg:[&>*:not(:last-child)]:after:hidden"
            >
              <div
                class="relative grid grid-cols-2 max-lg:grid-cols-1 [&>*:nth-child(2n+1)]:before:absolute [&>*:nth-child(2n+1)]:before:left-0 [&>*:nth-child(2n+1)]:before:top-1/2 [&>*:nth-child(2n+1)]:before:h-full [&>*:nth-child(2n+1)]:before:w-[1px] [&>*:nth-child(2n+1)]:before:-translate-y-1/2 [&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(2n+1)]:before:hidden"
              >
                <div
                  class="group relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:left-1/2 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:-translate-x-1/2 max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2 lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  v-for="items in RobustFeaturesData.slice(0, 2)"
                  :key="items.id"
                >
                  <NuxtImg
                    :src="items.iconLight"
                    sizes="100"
                    alt="ai logo"
                    class="mb-6 inline-block dark:hidden"
                  />
                  <NuxtImg
                    :src="items.iconDark"
                    sizes="100"
                    alt="ai logo"
                    class="mb-6 hidden dark:inline-block"
                  />
                  <h3 class="relative mb-2.5">{{ items.title }}</h3>
                  <p>{{ items.desc }}</p>
                </div>
              </div>
              <div
                class="relative grid grid-cols-2 max-lg:grid-cols-1 [&>*:nth-child(2n+1)]:before:absolute [&>*:nth-child(2n+1)]:before:left-0 [&>*:nth-child(2n+1)]:before:top-1/2 [&>*:nth-child(2n+1)]:before:h-full [&>*:nth-child(2n+1)]:before:w-[1px] [&>*:nth-child(2n+1)]:before:-translate-y-1/2 [&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(2n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(2n+1)]:before:hidden [&>*:nth-row(n+2)]:mb-32"
              >
                <div
                  class="group relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:left-1/2 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:-translate-x-1/2 max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2 lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  v-for="items in RobustFeaturesData.slice(2, 4)"
                  :key="items.id"
                >
                  <NuxtImg
                    :src="items.iconLight"
                    sizes="100"
                    alt="ai logo"
                    class="mb-6 inline-block dark:hidden"
                  />
                  <NuxtImg
                    :src="items.iconDark"
                    sizes="100"
                    alt="ai logo"
                    class="mb-6 hidden dark:inline-block"
                  />
                  <h3 class="relative mb-2.5">{{ items.title }}</h3>
                  <p>{{ items.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
