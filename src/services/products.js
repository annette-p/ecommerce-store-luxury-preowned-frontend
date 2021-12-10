import axios from 'axios'

import { getRefreshToken, generateHttpAuthzHeader } from './authentication'

export async function getAllProducts(searchCriteria, filterBy) {
    /*
        "filterBy" will be an object in the following possible formats

        { "category_id": 1}
        { "designer_id": 1}
        { "tag_id": 1}

        "searchCriteria" will be a string
    */

    // By default, will list only active products
    let searchParams = {
        params: {
            "active": "true",
            "min_quantity": 1
        }
    }
    if (searchCriteria) {
        searchParams.params = { 
            ...searchParams.params, 
            search: searchCriteria }
    }

    if (filterBy) {
        searchParams.params = { 
            ...searchParams.params, 
            ...filterBy }
    }

    let response = await axios.get(`${global.apiUrl}/products`, searchParams);
    const products = response.data.data;
    return products;
}

export async function getProductCategories() {
    let response = await axios.get(`${global.apiUrl}/categories`);
    const productCategories = response.data.data;
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

export async function getProductTags() {
    let response = await axios.get(`${global.apiUrl}/tags`);
    const productTags = response.data.data;
    return productTags;
}

export async function createConsignment(designerId, categoryId, itemName, sellingPrice, 
                                        itemCondition, itemConditionDescription, itemWidth, itemHeight,
                                        itemPhoto1, itemPhoto2, itemPhoto3, itemPhoto4,
                                        itemPhoto5, itemPhoto6, itemPhoto7, itemPhoto8) {

    try {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        const newConsigmentData = {
            "designer_id": designerId,
            "category_id": categoryId,
            "name": itemName,
            "selling_price": parseInt(sellingPrice),
            "specifications": `${itemWidth}cm (width), ${itemHeight}cm (height)`,
            "condition": itemCondition,
            "condition_description": itemConditionDescription,
            "product_gallery_1": itemPhoto1 ? itemPhoto1 : null,
            "product_gallery_2": itemPhoto2 ? itemPhoto2 : null,
            "product_gallery_3": itemPhoto3 ? itemPhoto3 : null,
            "product_gallery_4": itemPhoto4 ? itemPhoto4 : null,
            "product_gallery_5": itemPhoto5 ? itemPhoto5 : null,
            "product_gallery_6": itemPhoto6 ? itemPhoto6 : null,
            "product_gallery_7": itemPhoto7 ? itemPhoto7 : null,
            "product_gallery_8": itemPhoto8 ? itemPhoto8 : null,
        }
        let response = await axios.post(`${global.apiUrl}/consignments/create`, newConsigmentData, headers);
        /*
            When a new consignment is created successfully, the response from backend api is:
            {
                "success": true,
                "message": "New consignment created successfully",
                "consignment_id": 1
            }
        */
        return response.data.consignment_id;
    } catch(err) {
        console.log("ERROR in service/products.js createConsignment(): ", err)
        throw err
    }

}
