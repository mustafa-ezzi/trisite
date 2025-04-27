<script setup>
import PricingSvg1 from "../Icons/Pricing/PricingSvg1.vue";
import PricingData from "~/data/PricingData.json";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";
const { fast } = defineProps({
  fast: {
    type: Boolean,
  },
});

let pricingRef = ref(false);

const pricingFun = (value) => {
  pricingRef.value = value;
};
</script>

<template>
  <section class="bg-white dark:bg-dark-300 relative overflow-hidden pt-150">
    <div class="container">
      <div
        v-motion-fadeUpAnimation
        class="mb-12 text-center mx-auto relative z-10"
        :class="fast ? 'max-w-[805px]' : ' max-w-[475px]'"
      >
        <div class="">
          <p class="section-tagline">Our Pricing</p>
          <h1 v-if="fast">Choose the right plan for your business</h1>
          <h2 v-else>Choose the right plan for your business</h2>
          <p v-if="fast" class="max-lg:mb-10 mt-10 mb-12 max-w-[590px] mx-auto">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text. It‘s not Latin, though it looks like it
          </p>
        </div>

        
      </div>

      <div class="relative md:z-10">
        <div
          class="absolute left-1/2 top-150 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>

        <div
          class="flex max-lg:flex-col items-center gap-8 relative max-md:z-10 pb-12"
        >
          <div
            class="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
            v-for="pricing in PricingData"
            :key="pricing.id"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-8 max-md:p-5 lg:px-8 lg:pt-3 lg:pb-15"
            >
              <div class="flex justify-end mb-2.5">
                <span
                  v-if="pricing?.save"
                  class="-mr-4 bg-primary text-paragraph py-1.5 px-3 rounded-full font-medium"
                >
                  Save {{ pricing.save }}
                </span>
              </div>
              <h3 class="mb-2">{{ pricing.title }}</h3>
              <p class="mb-6">
                {{ pricing.desc }}
              </p>
              <div class="price-year mb-16" v-if="pricingRef">
                <h2>
                  $<span>{{ pricing.priceYearly }}</span>
                </h2>
                <p>Per Year</p>
              </div>

              <div class="price-month mb-16" v-else>
                <h2>
                  $<span>{{ pricing.priceMonthly }}</span>
                </h2>
                <p>Per Month</p>
              </div>

              <ul
                class="relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-[url('../images/banking/border.svg')] dark:after:bg-[url('../images/banking/border-dark.svg')] after:bg-center after:bg-no-repeat after:bg-full"
              >
                <li
                  class="mb-6 flex items-center gap-3.5"
                  v-for="(priceListFeature, i) in pricing.priceList"
                  :key="i"
                >
                  <PricingSvg1 />

                  <span>{{ priceListFeature.name }}</span>
                </li>
              </ul>

              <NuxtLink to="/contact" class="btn text-center py-3 w-full">
                Get Started Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
