import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import ProductContext from '../../contexts/products/ProductContext'
import CartContext from '../../contexts/carts/CartContext'

export default function CartItems(){

    const [ cartItems, setCartItems ] = useState();


    const productContext = useContext(ProductContext);
    const cartContext = useContext(CartContext);


    useEffect(() => {
        const fetchProduct = () => {
            // get list of items in cart from cart context
            let itemsInCart = cartContext.getCartItems();
            
            // for each cart item, get the item details from product context
            // by lookup using id of product
            let itemDetails = itemsInCart.map( item => {
                let product = productContext.getProductByID(item.id)
                return {
                    "product": product,
                    "quantity": item.quantity
                }
            })
            setCartItems(itemDetails)
        }
        fetchProduct();
    }, [cartContext, productContext])
    
    return (
        <React.Fragment>

        {cartItems ? 
            cartItems.map( item => {
                return (
                    <div className="row">
                        {/* product image */}
                        <div className="col">
                            <img className="product-img-cart"
                            src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                            alt="product"/>
                            {/* ---linkable to product page--- */}
                        </div>
                        {/* product description */}
                        <div className="col product-des-cart">
                            {/* ---linkable to product page--- */}
                            <div>{item.product.designer}</div>
                            <div>{item.product.name}</div>
                            <div><span className="fw-bold">Condition: </span>{item.product.condition}</div>
                            <div className="fw-bold">$S {item.product.price}</div>
                        </div>
                        {/* Quantity Control Section */}
                        <div className="col-12 mb-1">
                            <form class="d-flex mt-4 quantity-control-sec">
                                <button class="btn btn-outline-secondary gold-hover white-font me-1 quantity-btn" type="submit">
                                    <FontAwesomeIcon icon={faPlus} className="mb-1"/>
                                </button>
                                <input class="form-control me-1 quantity-form" type="" placeholder={item.quantity}/>
                                <button class="btn btn-outline-secondary gold-hover white-font quantity-btn" type="submit">
                                    <FontAwesomeIcon icon={faMinus} className="mb-1"/>
                                </button>
                                {/* trash */}
                                <FontAwesomeIcon icon={faTrashAlt} className="ms-4 trash-icon"/>
                            </form> 
                        </div>
                        <hr className="white-hr"></hr>
                    </div>
                )
            })
        : null}
            

        </React.Fragment>
    )
}