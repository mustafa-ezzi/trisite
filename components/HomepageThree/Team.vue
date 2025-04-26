<script setup>
import teamData from "~/data/teamData.json";
import FacebookIcon from "../Icons/SocialSvg/FacebookIcon.vue";
import GithubIcon from "../Icons/SocialSvg/GithubIcon.vue";
import DribbleIcon from "../Icons/SocialSvg/DribbleIcon.vue";
import LinkdineIcon from "../Icons/SocialSvg/LinkdineIcon.vue";
import FadeUpOneByOneAnimation from "~/data/FadeUpOneByOneAnimation.vue";
import BgWithCustomGradient from "~/components/Shared/BgWithCustomGradient.vue";

const sliceTeam = teamData.slice(0, 3);
</script>

<template>
  <section
    class="bg-white dark:bg-dark-300 pb-[170px] pt-150 max-md:pb-25 max-md:pt-20 max-md:overflow-hidden"
  >
    <div class="container">
      <div class="mb-12 text-center max-w-[475px] mx-auto relative z-10">
        <p class="section-tagline">Our Team</p>

        <h2>Our leading, strong and creative team</h2>
      </div>

      <div class="relative z-10">
        <div
          class="absolute left-1/2 max-md:top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <BgWithCustomGradient />
        </div>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          <FadeUpOneByOneAnimation
            :i="i"
            class="group/image"
            v-for="(team, i) in sliceTeam"
            :key="team.id"
          >
            <div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 mb-6">
              <div
                class="rounded bg-gray-100 dark:bg-[#30302F] overflow-hidden"
              >
                <NuxtImg
                  sizes="1000"
                  :src="team.image"
                  alt="team member image"
                  class="grayscale group-hover/image:grayscale-0 duration-300 transition-all"
                />
              </div>
            </div>
            <div class="text-center">
              <NuxtLink :to="'/team/' + team.slug"
                ><h3 class="mb-2">{{ team.name }}</h3></NuxtLink
              >
              <p class="text-sm font-medium leading-[1.5] mb-6">
                {{ team.designation }}
              </p>
              <ul class="flex items-center gap-x-2.5 justify-center">
                <li>
                  <a
                    href="#"
                    class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
                  >
                    <FacebookIcon />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
                  >
                    <DribbleIcon />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
                  >
                    <GithubIcon />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="group duration-500 transition-colors hover:transition-colors hover:duration-500"
                  >
                    <LinkdineIcon />
                  </a>
                </li>
              </ul>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </div>
  </section>
</template>
