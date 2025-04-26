<template>
  <section class="relative pt-[200px] overflow-hidden">
    <div class="container relative z-10">
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-25 1xl:gap-x-24">
        <div class="relative">
          <div
            class="max-lg:w-full lg:w-[420px] lg:h-[500px]"
            v-motion-fadeUpVisibleAnimation
          >
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-control.png"
              alt="explore"
              sizes="1000"
              class="rounded-medium dark:hidden"
            />
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-control-dark.png"
              alt="explore"
              sizes="1000"
              class="rounded-medium hidden dark:inline-block"
            />
          </div>

          <div
            v-motion-fadeFromLeftAnimation
            class="rounded-medium absolute max-lg:-left-12 max-lg:max-w-[275px] max-lg:-top-20 lg:-top-[110px] lg:-left-[225px]"
          >
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-control-chats.png"
              alt="summery"
              sizes="1000"
              class="dark:hidden w-full"
            />
            <NuxtImg
              src="/images/home-6-img/chatbot-chat-control-chats-dark.png"
              alt="summery"
              sizes="1000"
              class="hidden dark:inline-block w-full"
            />
          </div>
        </div>

        <div class="relative py-10">
          <p class="section-tagline">Your chatbot, your control.</p>

          <h2 class="mb-8">Advanced chatbot software for today’s websites.</h2>
          <p class="mb-12">
            Customize it to align with your brand's personality. Tailor the
            responses, and interactions to fit your business identity.
          </p>

          <NuxtLink to="/contact" class="btn"> Discover more </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
