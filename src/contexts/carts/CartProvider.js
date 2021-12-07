import React, {useEffect, useState} from "react";
import CartContext from "./CartContext";

import {
    addItemToCart,
    getCartId,
    getCartItems,
    updateCartItemQuantity
} from '../../services/cart';

export default function CartProvider(props) {

    const [cartItems, setCartItems] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        const loadData = async() => {
            if (loaded === false) {
                const cartId = getCartId();
                if (cartId) {
                    const cartItems = await getCartItems(cartId);
                    setCartItems(cartItems);
                }
                setLoaded(true);
            }
        }
        loadData();

    }, [loaded]) 


    const context = {

        getCartId: () => {
            return getCartId();
        },

        // get items in the cart 
        getCartItems: () => {
            return cartItems;
        },

        // add new item to cart
        addProductToCart: async (product_id, quantity) => {
            try {
                let cartIdUpdated = await addItemToCart(product_id, quantity);
                if (cartIdUpdated) {
                    setLoaded(false);
                    return true;
                } else {
                    return false;
                }
                
            } catch(_err) {
                return false;
            }
            // let newCartItem = {
            //   id: id, 
            //   cart_id: cart_id,
            //   quantity: quantity
            // };
            // let clone = [...cartItems, newCartItem];
            // setCartItems(clone);
        }, 

        updateCartQuantity: async (productId, newQuantity) => {
            let updateSuccess = await updateCartItemQuantity(productId, newQuantity)
            setLoaded(false);
            return updateSuccess;
        }

    }

    return (
        <CartContext.Provider value={context}>
            {props.children}  
        </CartContext.Provider>
    )

}