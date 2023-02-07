<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <main class="container mx-auto max-w-5xl mt-10">
    <RouterView />
  </main>
</template>
