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

    let cartData = {
        "items": [
            { "product_id": productId, "quantity": quantity }
        ]
    }

    try {
        if (cartId) {
            // add to existing cart

            // check if item already exists in cart. If yes, need to increment the quantity accordingly
            let existingCartItems = await getCartItems();

            let updated = false;
            existingCartItems.forEach(item => {
                if (item.product_id === productId) {
                    item.quantity += quantity
                    updated = true
                }
            })
            if (!updated) {
                cartData = {
                    "items": [
                        ...existingCartItems,
                        { "product_id": productId, "quantity": quantity }
                    ]
                }
            } else {
                cartData = {
                    "items": [ ...existingCartItems ]
                }
            }

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
        console.log("ERROR in service/carts.js addItemToCart(): ", err);
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
            console.log("ERROR in service/carts.js updateCartItemQuantity(): ", err);
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
        } catch(err) {
            console.log("ERROR in service/carts.js getCartIdForUser(): ", err);
            throw err;;
        }
    }
}

export async function getCartIdForUser() {
    let cartId = getCartId();
    if (!cartId) {
        try {
            const refreshToken = getRefreshToken();
            if (refreshToken) {
                const headers = await generateHttpAuthzHeader(refreshToken);
                let response = await axios.get(`${global.apiUrl}/carts/mycart`, headers);
                const cartId = response.data.data.id
                setCartId(cartId);
            }
            
        } catch(err) {
            console.log("ERROR in service/carts.js getCartIdForUser(): ", err);
            if (err.response.status !== 404) {
                throw err;
            }
        }
    }
    
}

export async function checkout() {
    let cartId = getCartId();
    if (cartId) {
        try {
            const refreshToken = getRefreshToken();
            if (refreshToken) {
                const headers = await generateHttpAuthzHeader(refreshToken);
                const checkoutData = {
                    "success_url": `https://${window.location.hostname}/checkout/success`,
                    "cancel_url": `https://${window.location.hostname}/checkout/error`
                }
                let response = await axios.post(`${global.apiUrl}/checkout`, checkoutData, headers);
                /*
                    The backend api will response with the following information when a Stripe checkout session
                    has been created.
                    {
                        "sessionId": ***,
                        "publishableKey": ***
                    }
                */
                return response.data;
            } else {
                return null;
            }
            
        } catch(err) {
            console.log("ERROR in service/carts.js checkout(): ", err);
            throw err;
        }
    }
}
