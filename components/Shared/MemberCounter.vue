<script setup>
import CounterAnimation from "~/utils/CounterAnimation.vue";
</script>

<template>
  <section>
    <div class="container relative">
      <div
        class="grid grid-cols-12 py-10 gap-x-5 gap-y-5 relative after:absolute after:w-full after:h-0.5 after:bg-[url('../images/payment/member-border.svg')] dark:after:bg-[url('../images/payment/member-border-dark.svg')] after:bg-no-repeat after:cover after:bottom-0 after:left-1/2 after:-translate-x-1/2 before:absolute before:w-full before:h-0.5 before:bg-[url('../images/payment/member-border.svg')] dark:before:bg-[url('../images/payment/member-border-dark.svg')] before:bg-no-repeat before:bg-cover before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-center after:bg-center max-md:before:hidden"
      >
        <div class="max-lg:col-span-full lg:col-span-6">
          <div class="max-w-[550px]">
            <p class="section-tagline">Numbers</p>
            <h2>More than 4 years experience in this industry</h2>
          </div>
        </div>
        <div class="max-md:col-span-full md:col-span-6 lg:col-span-3 py-5">
          <div class="flex items-center">
            <div
              class="p-2.5 shadow-nav rounded-full w-[110px] h-[110px] bg-white dark:bg-dark-200 mr-6"
            >
              <div
                class="flex items-center justify-center border border-dashed rounded-full w-[90px] h-[90px] border-gray-100 dark:border-borderColor-dark"
              >
                <h3 class="text-primary dark:text-primary leading-none text-[28px]">
                  <span
                    class="text-primary dark:text-primary leading-none text-[28px] counterTrusted"
                  >
                    <CounterAnimation :number="85" /> </span
                  >%
                </h3>
              </div>
            </div>
            <h3 class="leading-8">
              Trusted <br />
              by companies
            </h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
