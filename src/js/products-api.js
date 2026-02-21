import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com/products';

export async function getCategories() {
    const response = await axios.get('/category-list')
    response.data.unshift('All');
    return response.data;
}

export async function getProducts(currentPage = 1) {
    const response = await axios.get(`?limit=12&skip=${(currentPage - 1) * 12}`)
    return response.data;
}

export async function getProductsByCategory(category, currentPage = 1) {
    const response = await axios.get(`/category/${category}?limit=12&skip=${(currentPage - 1) * 12}`)
    return response.data;
}