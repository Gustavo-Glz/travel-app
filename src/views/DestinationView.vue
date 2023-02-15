<script setup>
import { computed } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import data from "@/data/data.json";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const destination = computed(() =>
  data.destinations.find((destination) => destination.id === props.id)
);
</script>

<template>
  <section v-if="destination" class="flex flex-col gap-5 justify-between">
    <h1 class="text-xl">{{ destination.name }}</h1>
    <div class="flex flex-col gap-5 items-center md:flex-row">
      <img
        class="border-4 border-white rounded shadow-xl w-full"
        :src="`/images/${destination.image}`"
        :alt="destination.name"
      />
      <p class="text-sm text-gray-700">{{ destination.description }}</p>
    </div>
  </section>
  <section class="mt-10">
    <h2 class="text-lg font-bold">Top Experiences in {{ destination.name }}</h2>
    <div class="grid grid-cols-2 gap-5 text-center mt-5 mb-5 md:grid-cols-4">
      <RouterLink
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name: 'experience.show', params: { experienceSlug: experience.slug }}"
      >
        <ExperienceCard :experience="experience" />
      </RouterLink>
    </div>
  </section>
</template>
