import React, {useState} from "react";
import ProductContext from "./ProductContext";

export default function ProductProvider(props) {

    const [products, setProducts] = useState([
        {
          id: 1,
          designer: "Dior1",
          name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
          price: "3,500",
          retail_price: "3,500"
        },
        {
            id: 2,
            designer: "Dior2",
            name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
            price: "4,500",
            retail_price: "4,500"
        },
        {
            id: 3,
            designer: "Dior3",
            name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
            price: "5,500",
            retail_price: "5,500"
        },
        {
            id: 4,
            designer: "Dior4",
            name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
            price: "6,500",
            retail_price: "6,500"
        }
    ]);

    const context = {

        // retrieve all the products
        getProducts:() => {
            return products;
        },

        // find product by ID, to retrieve a product by its id
        getProductByID: (selectedProductID) => {
            return products.filter( p => p.id === parseInt(selectedProductID))[0] 
        },

        test: () => {
            setProducts(products)
        }

    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}  
        </ProductContext.Provider>
    )

}