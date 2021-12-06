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
        {
            id: 3,
            cart_id: 3,
            quantity: 1
        }
    ]);

    // const [ increment, setiIncrement ] = useState();


    const context = {

        // get items in the cart 
        getCartItems:() => {
            return cartItems;
        },

        // add new item to cart
        addProductToCart: (id, cart_id, quantity) => {
            let newCartItem = {
              id: id, 
              cart_id: cart_id,
              quantity: quantity
            };
            let clone = [...cartItems, newCartItem];
            setCartItems(clone);
        }, 


        // delete items in cart  


        // update quantity (add or minus) of cart items (id here = product id )
        increment: (id) =>{
            let updatedCartItems = cartItems.map( item => {
                if (item.id === id) {
                    item.quantity = item.quantity + 1
                }
                return item
            })
            console.log(id)
            console.log(updatedCartItems)
            setCartItems(updatedCartItems);
        },

        decrement: (product_id) => {
            let updatedCartItems = cartItems.map( item => {
                if (item.id === product_id) {
                    item.quantity = item.quantity - 1
                }
                return item
            })
            console.log(product_id, updatedCartItems)
            setCartItems(updatedCartItems);
        },


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