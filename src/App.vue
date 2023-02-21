<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <main class="container mx-auto max-w-6xl mt-36">
      <RouterView v-slot="{ Component, route }">
        <Transition name="slide" mode="out-in">
          <div :key="route.path">
            <component :is="Component"/>
          </div>
        </Transition>
      </RouterView>
  </main>
</template>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
