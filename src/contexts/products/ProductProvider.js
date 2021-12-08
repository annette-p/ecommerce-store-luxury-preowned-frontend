import React, {useEffect, useState} from "react";
import ProductContext from "./ProductContext";

import {
    getAllProducts,
    getProductCategories,
    getProductDesigners,
    getProductTags,
} from '../../services/products';

export default function ProductProvider(props) {

    const [categories, setCategories] = useState([]);
    const [designers, setDesigners] = useState([]);
    const [tags, setTags] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState()
    const [loaded, setLoaded] = useState(false)

    const context = {

        getCategories: () => {
            return categories;
        },

        getDesigners: () => {
            return designers;
        },

        getTags: () => {
            return tags;
        },

        // retrieve all the products
        getProducts: () => {
            return products;
        },

        // find product by ID, to retrieve a product by its id
        getProductByID: (selectedProductID) => {
            return products.filter( p => p.id === parseInt(selectedProductID))[0] 
        },

        // return the search criteria from state variable
        getSearchCriteria: () => {
            return searchCriteria;
        },

        // update the search criteria in state variable
        updateSearchCriteria: (searchText) => {
            setSearchCriteria(searchText);
            setLoaded(false);
        }
    }

    useEffect(() => {

        const loadData = async() => {
            const retrievedProducts = await getAllProducts(searchCriteria);
            setProducts(retrievedProducts);

            const retrievedCategories = await getProductCategories();
            setCategories(retrievedCategories);

            const retrievedDesigners = await getProductDesigners();
            setDesigners(retrievedDesigners);

            const retrievedTags = await getProductTags();
            setTags(retrievedTags);

            setLoaded(true);
        }
        loadData();

    }, [loaded, searchCriteria]) 

    return (
        <ProductContext.Provider value={context}>
            {props.children}  
        </ProductContext.Provider>
    )

}