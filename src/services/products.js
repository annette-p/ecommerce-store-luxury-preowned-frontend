import axios from 'axios'

// import { getRefreshToken, generateHttpAuthzHeader } from './authentication'

export async function getProductCategories() {
    let response = await axios.get(`${global.apiUrl}/categories`);
    const productCategories = response.data.data;
    console.log("xxx productCategories: ", productCategories)
    return productCategories;
}

export async function getProductDesigners() {
    let response = await axios.get(`${global.apiUrl}/designers`);
    const productDesigners = response.data.data;
    return productDesigners;
}

export async function getProductConditions() {
    let response = await axios.get(`${global.apiUrl}/products/conditions`);
    const productConditions = response.data.data;
    return productConditions;
}
