<script setup>
import data from "@/data/data.json";

</script>

<template>
  <h1 class="text-xl">All Destinations</h1>
  <section class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    <RouterLink
      v-for="{ id, name, slug, image } in data.destinations"
      :key="id"
      :to="{name: 'destination', params: {id, slug}}"
    >
      <h2 class="mb-5">{{ name }}</h2>
      <img class="w-full rounded shadow-lg" :src="`/images/${image}`" :alt="name" />
    </RouterLink>
  </section>
</template>
