<script setup>
import data from "@/data/data.json";
const { destinations } = data;
</script>

<template>
  <h1 class="text-xl">All Destinations</h1>
  <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    <RouterLink
      v-for="{ id, name, slug, image } in destinations"
      :key="id"
      :to="slug"
    >
      <h2 class="mb-5">{{ name }}</h2>
      <img class="w-full" :src="`/images/${image}`" :alt="name" />
    </RouterLink>
  </div>
</template>
