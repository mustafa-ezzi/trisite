<script setup>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import SecondaryNav from "~/components/Navbar/SecondaryNav.vue";
import CtaV3 from "~/components/HomepageThree/CtaV3.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <ThemeSwitcher />
  <SecondaryNav />
  <section class="pt-[200px] mb-150 relative max-md:pt-150">
    <div class="container relative aos-init aos-animate">
      <div class="mb-12 text-center max-w-[475px] mx-auto">
        <p class="section-tagline">Reset Password</p>
        <h2>Provide a new password Password</h2>
      </div>
      <div class="relative z-10 max-w-[510px] mx-auto">
        <div
          class="absolute left-1/2 top-150 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-lg:p-5"
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
                <div class="col-span-full">
                  <label
                    for="new-password"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="At least 8 character"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="confirm-password"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="At least 8 character"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>
                <div class="col-span-full">
                  <button class="btn w-full block" @click.prevent>Reset Password</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CtaV3 />
  <Footer />
</template>
