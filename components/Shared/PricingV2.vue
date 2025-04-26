<script setup>
import PricingData from "~/data/PricingData.json";
import PricingSvg1 from "../Icons/Pricing/PricingSvg1.vue";

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
      >
        <div class="">
          <p class="section-tagline">Customizable pricing</p>

          <h2>Adaptable pricing, outstanding value.</h2>
          <p class="max-lg:mb-10 mt-10 mb-12 max-w-[590px] mx-auto">
            Whether you‘re an individual, a small team, or a growing enterprise,
            we have a plan that aligns perfectly with your goals.
          </p>
        </div>

        <div class="pricing mt-4">
          <label
            class="relative z-[110] inline-flex cursor-pointer items-center"
          >
            <span
              class="mr-2.5 text-base font-semibold text-paragraph dark:text-white py-5"
              >Monthly</span
            >
            <input
              type="checkbox"
              class="peer sr-only"
              @change="(e) => pricingFun(e.target.checked)"
            />
            <div
              class="relative h-[34px] w-15 rounded-[20px] bg-black before:absolute before:left-1/2 before:top-1/2 before:h-[calc(100%-10px)] before:w-[calc(100%-10px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[20px] before:border before:border-dashed before:border-white/40 before:content-[''] after:absolute after:start-[5px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-primary after:transition-all after:content-[''] peer-checked:after:start-[7px] peer-checked:after:translate-x-full"
            ></div>
            <span
              class="ms-2.5 text-base font-semibold text-paragraph dark:text-white py-5"
              >Yearly
            </span>
          </label>
        </div>
      </div>

      <div class="relative md:z-10">
        <div
          class="absolute left-1/2 top-150 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
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

              <div
                class="p-6 mb-8 rounded-lg"
                :class="
                  pricing.featured
                    ? 'bg-primary'
                    : 'bg-primary/10 dark:bg-primary/5'
                "
              >
                <h3 class="mb-2">{{ pricing.title }}</h3>
                <p>
                  {{ pricing.desc }}
                </p>
              </div>
              <ul class="">
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
