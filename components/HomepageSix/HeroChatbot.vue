<template>
  <section
    class="bg-white dark:bg-dark-300 relative max-lg:pt-[160px] max-lg:pb-25 pt-[230px] max-md:pb-[70px] pb-[140px]"
  >
    <div class="container">
      <div class="grid grid-cols-12 items-center relative z-10 max-lg:gap-y-10">
        <div
          class="col-span-12 md:col-span-6 lg:col-span-5"
          v-motion-fadeUpAnimation
        >
          <p class="max-lg:mb-4 mb-8 font-medium uppercase">CHATBOT</p>
          <h1 class="mb-12 max-md:mb-8">
            Chat automation <br />
            with no coding.
          </h1>
          <p class="mb-12 max-md:mb-8">
            Discover the next level of customer engagement with our intuitive
            AI-driven solution today.
          </p>
          <form>
            <div
              class="grid grid-cols-12 items-center border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColor pl-4 sm:pl-5 pe-1 pt-1 pb-1 max-w-[520px] w-full focus-within:border-primary dark:focus-within:border-primary duration-300 transition-all"
            >
              <input
                type="email"
                placeholder="Enter your email"
                class="col-span-8 xs:col-span-8 bg-transparent outline-none placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none leading-[1.75]"
              />
              <button
                class="btn col-span-4 xs:col-span-4 max-1xl:!px-3 max-1xl:!text-sm"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-7 xl:ml-25">
          <div class="relative flex align-center justify-center">
            <div>
              <div
                class="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10"
              >
                <div
                  class="w-full h-[502px] rounded-full bg-primary-200/25 blur-[145px]"
                ></div>
              </div>
              <div
                class="relative w-[296px] h-[566px] md:w-[200px] md:h-[375px] lg:w-[296px] lg:h-[566px]"
              >
                <div class="w-full h-full" v-motion-fadeUpVisibleAnimation>
                  <NuxtImg
                    src="/images/home-6-img/chatbot-hero.png"
                    alt="chatbot-hero-dark"
                    class="w-full h-full dark:hidden"
                  />
                  <NuxtImg
                    src="/images/home-6-img/chatbot-hero-dark.png"
                    alt="chatbot-hero-dark"
                    class="w-full h-full hidden dark:inline-block"
                  />
                </div>
                <div
                  v-motion-fadeUpVisibleAnimation2
                  class="absolute max-md:w-auto max-md:h-auto max-xs:top-[230px] max-md:top-[170px] max-xs:left-[-30px] max-lg:-left-25 max-lg:top-[90px] max-lg:w-[200px] max-1xl:left-[-120px] max-1xl:w-[300px] max-1xl:h-[300px] top-[170px] left-[-220px]"
                >
                  <NuxtImg
                    src="images/home-6-img/chatbot-hero-shape-1.png"
                    alt="shapes"
                    class="dark:hidden"
                    sizes="1000"
                  />
                  <NuxtImg
                    src="images/home-6-img/chatbot-hero-shape-1-dark.png"
                    alt="shapes"
                    class="hidden dark:inline-block"
                    sizes="1000"
                  />
                </div>
                <div
                  v-motion-fadeUpVisibleAnimation2
                  class="absolute max-md:w-auto max-md:h-auto max-md:top-[150px] max-xs:right-[-40px] max-lg:top-[90px] max-lg:w-[180px] max-1xl:w-[220px] top-[150px] right-[-100px]"
                >
                  <NuxtImg
                    src="images/home-6-img/chatbot-hero-shape-2.png"
                    alt="shapes"
                    class="dark:hidden"
                    sizes="1000"
                  />
                  <NuxtImg
                    src="images/home-6-img/chatbot-hero-shape-2-dark.png"
                    alt="shapes"
                    class="hidden dark:inline-block"
                    sizes="1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
