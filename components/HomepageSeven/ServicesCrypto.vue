<script setup>
import CounterAnimation from "~/utils/CounterAnimation.vue";
</script>

<template>
  <section class="pt-150 relative">
    <div class="container relative">
      <div class="text-center mb-14">
        <p class="section-tagline mb-3">Our services</p>

        <h2 class="mb-12">
          Comprehensive Guide to Cryptocurrency Services <br />
          Aplio.
        </h2>
      </div>

      <div class="flex max-md:flex-col gap-8 items-center relative z-50">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden"
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
        <div class="max-md:w-full w-[32%]" v-motion-fadeFromLeftAnimation>
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
            >
              <div
                class="bg-white dark:bg-dark-200 rounded-full max-lg:p-2 p-2.5 shadow-nav inline-block mb-6"
              >
                <div
                  class="border border-dashed rounded-full border-gray-100 dark:border-borderColor-dark p-5 h-full max-lg:p-5"
                >
                  <NuxtImg
                    src="/images/home-7-img/wallet.svg"
                    sizes="1000"
                    alt="account icon"
                    class="dark:hidden w-[30px] aspect-square"
                  />
                  <NuxtImg
                    src="/images/home-7-img/wallet-dark.svg"
                    sizes="1000"
                    alt="account icon"
                    class="hidden dark:inline-block w-[30px] aspect-square"
                  />
                </div>
              </div>
              <div class="mb-8">
                <h3 class="mb-6 leading-8">Wallets</h3>
                <p>
                  Software Wallets: Coinbase Wallet, MetaMask, Trust Wallet.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="mb-2.5 leading-8">10/24</h3>
                  <p>Use Strong Passwords</p>
                </div>
                <div>
                  <div class="relative size-[70px] shrink-0">
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M70 35.0006C70 54.3306 54.33 70.0006 35 70.0006C15.67 70.0006 0 54.3306 0 35.0006C0 15.6706 15.67 0.000610352 35 0.000610352C54.33 0.000610352 70 15.6706 70 35.0006ZM7.6939 35.0006C7.6939 50.0813 19.9193 62.3067 35 62.3067C50.0807 62.3067 62.3061 50.0813 62.3061 35.0006C62.3061 19.9199 50.0807 7.69452 35 7.69452C19.9193 7.69452 7.6939 19.9199 7.6939 35.0006Z"
                        fill=""
                        class="fill-[#E8F0D8] dark:fill-[#2F3524]"
                      ></path>
                      <path
                        d="M35 3.92036C35 1.75554 36.7605 -0.0220878 38.9117 0.219847C45.1582 0.922339 51.1265 3.29801 56.1704 7.12926C62.2592 11.7541 66.6659 18.2456 68.7171 25.6113C70.7682 32.9771 70.351 40.8119 67.529 47.9182C65.1913 53.805 61.3099 58.9235 56.3256 62.7535C54.609 64.0725 52.1831 63.4607 51.0642 61.6074C49.9453 59.7542 50.5633 57.365 52.2363 55.9912C55.7742 53.086 58.5378 49.3188 60.243 45.0248C62.4328 39.5103 62.7567 33.4304 61.1649 27.7144C59.5732 21.9985 56.1535 16.961 51.4286 13.3721C47.7494 10.5775 43.4365 8.78084 38.9062 8.12245C36.7639 7.8111 35 6.08518 35 3.92036Z"
                        fill=""
                        class="fill-primary"
                      ></path>
                    </svg>
                    <h3
                      class="text-base absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center"
                    >
                      <CounterAnimation :number="parseInt(40)" />
                      %
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
            >
              <div
                class="bg-white dark:bg-dark-200 rounded-full max-lg:p-2 p-2.5 shadow-nav inline-block mb-6"
              >
                <div
                  class="border border-dashed rounded-full border-gray-100 dark:border-borderColor-dark p-5 h-full max-lg:p-5"
                >
                  <NuxtImg
                    src="/images/home-7-img/sales.svg"
                    sizes="1000"
                    alt="account icon"
                    class="dark:hidden w-[30px] aspect-square"
                  />
                  <NuxtImg
                    src="/images/home-7-img/sales-dark.svg"
                    sizes="1000"
                    alt="account icon"
                    class="hidden dark:inline-block w-[30px] aspect-square"
                  />
                </div>
              </div>
              <div>
                <h3 class="mb-6 leading-8">Crypto Lending</h3>
                <p>Centralized Lending: Blockfi, Celsius Network, Nexo.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-motion-fadeUpVisibleAnimation
          class="max-md:w-full w-[36%] flex flex-col items-center justify-center"
        >
          <NuxtImg
            src="/images/home-7-img/service-score.png"
            sizes="1000"
            alt="service-score"
            class="dark:hidden max-w-full mb-8"
          />
          <NuxtImg
            src="/images/home-7-img/service-score-dark.png"
            sizes="1000"
            alt="service-score"
            class="hidden dark:inline-block max-w-full mb-12"
          />

          <NuxtImg
            src="/images/home-7-img/service-card.png"
            sizes="1000"
            alt="service-card"
            class="max-w-full"
          />
        </div>
        <div class="max-md:w-full w-[32%]" v-motion-fadeFromRightAnimation>
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
            >
              <div
                class="bg-white dark:bg-dark-200 rounded-full max-lg:p-2 p-2.5 shadow-nav inline-block mb-6"
              >
                <div
                  class="border border-dashed rounded-full border-gray-100 dark:border-borderColor-dark p-5 h-full max-lg:p-5"
                >
                  <NuxtImg
                    src="/images/home-7-img/exchange.svg"
                    sizes="1000"
                    alt="account icon"
                    class="dark:hidden w-[30px] aspect-square"
                  />
                  <NuxtImg
                    src="/images/home-7-img/exchange-dark.svg"
                    sizes="1000"
                    alt="account icon"
                    class="hidden dark:inline-block w-[30px] aspect-square"
                  />
                </div>
              </div>
              <div>
                <h3 class="mb-6 leading-8">Exchanges</h3>
                <p>Decentralized Exchanges: Uniswap, SushiSwap, PancakeSwap.</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav"
          >
            <div
              class="border border-dashed rounded border-gray-100 dark:border-borderColor-dark max-lg:p-5 p-10"
            >
              <div
                class="bg-white dark:bg-dark-200 rounded-full max-lg:p-2 p-2.5 shadow-nav inline-block mb-6"
              >
                <div
                  class="border border-dashed rounded-full border-gray-100 dark:border-borderColor-dark p-5 h-full max-lg:p-5"
                >
                  <NuxtImg
                    src="/images/home-7-img/payment.svg"
                    sizes="1000"
                    alt="account icon"
                    class="dark:hidden w-[30px] aspect-square"
                  />
                  <NuxtImg
                    src="/images/home-7-img/payment-dark.svg"
                    sizes="1000"
                    alt="account icon"
                    class="hidden dark:inline-block w-[30px] aspect-square"
                  />
                </div>
              </div>
              <div class="mb-8">
                <h3 class="mb-6 leading-8">Payment Services</h3>
                <p>
                  Crypto Payment Gateways: BitPay, CoinGate, Coinbase Commerce.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="mb-2.5 leading-8">13/24</h3>
                  <p>Security Measures</p>
                </div>
                <div>
                  <div class="relative size-[70px] shrink-0">
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M70 35.0018C70 54.3318 54.33 70.0018 35 70.0018C15.67 70.0018 0 54.3318 0 35.0018C0 15.6719 15.67 0.00183105 35 0.00183105C54.33 0.00183105 70 15.6719 70 35.0018ZM7.6939 35.0018C7.6939 50.0826 19.9193 62.3079 35 62.3079C50.0807 62.3079 62.3061 50.0826 62.3061 35.0018C62.3061 19.9211 50.0807 7.69574 35 7.69574C19.9193 7.69574 7.6939 19.9211 7.6939 35.0018Z"
                        class="fill-[#E8F0D8] dark:fill-[#2F3524]"
                      ></path>
                      <path
                        d="M35 3.92158C35 1.75676 36.7604 -0.0208492 38.9116 0.221094C43.0933 0.691391 47.1669 1.91326 50.9327 3.83858C55.8652 6.36037 60.1286 10.017 63.3723 14.5077C66.6161 18.9984 68.7476 24.1949 69.5915 29.6699C70.4354 35.145 69.9677 40.7422 68.2267 46.0012C66.4858 51.2602 63.5213 56.0309 59.5772 59.9209C55.6331 63.8109 50.8219 66.7092 45.5393 68.3773C40.2567 70.0454 34.6536 70.4358 29.1908 69.5164C25.02 68.8144 21.0219 67.3642 17.3856 65.2464C15.515 64.1569 15.163 61.6801 16.4547 59.9428C17.7464 58.2056 20.1918 57.8731 22.0967 58.9016C24.7103 60.3126 27.5456 61.2897 30.492 61.7856C34.7312 62.4991 39.0793 62.1962 43.1787 60.9017C47.278 59.6072 51.0116 57.3581 54.0723 54.3394C57.133 51.3207 59.4334 47.6186 60.7844 43.5375C62.1354 39.4564 62.4984 35.1129 61.8435 30.8642C61.1886 26.6155 59.5345 22.5829 57.0173 19.0981C54.5001 15.6132 51.1917 12.7757 47.364 10.8187C44.7037 9.45859 41.8455 8.55087 38.9062 8.1237C36.7639 7.81235 35 6.0864 35 3.92158Z"
                        fill=""
                        class="fill-primary"
                      ></path>
                    </svg>

                    <h3
                      class="text-base absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center"
                    >
                      <CounterAnimation :number="parseInt(60)" />
                      %
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
