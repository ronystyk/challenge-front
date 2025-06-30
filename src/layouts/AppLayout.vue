<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-gray-800 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <h1 class="text-xl font-bold">Challenge: Vue + Go</h1>
      <nav class="space-x-4">
        <RouterLink to="/" class="hover:underline">Stock list</RouterLink>
        <RouterLink to="/recommendations" class="hover:underline">Recommendations</RouterLink>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>