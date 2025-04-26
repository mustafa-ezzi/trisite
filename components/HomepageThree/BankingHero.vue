<template>
  <section class="relative max-lg:pt-150 pt-[240px] pb-[60px]">
    <div
      class="container"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :duration="900"
      :delay="200"
    >
      <div class="max-w-[948px] mx-auto text-center">
        <p class="mb-4 font-medium uppercase">MONITOR YOUR MONEY</p>
        <h1 class="max-lg:mb-10 mb-10">
          The future of business is being shaped by aplio
        </h1>
        <p class="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
          text. It's not Latin, though it looks like it
        </p>
      </div>
    </div>
  </section>
</template>
