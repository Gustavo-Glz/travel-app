<template>
  <header class="bg-gray-700 w-full py-10">
    <nav class="container mx-auto max-w-5xl flex gap-5 text-white font-bold">
      <RouterLink class="opacity-70 hover:opacity-100" to="/">Home</RouterLink>
      <RouterLink class="opacity-70 hover:opacity-100" to="/brazil">Brazil</RouterLink>
      <RouterLink class="opacity-70 hover:opacity-100" to="/hawai">Hawai</RouterLink>
      <RouterLink class="opacity-70 hover:opacity-100" to="/jamaica">Jamaica</RouterLink>
      <RouterLink class="opacity-70 hover:opacity-100" to="/panama">Panama</RouterLink>
    </nav>
  </header>
</template>

<style lang="pcss" scoped>
.router-link-active {
  @apply opacity-100 border-b-2 border-white;
}
</style>