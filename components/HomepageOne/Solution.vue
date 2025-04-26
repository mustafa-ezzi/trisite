<script setup>
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const solutionList = ["On Demand Support", "Information Sharing", "Cloud Technology"];
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 overflow-hidden relative pt-[160px] pb-150 lg:pb-15 max-lg:pt-20 max-lg:pb-150"
  >
    <div class="container">
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center">
        <div class="max-md:order-2">
          <div class="relative pt-150 lg:py-150 lg:px-150">
            <div class="w-[250px] lg:w-[300px] aspect-video relative mx-auto">
              <NuxtImg
                sizes="1000"
                src="/images/solution/solution.png"
                alt="vision image"
                class="dark:hidden"
              />
              <NuxtImg
                sizes="1000"
                src="/images/solution/solution-dark.png"
                alt="vision image"
                class="hidden dark:inline-block"
              />
              <div
                class="absolute left-10 -top-[130px] lg:-top-[185px] lg:left-15 right-auto bottom-auto w-[250px] h-[150px] lg:w-[280px] lg:h-[180px] xl:w-[320px] xl:h-[230px]"
                v-motion-fadeFromRightAnimation
              >
                <NuxtImg
                  sizes="1000"
                  src="/images/solution/solution-shape1.png"
                  alt="vision image"
                  class="dark:hidden w-full"
                />
                <NuxtImg
                  sizes="1000"
                  src="/images/solution/solution-shape1-dark.png"
                  alt="vision image"
                  class="hidden dark:inline-block w-full"
                />
              </div>
              <div
                v-motion-fadeFromLeftAnimation
                class="absolute right-12 top-12 lg:right-20 left-auto bottom-auto w-[280px] h-[190px] lg:w-[320px] lg:h-[230px] xl:w-[368px] xl:h-[280px]"
              >
                <NuxtImg
                  sizes="1000"
                  src="/images/solution/solution-shape2.png"
                  alt="vision image"
                  class="dark:hidden w-full"
                />
                <NuxtImg
                  sizes="1000"
                  src="/images/solution/solution-shape2-dark.png"
                  alt="vision image"
                  class="hidden dark:inline-block w-full"
                />
              </div>
              <div
                v-motion-fadeUpAnimation
                class="absolute left-[175px] -bottom-[70px] lg:-bottom-[86px] lg:left-[200px] right-auto top-auto w-[150px] lg:w-[170px] aspect-video"
              >
                <NuxtImg
                  sizes="1000"
                  src="/images/solution/solution-shape3.png"
                  alt="vision image"
                  class="dark:hidden w-full"
                />
                <NuxtImg
                  sizes="1000"
                  src="/images/solution/solution-shape3-dark.png"
                  alt="vision image"
                  class="hidden dark:inline-block w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="max-md:order-1 lg:-mt-15">
          <p class="section-tagline">Strong Solutions</p>

          <h2 class="max-lg:mb-4 mb-8">
            Ensure strong solutions are available at all times
          </h2>
          <p class="max-lg:mb-6 mb-11">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text. It's not Latin though it looks like nothing.
          </p>
          <ul
            class="max-lg:mb-6 mb-14 flex max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10"
          >
            <li
              class="relative flex items-center gap-x-2"
              v-for="(list, i) in solutionList"
              :key="i"
            >
              <FontAwesomeIcon
                :icon="faCheck"
                class="fa-solid fa-check text-paragraph dark:text-primary"
              />

              <span class="dark:text-white font-jakarta_sans font-medium">{{
                list
              }}</span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn-outline"> Start Your Journey </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
