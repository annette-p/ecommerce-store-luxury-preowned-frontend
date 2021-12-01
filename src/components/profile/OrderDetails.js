import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import UserProfileContext from '../../contexts/profile/UserProfileContext'

export default function OrderDetails(){

    const {order_id} = useParams();
    const [order, setOrder] = useState();
    const context = useContext(UserProfileContext);

    useEffect(() => {
        const fetchPurchaseOrder = (id) => {
            let retrievedPurchasedOrder = context.getPurchaseOrderById(id); 
            setOrder(retrievedPurchasedOrder);
        }
        fetchPurchaseOrder(order_id);
    }, [context, order_id]) 

    return (
        <React.Fragment>
            {order ? 
                (<div className="row mt-4">
                    <div className="col light-grey-hover">
                        <div className="fw-bold">Shipping Information</div>
                        <div className="mt-2">
                            {order.shipping_name} - {order.delivery_tracking}
                        </div>
                    </div>
                    <div className="col light-grey-hover">
                        <div className="fw-bold">Delivery Address</div>
                        <div className="mt-2">{order.customer_name}</div>
                        <div>
                            {order.delivery_address}
                        </div>
                    </div>
                    <div className="col light-grey-hover">
                        <div className="fw-bold text-center">Payment Method</div>
                        <div className="mt-2 text-center">Credit Card</div>
                    </div>
                    <div className="col light-grey-hover">
                        <div className="fw-bold text-center">Order ID</div>
                        <div className="mt-2 text-center">{order.id}</div>
                    </div>
                    <hr className="mt-3"></hr>
                    {/* Product details / image */}
                    <div className="row mt-3">
                        <div className="fw-bold">Product Details</div>
                    </div>
                    <div className="row mt-3">
                        <div class="col-1">
                            <img className="product-img-profile"
                            src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                            alt="product"/>
                            {/* ---linkable to product page--- */}
                        </div>
                        <div class="col light-grey-hover">
                            {/* ---linkable to product page--- */}
                            <div className="ms-2 fw-bold">{order.designer}</div>
                            <div className="ms-2">{order.name}</div>
                            <div className="ms-2"><span className="fw-bold">Condition: </span>{order.condition}</div>
                            <div className="ms-2 fw-bold">$S {order.price}<span className="ms-1 fw-normal">x {order.quantity}</span></div>
                            <div className="ms-2 fw-bold">Total: <span className="ms-1 fw-normal orange-text">$S {order.total}</span></div>
                        </div>

                        {/* ----- it must display all products in this same prder (e.g of total orders 3 items, here to display all 3) */}
                        <div class="col-1">
                            <img className="product-img-profile"
                            src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                            alt="product"/>
                            {/* ---linkable to product page--- */}
                        </div>
                        <div class="col light-grey-hover">
                            {/* ---linkable to product page--- */}
                            <div className="ms-2 fw-bold">{order.designer}</div>
                            <div className="ms-2">{order.name}</div>
                            <div className="ms-2"><span className="fw-bold">Condition: </span>Used like new</div>
                            <div className="ms-2 fw-bold">$S 3,500 <span className="ms-1 fw-normal">x1</span></div>
                            <div className="ms-2 fw-bold">Total: <span className="ms-1 fw-normal orange-text">$S 3,500</span></div>
                        </div>
                    
                    </div>

                </div>) 
            : null}
            
        </React.Fragment>
    )
}