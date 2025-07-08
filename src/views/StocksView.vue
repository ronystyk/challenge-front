<template>
    <AppLayout>
        <div v-if="store.loading" class="text-center text-gray-500">Cargando...</div>
        <div v-if="store.error" class="text-red-500 text-center">{{ store.error }}</div>
        <div v-else class="p-6">
            <div class="mb-4 flex justify-between items-center">
                <h1 class="text-2xl font-bold mb-4">📈 Stock list</h1>
                <input v-model="search" @keyup="onSearch" type="text" placeholder="Search by ticker or company..."
                    class="w-full sm:w-1/2 md:w-md px-4 py-2 border rounded" />
            </div>
            <table class="table-auto w-full border">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-2 py-1">Ticker</th>
                        <th class="px-2 py-1">Company</th>
                        <th class="px-2 py-1">Broker</th>
                        <th class="px-2 py-1">Action</th>
                        <th class="px-2 py-1">Rating</th>
                        <th class="px-2 py-1">Target</th>
                        <th class="px-2 py-1">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stock in stocks" :key="stock.ticker" class="border-t">
                        <td class="px-2 py-1">{{ stock.ticker }}</td>
                        <td class="px-2 py-1">{{ stock.company }}</td>
                        <td class="px-2 py-1">{{ stock.brokerage }}</td>
                        <td class="px-2 py-1">{{ stock.action }}</td>
                        <td class="px-2 py-1">{{ stock.rating_from }} → {{ stock.rating_to }}</td>
                        <td class="px-2 py-1">{{ stock.target_from }} → {{ stock.target_to }}</td>
                        <td class="px-2 py-1">{{ new Date(stock.time).toLocaleDateString() }}</td>
                    </tr>
                </tbody>
            </table>
            <Pagination :current-page="store.page" :total-pages="store.totalPages"
                :page-size="store.pageSize" @page-change="store.setPage"
                @page-size-change="store.setPageSize" />
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
    import AppLayout from '../layouts/AppLayout.vue'
    import Pagination from '../components/Pagination.vue'
    import { computed, onMounted, ref } from 'vue'
    import { useStockStore } from '../stores/stockStore'
    
    const store = useStockStore();
    const search = ref('');

    onMounted(() => {
        store.loadStocks();
    });
    function onSearch() {
        store.setFilter(search.value)
    }
    const stocks = computed(() => store.stocks);

</script>
