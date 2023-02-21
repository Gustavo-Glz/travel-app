<script setup>
import data from "@/data/data.json";

const { destinations } = data;


</script>
<template>
  <header class="bg-gray-700 w-full py-10 fixed top-0 left-0 right-0 mb-0 z-20">
    <nav class="container mx-auto max-w-6xl flex items-center gap-5 text-white font-bold">
      <RouterLink class="text-xl" to="/">Travel App</RouterLink>
      <RouterLink
        class="opacity-70"
        v-for="{ id, name, slug } in destinations"
        :key="id"
        :to="{name: 'destination', params: {id, slug}}"
      >
        {{ name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="pcss" scoped>
.router-link-active {
  @apply opacity-100 border-b-2 border-white;
}
</style>
