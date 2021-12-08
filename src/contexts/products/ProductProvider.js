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
    const [searchCriteria, setSearchCriteria] = useState();
    const [filterBy, setFilterBy] = useState();
    const [loaded, setLoaded] = useState(false);

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
        },

        getFilterBy: () => {
            return filterBy;
        },

        setFilterBy: (filter) => {
            setFilterBy(filter);
            setLoaded(false);
        }
    }

    useEffect(() => {

        const loadData = async() => {
            const retrievedProducts = await getAllProducts(searchCriteria, filterBy);
            setProducts(retrievedProducts);

            const retrievedCategories = await getProductCategories();
            retrievedCategories.sort( function(category1, category2) {
                let categoryName1 = category1.name.toLowerCase();
                let categoryName2 = category2.name.toLowerCase();
    
                return categoryName1.localeCompare(categoryName2);
            })
            setCategories(retrievedCategories);

            const retrievedDesigners = await getProductDesigners();
            retrievedDesigners.sort( function(designer1, designer2) {
                let designerName1 = designer1.name.toLowerCase();
                let designerName2 = designer2.name.toLowerCase();
    
                return designerName1.localeCompare(designerName2);
            })
            setDesigners(retrievedDesigners);

            const retrievedTags = await getProductTags();
            setTags(retrievedTags);

            setLoaded(true);
        }
        loadData();

    }, [loaded, searchCriteria, filterBy]) 

    return (
        <ProductContext.Provider value={context}>
            {props.children}  
        </ProductContext.Provider>
    )

}