<template>
  <section class="mb-150 relative" v-motion-fadeUpAnimation>
    <div class="container relative">
      <div class="mb-12 text-center max-w-[475px] mx-auto">
        <p class="section-tagline">Contact</p>
        <h2>Let us know how we can assist you</h2>
      </div>
      <div class="relative z-10 max-w-[850px] mx-auto">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-lg:max-w-full max-md:hidden">
          <div class="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
          <div class="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"></div>
          <div class="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
        </div>

        <div class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
          <div
            class="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColor-dark p-12 max-md:p-5">
            <form @submit.prevent="sendEmail" ref="contactForm">
              <div class="grid grid-cols-12 max-md:gap-y-10 md:gap-x-12 md:gap-8">
                <div class="max-md:col-span-full md:col-span-6">
                  <label for="name" class="block text-sm font-medium text-paragraph dark:text-white mb-2">
                    Your name
                  </label>
                  <input type="text" name="name" placeholder="Name" required
                    class="block w-full text-sm rounded-[48px] border py-2.5 px-5" />
                </div>
                <div class="max-md:col-span-full md:col-span-6">
                  <label for="phone" class="block text-sm font-medium text-paragraph dark:text-white mb-2">
                    Your Phone
                  </label>
                  <input type="tel" name="user_phone" placeholder="Phone Number" required
                    class="block w-full text-sm rounded-[48px] border py-2.5 px-5" />
                </div>

                <div class="max-md:col-span-full md:col-span-6">
                  <label for="email" class="block text-sm font-medium text-paragraph dark:text-white mb-2">
                    Your Email
                  </label>
                  <input type="email" name="user_email" placeholder="Email" required
                    class="block w-full text-sm rounded-[48px] border py-2.5 px-5" />
                </div>
                <div class="col-span-full">
                  <label for="message" class="block text-sm font-medium text-paragraph dark:text-white mb-2">
                    Message
                  </label>
                  <textarea name="message" rows="10" placeholder="Type your message" required
                    class="block w-full text-sm rounded border py-2.5 px-5 resize-none"></textarea>
                </div>

                <!-- Pass current time to EmailJS -->
                <input type="hidden" name="time" :value="new Date().toLocaleString()" />

                <div class="mx-auto col-span-full text-center">
                  <button type="submit" class="btn">Contact Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showSnackbar" :class="`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${snackbarType === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`">
      {{ snackbarMessage }}
    </div>
  </section>
  <!-- Snackbar -->

</template>

<script setup>
import { ref, onMounted } from 'vue'

// Email form reference
const contactForm = ref(null)

// Snackbar state
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarType = ref('success') // 'success' or 'error'

// Init EmailJS
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
  script.onload = () => {
    emailjs.init('wXfYN9A5oQF7CwzCH') // Your actual PUBLIC KEY
  }
  document.body.appendChild(script)
})

// Snackbar trigger
function showToast(message, type = 'success') {
  snackbarMessage.value = message
  snackbarType.value = type
  showSnackbar.value = true
  setTimeout(() => {
    showSnackbar.value = false
  }, 4000) // Hide after 4 seconds
}

// Send Email
function sendEmail() {
  if (!contactForm.value) return

  emailjs
    .sendForm('service_sw5udix', 'template_fljwb28', contactForm.value)
    .then(() => {
      showToast('✅ Message sent successfully!', 'success')
      contactForm.value.reset()
    })
    .catch((error) => {
      showToast('❌ Failed to send: ' + error.text, 'error')
    })
}

</script>