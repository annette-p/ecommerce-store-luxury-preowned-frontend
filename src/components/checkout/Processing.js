import React, {useContext, useEffect, useState} from 'react';
import { loadStripe } from "@stripe/stripe-js";

import UserProfileContext from '../../contexts/profile/UserProfileContext';
import CartContext from '../../contexts/carts/CartContext';


export default function Processing(){

    const [loaded, setLoaded] = useState(false);

    const userContext = useContext(UserProfileContext);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        const performCheckout = async() => {
            if (userContext.isAuthenticated()) {
                const stripeCheckoutToken = await cartContext.initiateCheckout();
                // Ref: https://stackoverflow.com/a/60112617
                const stripePromise = loadStripe(stripeCheckoutToken.publishableKey);
                const stripe = await stripePromise;
                stripe.redirectToCheckout({
                    sessionId: stripeCheckoutToken.sessionId
                })
            }
            setLoaded(true);
        }
        performCheckout()
    }, [loaded, userContext, cartContext])

    return (
        <React.Fragment>

            <div className="row">
                <div className="col processing-cart">
                    Your Order is Now

                    <img className=""
                    src={require('../../images/checkout/processing.gif').default}
                    alt="processing"/>

                </div>
            </div>

        </React.Fragment>
    )
}