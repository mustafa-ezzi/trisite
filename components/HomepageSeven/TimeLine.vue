<script lang="ts" setup>
import TimeLineCard from "./TimeLineCard.vue";

const TimeLineData = [
  {
    id: 1,
    yearRange: "2008-2010",
    title: "The Early Days",
    item: [
      {
        year: "2008",
        details: "An anonymous individual or group under the currency.",
      },
      {
        year: "2009",
        details: "Bitcoin is launched by Nakamoto with the Block.",
      },
      {
        year: "2010",
        details: "The first recorded Bitcoin transaction occurs pizzas.",
      },
    ],
  },
  {
    id: 2,
    yearRange: "2011-2013",
    title: "Growth and Development",
    item: [
      {
        year: "2011",
        details: "Bitcoin&:quotes;s first significant price surge occurs.",
      },
      {
        year: "2012",
        details: "The first Bitcoin halving event occurs.",
      },
      {
        year: "2013",
        details: "Bitcoin reaches $1,000 for the first time.",
      },
    ],
  },
  {
    id: 3,
    yearRange: "2014-2016",
    title: "Expansion Recognition",
    item: [
      {
        year: "2014",
        details: "The Mt. Gox exchange, once the largest Bitcoin exchange.",
      },
      {
        year: "2015",
        details: "Ethereum a new blockchain functionality.",
      },
      {
        year: "2016",
        details: "The second Bitcoin halving reduces Ethereum classic.",
      },
    ],
  },
];
</script>

<template>
  <section class="bg-white pb-150 dark:bg-dark-300">
    <div class="container">
      <div class="grid grid-cols-12 items-start max-md:gap-y-8 md:gap-8">
        <div class="col-span-12 lg:sticky lg:top-150 lg:col-span-4">
          <div class="max-lg:mb-20">
            <p class="section-tagline">What we offer</p>

            <h2 class="mb-8">Timeline</h2>
            <p class="lg:max-w-[520px]">
              With concepts in hand, we meticulously design, refining every
              detail to align with your vision and objectives.
            </p>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8 lg:pl-15">
          <div class="relative z-10">
            <div
              class="absolute right-20 top-1/2 -z-10 flex -translate-y-1/2 flex-col max-sm:hidden"
            >
              <div
                class="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"
              ></div>
              <div
                class="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"
              ></div>
            </div>

            <div class="relative">
              <ul class="flex flex-col gap-6">
                <TimeLineCard
                  v-for="(item, index) in TimeLineData"
                  :key="item.id"
                  :item="item"
                  :index="index"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
