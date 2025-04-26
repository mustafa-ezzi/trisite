// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: true,
  pages: true,
  css: ["~/assets/scss/theme.scss", "~/assets/scss/_tailwind.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
  ],
  app: {
    head: {
      title: "Trisite Solutions",
      
      meta: [
        {
          name: "Trisite",
          content:
            "Trisite is an exceptional Next js template tailored for SaaS landing websites. Embodying the essence of modern SaaS platforms.",
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  // vueuse/motion
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          // FadeUpSpring Animation
          fadeUpSpringHero: {
            initial: {
              y: 100,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 700,
                ease: "liner",
              },
            },
          },
          // FadeUpAnimation
          fadeUpAnimation: {
            initial: {
              y: 100,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 700,
                delay: 100,
              },
            },
          },
          // FadeUpVisibleAnimation
          fadeUpVisibleAnimation: {
            initial: {
              y: 100,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 700,
                delay: 100,
              },
            },
          },
          // FadeUpVisibleAnimation2
          fadeUpVisibleAnimation2: {
            initial: {
              y: 200,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 800,
                delay: 200,
              },
            },
          },
          // FadeFromLeftAnimation
          fadeFromLeftAnimation: {
            initial: {
              x: -100,
              opacity: 0,
            },
            visibleOnce: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 900,
                delay: 200,
              },
            },
          },
          // FadeFromRightAnimation
          fadeFromRightAnimation: {
            initial: {
              x: 100,
              opacity: 0,
            },
            visibleOnce: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 900,
                delay: 200,
              },
            },
          },
          // FadeFromRightAnimation2
          fadeFromRightAnimation2: {
            initial: {
              x: 100,
              opacity: 0,
            },
            visibleOnce: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 900,
                delay: 400,
              },
            },
          },
          // FadeFromRightAnimation3
          fadeFromRightAnimation3: {
            initial: {
              x: 100,
              opacity: 0,
            },
            visibleOnce: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 900,
                delay: 600,
              },
            },
          },
        },
      },
    },
  },
});
