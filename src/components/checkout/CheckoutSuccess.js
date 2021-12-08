import React, {useContext, useEffect, useState} from 'react'
import CartContext from '../../contexts/carts/CartContext';

export default function CheckoutSuccess(){

    const [loaded, setLoaded] = useState(false);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        // when payment processing completed, remove the local storage reference of the cart id
        cartContext.removeCart();
        setLoaded(true);
    }, [loaded, cartContext])

    return (
        <React.Fragment>

            <div className="row">
                <div className="col processing-cart">
                    Your Order is completed

                    <div className="mt-4 fw-normal">You can view the order details and status in your profile page</div>

                </div>
            </div>

        </React.Fragment>
    )
}