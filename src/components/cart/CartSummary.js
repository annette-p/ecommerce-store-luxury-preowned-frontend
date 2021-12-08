import React, { useContext, useEffect, useState }  from 'react'

import ProductContext from '../../contexts/products/ProductContext'
import CartContext from '../../contexts/carts/CartContext'

export default function CartSummary() {

    const [ cartItems, setCartItems ] = useState([]);
    const [ totalAmount, setTotalAmount ] = useState(0);
    const [ loaded, setLoaded ] = useState(false)

    const productContext = useContext(ProductContext);
    const cartContext = useContext(CartContext);


    useEffect(() => {
        const fetchProduct = async () => {
            let total = 0;

            // get list of items in cart from cart context
            let itemsInCart = await cartContext.getCartItems();
            
            if (itemsInCart && Array.isArray(itemsInCart)) {
                // for each cart item, get the item details from product context
                // by lookup using id of product
                let itemDetails = itemsInCart.map( item => {
                    let product = productContext.getProductByID(item.product_id);
                    total = total + (item.quantity * product.selling_price);
                    return {
                        "product": product,
                        "quantity": item.quantity
                    }
                })
                setCartItems(itemDetails);
            }
            setTotalAmount(total);
            setLoaded(true);
        }
        fetchProduct();
    }, [loaded, cartContext, productContext])
    
    return (
        <React.Fragment>

            <div className="row summary-section">
                <hr className="dark-grey"></hr>
                <div className="col">
                    <div>Total <span>({cartItems.length} items)</span></div>
                    <div className="mt-1">Shipping</div>
                    <div className="mt-1">Total Order</div>
                </div>
                <div className="col total-number">
                    <div><span className="me-2">S$</span>{totalAmount.toFixed(2)}</div>
                    <div className="mt-1"><span className="free"></span>Free</div>
                    <div className="mt-1"><span className="me-2">S$</span>{totalAmount.toFixed(2)}</div>
                </div>
                {/* button */}
                <form className="d-flex mt-4">
                    <input className="form-control me-1" type="" placeholder="Add voucher code" aria-label=""/>
                    <button className="btn btn-secondary gold-hover" type="submit">APPLY</button>
                </form>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-secondary gold-hover" type="button">CHECK OUT</button>
                </div>
            </div>

        </React.Fragment>
    )
}