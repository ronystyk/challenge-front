import { createRouter, createWebHistory } from 'vue-router'
import StocksView from '../views/StocksView.vue'
import RecommendationsView from '../views/RecommendationsView.vue'

const routes = [
    { path: '/', name: 'Stock list', component: StocksView, meta: { title: 'Stock list' } },
    { path: '/recommendations', name: 'Recommendations', component: RecommendationsView, meta: { title: 'Recommendations' } },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})