<script setup>
import GoogleColorIcon from "./Icons/SocialSvg/GoogleColorIcon.vue";
import FaceBookColorIcon from "./Icons/SocialSvg/FaceBookColorIcon.vue";
const checked = ref(false);
</script>

<template>
  <section class="relative mb-150 pt-[200px] max-md:mb-25">
    <div class="container relative">
      <div class="mx-auto mb-12 max-w-[475px] text-center" v-motion-fadeUpAnimation>
        <p class="section-tagline">Login</p>

        <h2>
          Login to your <br />
          account
        </h2>
      </div>
      <div class="relative z-10 mx-auto max-w-[510px]">
        <div
          class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col"
        >
          <div
            class="rounded-full bg-primary-200/30 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/50 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
          <div
            class="-ml-[170px] rounded-full bg-primary-200/30 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"
          ></div>
        </div>
        <div
          v-motion-fadeUpAnimation
          class="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200"
        >
          <div
            class="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7"
          >
            <div>
              <button
                class="group mb-6 flex w-full items-center justify-center gap-2 rounded-[30px] border border-borderColor bg-white px-[30px] py-3.5 font-jakarta_sans text-sm font-medium -tracking-[0.3px] text-paragraph dark:border-borderColor-dark dark:bg-transparent dark:text-white max-md:px-5"
              >
                <GoogleColorIcon />
                <span class="font-jakarta_sans font-medium"> Continue with Google </span>
              </button>
              <button
                class="group flex w-full items-center justify-center gap-2 rounded-[30px] border border-borderColor bg-white px-[30px] py-3.5 font-jakarta_sans text-sm font-medium -tracking-[0.3px] text-paragraph dark:border-borderColor-dark dark:bg-transparent dark:text-white max-md:px-5"
              >
                <FaceBookColorIcon />
                <span class="font-jakarta_sans text-sm font-medium">
                  Continue with Facebook
                </span>
              </button>
            </div>
            <div
              class="relative py-8 after:absolute after:top-1/2 after:h-[1px] after:w-full after:-translate-y-1/2 after:border after:border-dashed after:border-borderColor dark:after:border-borderColor-dark"
            >
              <span
                class="absolute left-1/2 top-1/2 z-10 inline-block w-10 -translate-x-1/2 -translate-y-1/2 bg-white text-center dark:bg-dark-200"
              >
                Or
              </span>
            </div>
            <form>
              <div class="grid grid-cols-12 gap-y-6">
                <div class="col-span-12">
                  <label
                    htmlFor="email"
                    class="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    class="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-3.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    htmlFor="email"
                    class="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="At least 8 character"
                    class="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-3.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                  />
                </div>
                <div class="col-span-full flex items-center justify-between">
                  <label htmlFor="remember-me" class="flex items-center gap-x-3">
                    <input type="checkbox" class="peer sr-only" />
                    <div
                      class="relative h-5 w-5 cursor-pointer rounded-full border border-borderColor after:absolute after:left-1/2 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:opacity-0 peer-checked:border-primary peer-checked:after:opacity-100 dark:border-borderColor-dark dark:peer-checked:border-primary"
                    ></div>

                    <span
                      class="block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
                    >
                      Remember me
                    </span>
                  </label>
                  <NuxtLink
                    to="/forget-password"
                    class="relative inline-block overflow-hidden align-bottom font-jakarta_sans text-sm font-medium leading-[24px] text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                  >
                    Forget Password
                  </NuxtLink>
                </div>
                <div class="col-span-full">
                  <button class="btn block w-full font-medium">Login</button>
                </div>
                <div class="col-span-full">
                  <p
                    class="text-sm font-medium text-center font-jakarta_sans leading-[24px]"
                  >
                    Not registered yet?
                    <NuxtLink
                      to="/signup"
                      class="relative font-jakarta_sans inline-block overflow-hidden text-sm font-medium text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 leading-[24px] align-bottom"
                    >
                      Create an Account
                    </NuxtLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
