<script setup>
import AboutImages from "~/data/AboutImages.json";
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
</script>

<template>
  <section class="relative z-10">
    <div class="container relative">
      <div
        class="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
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
        class="grid grid-cols-3 max-md:grid-cols-1 gap-10 items-center max-md:mb-25 mb-[160px]"
      >
        <div
          v-motion
 
          class="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box"
   
          :initial="{ y: 70, opacity: 0, delay: 300 }"
          :enter="{
            y: 0,
            opacity: 1,
          }"
          :duration="400"
          :delay="i * 200"
        >
          <img src="../../assets/about1.png" alt="about images" class="rounded w-full" />
        </div>

        <div
          v-motion
          class="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box"
          :initial="{ y: 70, opacity: 0, delay: 300 }"
          :enter="{
            y: 0,
            opacity: 1,
          }"
          :duration="400"
          :delay="i * 200"
        >
          <img src="../../assets/about2.png" alt="about images" class="rounded w-full" />
        </div>
        <div
          v-motion
 
          class="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box"
   
          :initial="{ y: 70, opacity: 0, delay: 300 }"
          :enter="{
            y: 0,
            opacity: 1,
          }"
          :duration="400"
          :delay="i * 200"
        >
          <img src="../../assets/about3.png" alt="about images" class="rounded w-full" />
        </div>

      </div>

      <div class="grid grid-cols-12">
        <div class="max-md:col-span-full md:col-span-6">
          <div class="max-w-[550px]">
            <p class="section-tagline">Numbers</p>
            <h2>More than 6 years experience in this industry</h2>
          </div>
        </div>
        <div class="max-md:col-span-full md:col-span-6 max-w-[590px] py-10">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla lobortis lacus nunc
            pulvinar amet. Id dignissim ipsum quis varius. Accumsan ultricies
            dapibus rutrum parturient mauris at est habitasse.
            <br />
            <br />
            Risus egestas neque. Nunc diam arcu purus egestas at dignissim nunc.
            In nec donec sed pretium donec eros elementum. Nec bibendum vel odio
            convallis feugiat viverra rhoncus in risus. Pretium ante nibh morbi
            sed consequat sem quam pharetra. Et cursus mattis senectus aliquet.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
