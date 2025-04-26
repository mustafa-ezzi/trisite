<script setup>
const userManageCard = [
  {
    id: 1,
    img: "/images/home-6-img/chatbot-feature-1.png",
    darkImg: "/images/home-6-img/chatbot-feature-1-dark.png",
    title: "Sales Automation",
    description:
      "Chatbots can engage website visitors, qualify leads, and capture contact information",
  },
  {
    id: 2,
    img: "/images/home-6-img/chatbot-feature-2.png",
    darkImg: "/images/home-6-img/chatbot-feature-2-dark.png",
    title: "AI- Powered Service",
    description:
      "AI-powered services utilize artificial intelligence to perform tasks that typically require human intelligence.",
  },
  {
    id: 3,
    img: "/images/home-6-img/chatbot-feature-3.png",
    darkImg: "/images/home-6-img/chatbot-feature-3-dark.png",
    title: "Simple Plug and play",
    description:
      "Refers to a simple and user-friendly setup process where a device or software can connected or installed.",
  },
];
</script>

<template>
  <section class="bg-white dark:bg-dark-300 relative pb-20">
    <div class="container">
      <div class="text-center max-w-[550px] mx-auto mb-16">
        <p class="section-tagline">Get started</p>
        <h2 class="mb-10">Streamline sales and support with chatbots.</h2>
        <p class="mb-15">
          Unlock unparalleled benefits for your business with our services.
          Reach more customers, save time and money.
        </p>
      </div>
      <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
        <div
          class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav"
          v-for="(card, _index) in userManageCard"
          :key="'id' + _index"
        >
          <div
            class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
          >
            <NuxtImg
              :src="card.img"
              class="inline-block dark:hidden mb-10 rounded w-full"
            />
            <NuxtImg
              :src="card.darkImg"
              class="hidden dark:inline-block mb-10 rounded w-full"
            />
            <h3 class="mb-2.5 leading-8">{{ card.title }}</h3>
            <p>
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
