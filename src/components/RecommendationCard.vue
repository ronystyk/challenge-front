<template>
    <div class="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition relative">
        <RecommendationBadge :rank="index + 1" />
        <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-bold">{{ stock.company }}</h2>
            <span class="text-sm text-gray-500">{{ stock.ticker }}</span>
        </div>
        <div class="text-sm text-gray-700">
            <p><strong>Broker:</strong> {{ stock.brokerage }}</p>
            <p><strong>Rating:</strong> {{ stock.rating_from }} → {{ stock.rating_to }}</p>
            <p><strong>Potential:</strong> {{ formatPercent(potential()) }}</p>
            <!-- <p><strong>Date:</strong> {{ formatDate(stock.time) }}</p> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import RecommendationBadge from './RecommendationBadge.vue';
const { stock } = defineProps<{
    stock: {
        ticker: string;
        company: string;
        brokerage: string;
        rating_from: string;
        rating_to: string;
        target_from: number;
        target_to: number;
        time: string;
    };
    index: number;
}>();

function potential() {
    const { target_from, target_to } = stock;
    if (target_from && target_to) {
        return ((target_to - target_from) / target_from) * 100;
    }
    return 0;
}

function formatPercent(value: number) {
    return `${value.toFixed(2)}%`;
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString();
}
</script>