<template>
  <section class="mb-150 relative" v-motion-fadeUpAnimation>
    <div class="container relative">
      <div class="mb-12 text-center max-w-[475px] mx-auto">
        <p class="section-tagline">Contact</p>

        <h2>Let us know how we can assist you</h2>
      </div>
      <div class="relative z-10 max-w-[850px] mx-auto">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-lg:max-w-full max-md:hidden"
        >
          <div
            class="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
          ></div>
          <div
            class="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"
          ></div>
          <div
            class="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"
          ></div>
        </div>

        <div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
          <div
            class="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-12 max-md:p-5"
          >
            <form @click.prevent>
              <div class="grid grid-cols-12 max-md:gap-y-10 md:gap-x-12 md:gap-8">
                <div class="max-md:col-span-full md:col-span-6">
                  <label
                    for="username"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Name"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>
                <div class="max-md:col-span-full md:col-span-6">
                  <label
                    for="email"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="first-name"
                    placeholder="Email"
                    class="block w-full text-sm rounded-[48px] border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="message"
                    class="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="first-name"
                    rows="10"
                    class="block w-full text-sm rounded border border-borderColor dark:border-borderColor-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none resize-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                  ></textarea>
                </div>
                <div class="mx-auto col-span-full text-center">
                  <button class="btn">Contact Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
