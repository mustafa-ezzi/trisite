<script setup>
import CryptoIconOne from "../Icons/cryptoSvg/CryptoIconOne.vue";
import CryptoIconThree from "../Icons/cryptoSvg/CryptoIconThree.vue";
import CryptoIconTwo from "../Icons/cryptoSvg/CryptoIconTwo.vue";

const selectedTab = ref(1);

const tabItemList = [
  {
    id: 1,
    title: "Decentralization",
    description:
      "Fuga perferendis, dolorem itaque asperiores similique qui hic distinctio beatae, sapiente eaque voluptatem optio voluptatibus quasi magni minima earum incidunt tempore eveniet exercitationem.",
    itemOneText: "About the market.",
    itemTwoText: "Educational content",
    itemThreeText: "Market analysis",
  },
  {
    id: 2,
    title: "Blockchain",
    description:
      "Officiis error suscipit fugit repellendus dolor odit ipsum quo nulla perspiciatis omnis. Facere eum minus sed. Perferendis impedit velit aperiam officia! Doloribus, accusantium fugit ex quas voluptate saepe iste magni.",
    itemOneText: "About the Blockchain  market.",
    itemTwoText: "Blockchain  content",
    itemThreeText: "Blockchain analysis",
  },
  {
    id: 3,
    title: "Privacy",
    description:
      "Most cryptocurrencies are not controlled by any central authority such as a government or financial institution. Instead, they rely on decentralized networks where transactions are verified.",
    itemOneText: "About the privacy market.",
    itemTwoText: "Privacy  content",
    itemThreeText: "Privacy  analysis",
  },
  {
    id: 4,
    title: "Exchanges",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus doloribus repellat commodi adipisci vitae unde rem suscipit minima odit recusandae. Et ducimus repellendus iste rerum nulla doloremque tempore accusamus nam?",
    itemOneText: "About the Exchanges.",
    itemTwoText: "Exchanges content",
    itemThreeText: "Exchanges analysis",
  },
];
</script>
<template>
  <div>
    <div class="mb-8 rounded-[90px] bg-white p-2.5 shadow-box dark:bg-dark-200">
      <div
        class="h-full rounded-large border border-dashed border-gray-100 p-2.5 text-center dark:border-borderColor-dark"
      >
        <ul class="flex items-center gap-3 overflow-auto">
          <li
            v-for="(tabItem, index) in tabItemList"
            :key="tabItem.id"
            :class="['tab group', { 'tab-active': selectedTab === index }]"
            @click="selectedTab = index"
          >
            <span
              class="cursor-pointer block rounded-[60px] border border-borderColor-dark !px-5 !py-2 font-medium leading-[22px] transition-colors duration-500 hover:bg-paragraph hover:text-white hover:duration-500 group-[.tab-active]:border-paragraph group-[.tab-active]:bg-paragraph group-[.tab-active]:text-white dark:border-borderColor-dark dark:hover:bg-primary dark:hover:text-paragraph dark:group-[.tab-active]:border-primary dark:group-[.tab-active]:bg-primary dark:group-[.tab-active]:text-paragraph"
            >
              {{ tabItem.title }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="tab-content">
      <div
        v-for="(tabContents, index) in tabItemList"
        :key="tabContents.id"
        :class="{ hidden: selectedTab !== index }"
      >
        <p class="mb-8 max-md:mb-6">{{ tabContents.description }}</p>
        <ul
          class="[&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4"
        >
          <li v-if="tabContents.itemOneText" class="flex items-center gap-x-2">
            <span
              class="shadow-icon item-center relative flex justify-center gap-6 rounded-full bg-white dark:bg-dark-200"
            >
              <CryptoIconOne />
            </span>
            <span class="dark:text-white">{{ tabContents.itemOneText }}</span>
          </li>
          <li v-if="tabContents.itemTwoText" class="flex items-center gap-x-2">
            <span
              class="shadow-icon item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200"
            >
              <CryptoIconTwo />
            </span>
            <span class="dark:text-white">{{ tabContents.itemTwoText }}</span>
          </li>
          <li
            v-if="tabContents.itemThreeText"
            class="flex items-center gap-x-2"
          >
            <span
              class="shadow-icon item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200"
            >
              <CryptoIconThree />
            </span>
            <span class="dark:text-white">{{ tabContents.itemThreeText }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
