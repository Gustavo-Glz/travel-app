<script setup>
const { experience } = defineProps({
  experience: {
    type: Object,
    required: true
  },
  })
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg hover:scale-105 cursor-pointer transition-all ease-out duration-300" >
    <img class="block object-cover w-full h-36" :src="`/images/${ experience.image}`" :alt="experience.name">
    <span class="block bg-gray-800 text-white border-t-2 border-gray-600 p-2">{{ experience.name }}</span>
  </div>
</template>