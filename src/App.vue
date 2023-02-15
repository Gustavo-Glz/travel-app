<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <main class="container mx-auto max-w-6xl mt-10">
    <RouterView :key="$route.path" />
  </main>
</template>
