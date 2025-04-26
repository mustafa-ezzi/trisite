<script setup>
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PaymentRatingData from "~/data/PaymentRatingData.json";
</script>

<template>
  <section>
    <div class="container">
      <div
        class="grid grid-cols-12 gap-5 bg-white dark:bg-dark-200 shadow-nav p-2.5 items-center rounded-medium"
      >
        <div
          class="max-lg:col-span-full lg:col-span-5 lg:max-w-[425px] pl-12 max-lg:text-center max-lg:pl-0 max-lg:py-12"
        >
          <h2 class="mb-8">
            Thousands of <br />
            users have faith in us
          </h2>
          <p>Boost your insights that help you to grow business</p>
        </div>
        <div class="max-lg:col-span-full lg:col-span-7">
          <div class="grid grid-cols-3 max-lg:grid-cols-1 gap-3">
            <div
              class="border border-dashed border-gray-100 rounded dark:border-borderColor-dark py-12 px-7 text-center"
              v-for="rating in PaymentRatingData"
              :key="rating.id"
            >
              <h3 class="text-[48px] mb-5">{{ rating.rating }}</h3>
              <div class="mb-4 lg:[&>*:not(:last-child)]:mr-1.5">
                <FontAwesomeIcon
                  :icon="faStar"
                  class="fa-solid fa-star text-[#FFC107] []"
                />
                <FontAwesomeIcon :icon="faStar" class="fa-solid fa-star text-[#FFC107]" />
                <FontAwesomeIcon :icon="faStar" class="fa-solid fa-star text-[#FFC107]" />
                <FontAwesomeIcon :icon="faStar" class="fa-solid fa-star text-[#FFC107]" />
                <FontAwesomeIcon :icon="faStar" class="fa-solid fa-star text-[#FFC107]" />
              </div>
              <h4 class="text-xl mb-3.5 font-semibold">{{ rating.name }}</h4>
              <p>{{ rating.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
