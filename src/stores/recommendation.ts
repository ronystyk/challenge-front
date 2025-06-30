import { defineStore } from 'pinia';
import { fetchRecommendations } from '../services/stockService';

export const useRecommendationStore = defineStore('recommendation', {
  state: () => ({
    items: [] as any[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchRecommendations() {
      this.loading = true;
      this.error = null;
      try {
        const data = await fetchRecommendations();
        this.items = data.recommendations;
      } catch (err: any) {
        this.error = 'Unable to fetch recommendations. Please try again later.';
        console.error(err); 
      } finally {
        this.loading = false;
      }
    },
  },
});