import axios from 'axios'

import { getRefreshToken, generateHttpAuthzHeader } from './authentication'

export function getCartId() {
    return localStorage.getItem("luxuryPreOwnedCartId")
}

export function removeCartId() {
    return localStorage.removeItem("luxuryPreOwnedCartId")
}

export function setCartId(cartId) {
    return localStorage.setItem("luxuryPreOwnedCartId", cartId)
}

export async function getCartItems() {
    const cartId = getCartId();
    if (cartId) {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        let response = await axios.get(`${global.apiUrl}/carts/${cartId}`, headers);
        const cartItems = response.data.data.products.map( item => {
            return {
                product_id: item.id, 
                quantity: item['_pivot_quantity']
            }
        });
        return cartItems;
    }
}

export async function addItemToCart(productId, quantity) {
    const cartId = getCartId();
    const refreshToken = getRefreshToken();
    const headers = await generateHttpAuthzHeader(refreshToken);

    const cartData = {
        "items": [
            { "product_id": productId, "quantity": quantity }
        ]
    }

    try {
        if (cartId) {
            // add to existing cart
            await axios.put(`${global.apiUrl}/carts/${cartId}/update`, cartData, headers);
            /*
                The response from backend api when cart is updated successfully
                {
                    "success": true,
                    "message": `Cart id 1 updated successfully`
                }
            */
           return cartId;
        } else {
            // add to new cart
            let response = await axios.post(`${global.apiUrl}/carts/create`, cartData, headers);
    
            /*
                The response from backend api when a new cart is created:
                {
                    "success": true,
                    "cart_id": 1
                }
            */
            const newCartId = response.data.cart_id;
            setCartId(newCartId);
            return newCartId;
        }
    } catch(err) {
        console.log(err)
        throw err;
    }

}

export async function updateCartItemQuantity(productId, newQuantity) {
    const cartId = getCartId();
    const refreshToken = getRefreshToken();
    const headers = await generateHttpAuthzHeader(refreshToken);

    const cartData = {
        "quantity": newQuantity
    }

    if (cartId) {
        try {
            await axios.put(`${global.apiUrl}/carts/${cartId}/update/${productId}`, cartData, headers);
            return true
        } catch(err) {
            console.log(err)
            throw err;
        }
    } else {
        return false;
    }
}

export async function takeOwnershipOfCart() {
    const cartId = getCartId();
    const refreshToken = getRefreshToken();
    const headers = await generateHttpAuthzHeader(refreshToken);

    if (cartId) {
        try {
            await axios.put(`${global.apiUrl}/carts/${cartId}/own`, {}, headers);
            // /carts/35/own
        } catch(err) {
            console.log(err)
            throw err;
        }
    }
}
