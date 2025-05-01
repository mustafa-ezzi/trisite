<!-- components/WhatsappFloat.vue -->
<template>
    <a
      :href="whatsAppLink"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M20.52 3.48a11.8 11.8 0 0 0-16.71 0 11.8 11.8 0 0 0-2.89 12.38L.33 23.48l7.83-1.93a11.79 11.79 0 0 0 5.63 1.44h.05c6.55 0 11.86-5.31 11.86-11.86a11.8 11.8 0 0 0-3.18-8.65zM12.16 21a9.78 9.78 0 0 1-4.91-1.34l-.35-.21-4.65 1.15 1.24-4.52-.23-.37a9.79 9.79 0 0 1 1.6-12 9.76 9.76 0 0 1 13.83 0 9.76 9.76 0 0 1 0 13.83 9.76 9.76 0 0 1-6.53 2.46z"
        />
        <path
          d="M17.47 14.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15s-.76.97-.93 1.17c-.17.2-.34.22-.63.07s-1.23-.45-2.34-1.42c-.86-.76-1.44-1.7-1.61-1.98-.17-.28-.02-.43.13-.58.13-.13.3-.34.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.2s-.48-.5-.66-.5c-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.27.3-1.06 1.04-1.06 2.55 0 1.5 1.08 2.95 1.23 3.15.15.2 2.13 3.27 5.2 4.58.73.31 1.3.49 1.74.63.73.23 1.4.2 1.92.12.58-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.18-1.41-.07-.1-.27-.17-.57-.32z"
        />
      </svg>
    </a>
  </template>
  
  <script setup>
  const whatsAppNumber = "+923354524042"; // replace with your number in international format
  const whatsAppLink = `https://wa.me/${whatsAppNumber}`;
  </script>
  