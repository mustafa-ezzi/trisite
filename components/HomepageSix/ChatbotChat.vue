<template>
  <section class="relative max-md:pt-15 pt-[200px] overflow-hidden">
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-25 1xl:gap-x-24">
        <div class="relative py-10">
          <p class="section-tagline">Live chat</p>

          <h2 class="mb-8">
            Instant chat for outstanding customer experiences.
          </h2>
          <p class="mb-12">
            Provide live chat support to your customers. Our chatbot
            effortlessly hands off to human agents when necessary.
          </p>

          <NuxtLink to="/contact" class="btn"> Discover more </NuxtLink>
        </div>
        <div class="relative">
          <div
            class="max-lg:w-full lg:w-[420px] lg:h-[500px]"
            v-motion-fadeUpVisibleAnimation
          >
            <NuxtImg
              src="/images/home-6-img/chatbot-chat.png"
              alt="explore"
              sizes="1000"
              class="rounded-medium dark:hidden"
            />
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-dark.png"
              alt="explore"
              sizes="1000"
              class="rounded-medium hidden dark:inline-block"
            />
          </div>

          <div
            v-motion-fadeFromRightAnimation
            class="rounded-medium absolute max-xs:right-4 md:right-20 max-lg:max-w-[275px] max-lg:-top-20 lg:-top-[170px] lg:right-0"
          >
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-summery.png"
              alt="summery"
              sizes="1000"
              class="dark:hidden w-full"
            />
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-summery-dark.png"
              alt="summery"
              sizes="1000"
              class="hidden dark:inline-block w-full"
            />
          </div>
          <div
            v-motion-fadeFromRightAnimation2
            class="rounded-medium absolute max-xs:top-[110px] max-lg:-right-12 max-lg:max-w-[275px] max-lg:top-[80px] lg:top-[280px] lg:right-0"
          >
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-payment.png"
              alt="summery"
              sizes="1000"
              class="dark:hidden w-full"
            />
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-payment-dark.png"
              alt="summery"
              sizes="1000"
              class="hidden dark:inline-block w-full"
            />
          </div>
          <div
            v-motion-fadeFromRightAnimation3
            class="rounded-medium absolute max-xs:top-[220px] max-lg:-right-12 max-lg:max-w-[275px] max-lg:top-[220px] lg:top-[75px] lg:right-0"
          >
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-expense.png"
              alt="summery"
              sizes="1000"
              class="dark:hidden w-full"
            />
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-expense-dark.png"
              alt="summery"
              sizes="1000"
              class="w-full hidden dark:inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
