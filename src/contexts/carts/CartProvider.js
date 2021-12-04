import React, {useState} from "react";
import CartContext from "./CartContext";

export default function CartProvider(props) {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            cart_id: 1,
            quantity: 1
        },
        {
            id: 2,
            cart_id: 2,
            quantity: 4
        },
        // {
        //     id: 3,
        //     cart_id: 3,
        //     quantity: 1
        // }
    ]);


    const context = {

        getCartItems:() => {
            return cartItems;
        },

        // add cart 


        // delete items in cart  


        // update quantity 


        // total items ordered 


        // total amount order
        
        
        test: () => {
            setCartItems(cartItems)
        }

    }

    return (
        <CartContext.Provider value={context}>
            {props.children}  
        </CartContext.Provider>
    )

}