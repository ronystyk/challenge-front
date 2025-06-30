import axios from 'axios'
import type { Stock } from '../types/Stock'
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchStocks = async (page = 1, pageSize = 10, filter?: string) => {
    const response = await axios.get<{ stocks: Stock[], total: number }>(
        `${baseUrl}/stocks?page=${page}&limit=${pageSize}${filter ? `&filter=${encodeURIComponent(filter)}` : ''}`
    )
    return response.data
}

export const fetchRecommendations = async () => {
    const response = await axios.get<{ recommendations: Stock[], }>(`${baseUrl}/recommendations`)
    return response.data
}