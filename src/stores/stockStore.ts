import { defineStore } from 'pinia'
import { fetchStocks } from '../services/stockService'
import type { Stock } from '../types/Stock'

export const useStockStore = defineStore('stock', {
    state: () => ({
        stocks: [] as Stock[],
        total: 0,
        loading: false,
        page: 1,
        pageSize: 10,
        filter: '',
        error: null as string | null,
    }),
    actions: {
        async loadStocks() {
            // this.loading = true
            this.error = null;
            try {
                const data = await fetchStocks(this.page, this.pageSize, this.filter)
                this.stocks = data.stocks
                this.total = data.total
            } catch (err: any) {
                this.error = 'Unable to fetch stocks. Please try again later.'
                console.error(err); 
            } finally {
                // this.loading = false
            }
        },
        setPage(newPage: number) {
            this.page = newPage
            this.loadStocks()
        },
        setPageSize(newSize: number) {
            this.pageSize = newSize
            this.page = 1 
            this.loadStocks()
        },
        setFilter(newFilter: string) {
            this.filter = newFilter
            this.page = 1
            this.loadStocks()
        }
    },
    getters: {
        totalPages: (state) => Math.ceil(state.total / state.pageSize),
    }
})