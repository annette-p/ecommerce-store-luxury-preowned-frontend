import React, { useContext, useState, useEffect } from 'react'
import UserProfileContext from '../../contexts/profile/UserProfileContext'

export default function OrderSummary({orderStatus}){

    const [ purchaseOrders, setPurchaseOrders ] = useState();
    const context = useContext(UserProfileContext);

    useEffect(() => {
        const fetchPurchaseOrders = () => {
            // console.log(orderStatus)
            let retrievedPurchasedOrders = context.getPurchaseOrdersByStatus(orderStatus);  
            setPurchaseOrders(retrievedPurchasedOrders);
        }
        fetchPurchaseOrders();
    }, [context, orderStatus]) 


    return (
        <React.Fragment>

            {purchaseOrders ? 
                purchaseOrders.map(order => {
                    return (
                        <div className="row mt-4">
                            {/* product image */}
                            <div className="col-1">
                                <img className="product-img-profile"
                                src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                alt="product"/>
                                {/* ---linkable to product page--- */}
                            </div>
                            {/* product description */}
                            <div className="col-11">
                                {/* ---linkable to product page--- */}
                                <div className="ms-2 fw-bold">{order.designer}</div>
                                <div className="ms-2">{order.name}</div>
                                <div className="ms-2"><span className="fw-bold">Condition: </span>{order.condition}</div>
                                <div className="ms-2 fw-bold">$S {order.price}<span className="ms-1 fw-normal">x {order.quantity}</span></div>
                                <div className="ms-2 fw-bold">Order Total: <span className="ms-1 fw-normal orange-text">$S {order.total}</span><span className="ms-3 fw-normal">({order.total_quantity} items)</span></div>
                            </div>
                            <hr className="mt-3"></hr>
                        </div>
                    )
                })
            : null}
            
        </React.Fragment>
    )
}