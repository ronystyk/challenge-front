<template>
  <span
    :class="'absolute bottom-[8px] right-[8px] ' + badgeClass"
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm"
  >
    <span class="mr-1">{{ emoji }}</span> Top {{ rank }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { rank } = defineProps<{
  rank: number
}>()

const badgeClass = computed(() => {
  if (rank === 1) return 'bg-yellow-400 text-white'
  if (rank === 2) return 'bg-gray-400 text-white'
  if (rank === 3) return 'bg-amber-700 text-white'
  return 'bg-blue-100 text-blue-800'
})

const emoji = computed(() => {
  if (rank === 1) return '🥇'
  if (rank === 2) return '🥈'
  if (rank === 3) return '🥉'
  return '🏅'
})
</script>