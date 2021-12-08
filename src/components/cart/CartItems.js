import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import ProductContext from '../../contexts/products/ProductContext'
import CartContext from '../../contexts/carts/CartContext'

export default function CartItems(){

    const [ cartItems, setCartItems ] = useState();
    const [ loaded, setLoaded ] = useState(false)

    const productContext = useContext(ProductContext);
    const cartContext = useContext(CartContext);


    useEffect(() => {
        const fetchProduct = async () => {
            // get list of items in cart from cart context
            let itemsInCart = await cartContext.getCartItems();
            
            if (itemsInCart && Array.isArray(itemsInCart)) {
                // for each cart item, get the item details from product context
                // by lookup using id of product
                let itemDetails = itemsInCart.map( item => {
                    let product = productContext.getProductByID(item.product_id)
                    return {
                        "product": product,
                        "quantity": item.quantity
                    }
                })
                setCartItems(itemDetails)
            }
            setLoaded(true)
        }
        fetchProduct();
    }, [loaded, cartContext, productContext])

    async function updateCartItemQuantity(index, newQuantity) {

        if (newQuantity >= 0) {
            let success = await cartContext.updateCartQuantity(cartItems[index].product.id, newQuantity)
            if (success) {
                setLoaded(false)
            }
        }

    }
    
    return (
        <React.Fragment>

            <div className="row vertical-scrollbar">

                {cartItems ? 
                    cartItems.map( (item, index) => {
                        
                        return (
                            item.product ? 
                                <div className="row">
                                    {/* product image */}
                                    <div className="col">
                                        <img className="product-img-cart"
                                        src={item.product.product_image_1}
                                        alt="product"/>
                                        {/* ---linkable to product page--- */}
                                    </div>
                                    {/* product description */}
                                    <div className="col product-des-cart">
                                        {/* to access nested object > ref: https://stackoverflow.com/a/46309951 */}
                                        {item.product.designer && 
                                            <div className="fw-bold">{item.product.designer.name}</div>
                                        }
                                        <div>{item.product.name}</div>
                                        <div><span className="fw-bold">Condition: </span>{item.product.condition}</div>
                                        <div className="fw-bold">S${item.product.selling_price}</div>
                                    </div>
                                    {/* Quantity Control Section */}
                                    <div className="col-12 mb-1">
                                        <form className="d-flex quantity-control-sec">
                                            <button className="btn btn-outline-secondary gold-hover white-font me-1 quantity-btn" type="button" onClick={() => updateCartItemQuantity(index, cartItems[index].quantity + 1)}>
                                                <FontAwesomeIcon icon={faPlus} className="mb-1"/>
                                            </button>
                                            <input className="form-control me-1 quantity-form" type="number" value={cartItems[index].quantity} onChange={(e) => updateCartItemQuantity(index, e.target.value)} />
                                            <button className="btn btn-outline-secondary gold-hover white-font quantity-btn" type="button" onClick={() => updateCartItemQuantity(index, cartItems[index].quantity - 1)}>
                                                <FontAwesomeIcon icon={faMinus} className="mb-1"/>
                                            </button>
                                            {/* trash */}
                                            <FontAwesomeIcon icon={faTrashAlt} className="ms-4 trash-icon" onClick={() => updateCartItemQuantity(index, 0)}/>
                                        </form> 
                                        <hr className="mt-3"></hr>
                                    </div>
                                    {/* <hr className="white-hr"></hr> */}
                                </div>
                            : null
                            
                        )
                    })
                : null}
            </div>

        </React.Fragment>
    )
}