import React, { useContext, useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import CartItems from '../components/cart/CartItems'
import CartSummary from '../components/cart/CartSummary'
import EmptyCart from '../components/cart/EmptyCart'
import CartContext from '../contexts/carts/CartContext'


export default function CartPage({ ...props }){
    
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        // retrieve the list of items in cart from CartContext, and check whether
        // it is empty. Based on the number of items, set the value for "isCartEmpty" 
        // state variable accordingly.
        setIsCartEmpty(cartContext.getCartItems().length === 0);
    }, [isCartEmpty, cartContext]);

    return (
        <React.Fragment>
            <Offcanvas show={props.show} onHide={props.handleClose} {...props}>   {/* is a short cut of: <Offcanvas onHide={props.handleClose} show={props.show} placement={props.placement}> 
            note: placement indicate which direction the canvas will show (start, end, top, bottom) */}
                <Offcanvas.Header closeButton className="grey-bg"> 
                    <Offcanvas.Title>
                        <FontAwesomeIcon icon={faCartArrowDown} className="cart-icon"/>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="grey-bg white-font" id="cart-body"> 
                    <hr className="dark-grey cart-hr"></hr>
                    
                    {/* Display when the cart is empty */}
                    {isCartEmpty ? <EmptyCart /> : null }
                    
                    {/* Display when cart is not empty - product item list */}
                    {isCartEmpty ? null : <CartItems /> }

                    {/* Display when cart is not empty -  summary section + checkout buttons */}
                    {isCartEmpty ? null : <CartSummary /> }
                     
                </Offcanvas.Body>
            </Offcanvas>


        </React.Fragment>
    )
}