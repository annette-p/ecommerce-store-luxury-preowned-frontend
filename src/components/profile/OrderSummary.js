import React, { useContext, useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { useParams } from 'react-router';

import UserProfileContext from '../../contexts/profile/UserProfileContext'
import OrderNone from './OrderNone'

export default function OrderSummary(){
    const {order_status} = useParams();
    let { url } = useRouteMatch();
    const [ purchaseOrders, setPurchaseOrders ] = useState();
    const context = useContext(UserProfileContext);

    useEffect(() => {
        const fetchPurchaseOrders = (status) => {
            let orderStatus;
            switch(status) {
                case "deliver": orderStatus="new"; break;
                case "receive": orderStatus="delivery"; break;
                default: orderStatus=status; 
            }
            let retrievedPurchasedOrders = context.getPurchaseOrdersByStatus(orderStatus);  
            setPurchaseOrders(retrievedPurchasedOrders);
        }
        fetchPurchaseOrders(order_status);
    }, [context, order_status]) 


    return (
        <React.Fragment>

            {purchaseOrders && purchaseOrders.length > 0 ? 
                purchaseOrders.map(order => {
                    return (
                        <Link to={`${url}/${order.id}/order-details`} className="no-underline">
                            <div className="row mt-4">
                                {/* product image */}
                                <div className="col-1">
                                    <img className="product-img-profile"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* product description */}
                                <div className="col-11">
                                    <div className="ms-2 fw-bold">{order.designer}</div>
                                    <div className="ms-2">{order.name}</div>
                                    <div className="ms-2"><span className="fw-bold">Condition: </span>{order.condition}</div>
                                    <div className="ms-2 fw-bold">$S {order.price}<span className="ms-1 fw-normal">x {order.quantity}</span></div>
                                    <div className="ms-2 fw-bold">Order Total: <span className="ms-1 fw-normal orange-text">$S {order.total}</span><span className="ms-3 fw-normal">({order.total_quantity} items)</span></div>
                                </div>
                                <hr className="mt-3"></hr>
                            </div>
                        </Link> 
                    )
                })
            : <OrderNone/>}
            
        </React.Fragment>
    )
}