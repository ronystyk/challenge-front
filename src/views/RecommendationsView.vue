<template>
    <AppLayout>
        <div class="p-6">
            <h1 class="text-3xl font-bold mb-6">📊 Smart recommendations</h1>

            <div v-if="store.loading" class="text-center text-gray-500">Cargando...</div>
            <div v-else-if="store.error" class="text-red-500 text-center">{{ store.error }}</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <RecommendationCard
                    v-for="stock in store.items"
                    :key="stock.ticker + stock.time"
                    :stock="stock"
                    :index="store.items.indexOf(stock)"
                />
            </div>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
    import AppLayout from '../layouts/AppLayout.vue'
    import { onMounted } from 'vue';
    import { useRecommendationStore } from '../stores/recommendation';
    import RecommendationCard from '../components/RecommendationCard.vue';

    const store = useRecommendationStore();

    onMounted(() => {
        store.fetchRecommendations();
    });
</script>
