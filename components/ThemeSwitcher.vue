<script setup>
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <div
    class="toggle-button fixed right-5 max-lg:bottom-2.5 lg:top-1/3 z-[10000000000]"
  >
    
  </div>
</template>
