<script setup>
import { computed } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";
import data from "@/data/data.json";

const { id, slug, experienceSlug } = defineProps({
  id: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
  },
  experienceSlug: {
    type: String,
  }
});

const destination = computed(() =>
  data.destinations.find((destination) => destination.id === id)
);
</script>

<template>
  <div>
    <section v-if="destination" class="flex flex-col gap-5 justify-between">
      <h1 class="text-xl font-bold">{{ destination.name }}</h1>
      <GoBack />
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
      <h2 class="text-xl font-bold">Top Experiences in {{ destination.name }}</h2>
      <div class="grid grid-cols-2 gap-5 text-center mt-5 mb-5 lg:grid-cols-4">
        <RouterLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params: { experienceSlug: experience.slug }}"
        >
          <ExperienceCard :experience="experience" />
        </RouterLink>
      </div>
      <RouterView /> 
    </section>
  </div>
</template>
