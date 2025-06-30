<template>
    <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer disabled:cursor-none">
        <div class="flex gap-2">
            <button class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" :disabled="currentPage <= 1"
                @click="goTo(currentPage - 1)">
                ← Previous
            </button>

            <button class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer disabled:cursor-none" :disabled="currentPage >= totalPages"
                @click="goTo(currentPage + 1)">
                Next →
            </button>
        </div>

        <div class="text-sm flex items-center gap-2">
            Page {{ currentPage }} of {{ totalPages }}

            <label class="ml-4">
                Size:
                <select class="ml-1 px-2 py-1 border rounded" :value="pageSize" @change="updatePageSize($event)">
                    <option v-for="size in [5, 10, 20, 50]" :key="size" :value="size">
                        {{ size }}
                    </option>
                </select>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    currentPage: number
    totalPages: number
    pageSize: number
}>()

const emit = defineEmits<{
    (e: 'page-change', newPage: number): void
    (e: 'page-size-change', newSize: number): void
}>()

function goTo(page: number) {
    emit('page-change', page)
}

function updatePageSize(event: Event) {
    const size = parseInt((event.target as HTMLSelectElement).value)
    emit('page-size-change', size)
}
</script>