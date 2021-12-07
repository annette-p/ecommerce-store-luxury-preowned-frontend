import React, {useEffect, useState} from "react";
import ProductContext from "./ProductContext";

import {
    getAllProducts
} from '../../services/products';

export default function ProductProvider(props) {

    // const [products, setProducts] = useState([
    //     {
    //       id: 1,
    //       designer: "Dior1",
    //       name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
    //       price: "3,500",
    //       retail_price: "3,500",
    //       condition: "Used like new"
    //     },
    //     {
    //         id: 2,
    //         designer: "Dior2",
    //         name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
    //         price: "4,500",
    //         retail_price: "4,500",
    //         condition: "new with tag"
    //     },
    //     {
    //         id: 3,
    //         designer: "Dior3",
    //         name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
    //         price: "5,500",
    //         retail_price: "5,500",
    //         condition: "Used twice"
    //     },
    //     {
    //         id: 4,
    //         designer: "Dior4",
    //         name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
    //         price: "6,500",
    //         retail_price: "6,500",
    //         condition: "Used like new"
    //     }
    // ]);
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const context = {

        // retrieve all the products
        getProducts: () => {
            return products;
        },

        // find product by ID, to retrieve a product by its id
        getProductByID: (selectedProductID) => {
            return products.filter( p => p.id === parseInt(selectedProductID))[0] 
        },
    }

    useEffect(() => {

        const loadData = async() => {
            const products = await getAllProducts();
            setProducts(products);

            setLoaded(true);
        }
        loadData();

    }, [loaded]) 

    return (
        <ProductContext.Provider value={context}>
            {props.children}  
        </ProductContext.Provider>
    )

}