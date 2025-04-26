<script setup>
import FaceBookColorIcon from "./Icons/SocialSvg/FaceBookColorIcon.vue";
import GoogleColorIcon from "./Icons/SocialSvg/GoogleColorIcon.vue";
</script>

<template>
  <section class="pt-[200px] mb-150 relative">
    <div class="container relative" v-motion-fadeUpAnimation>
      <div class="mb-12 text-center max-w-[475px] mx-auto">
        <p class="section-tagline">Sign up</p>

        <h2>
          Connect with our <br />
          community
        </h2>
      </div>
      <div class="relative z-10 max-w-[510px] mx-auto">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
        >
          <div
            class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/30 blur-[145px]"
          ></div>
          <div
            class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/50 -ml-[170px] max-md:ml-0 blur-[145px]"
          ></div>
          <div
            class="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/30 -ml-[170px] max-md:ml-0 blur-[145px]"
          ></div>
        </div>
        <div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
          <div
            class="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-12 max-md:px-5 max-md:py-7"
          >
            <form>
              <div class="grid grid-cols-12 gap-y-6">
                <div class="col-span-12">
                  <label
                    for="name"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>
                <div class="col-span-12">
                  <label
                    for="email"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="password"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="At least 8 character"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>

                <div class="col-span-full">
                  <button class="btn w-full block">Sign Up</button>
                </div>
              </div>
            </form>
            <div
              class="relative after:absolute after:w-full after:h-[1px] after:top-1/2 after:-translate-y-1/2 after:border after:border-borderColor dark:after:border-borderColor-dark after:border-dashed py-8"
            >
              <span
                class="inline-block absolute w-10 z-10 bg-white dark:bg-dark-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
                >Or</span
              >
            </div>
            <div class="mb-8">
              <button
                class="py-3.5 max-md:px-5 px-[30px] -tracking-[0.3px] rounded-[30px] font-jakarta_sans font-medium text-sm bg-white text-paragraph border-borderColor dark:bg-transparent border dark:border-borderColor-dark dark:text-white w-full flex items-center justify-center gap-2 group mb-6"
              >
                <GoogleColorIcon />
                <span class="font-jakarta_sans font-medium"> Continue with Google </span>
              </button>
              <button
                class="py-3.5 max-md:px-5 px-[30px] -tracking-[0.3px] rounded-[30px] font-jakarta_sans font-medium text-sm bg-white text-paragraph border-borderColor dark:bg-transparent border dark:border-borderColor-dark dark:text-white w-full flex items-center justify-center gap-2 group"
              >
                <FaceBookColorIcon />
                <span class="font-jakarta_sans font-medium text-sm">
                  Continue with Facebook
                </span>
              </button>
            </div>
            <p class="text-center ont-jakarta_sans text-sm font-medium leading-[24px]">
              Already Have an account?
              <NuxtLink
                to="/login"
                class="relative font-jakarta_sans inline-block overflow-hidden text-sm font-medium text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 leading-[24px] align-bottom"
              >
                login
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
