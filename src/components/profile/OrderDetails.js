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
                (<div className="row mt-4 mb-3 mb-lg-0">
                    <div className="col-6 col-lg-3 light-grey-hover">
                        <div className="fw-bold">Shipping Information</div>
                        {order.orderShipment[0] && 
                            <div className="mt-2">
                                {order.orderShipment[0].shipment_provider} - {order.orderShipment[0].tracking_number}
                            </div>
                        }
                    </div>
                    <div className="col-6 mb-3 mb-lg-0 col-lg-3 light-grey-hover">
                        <div className="fw-bold">Delivery Address</div>
                        <div className="mt-2">{order.customer_name}</div>
                        {order.orderShipment[0] && 
                            <div>
                                {order.orderShipment[0].shipping_address}
                            </div>
                        }
                    </div>
                    <div className="col-6 col-lg-3 light-grey-hover">
                        <div className="fw-bold center-lg">Payment Method</div>
                        <div className="mt-2 center-lg">Credit Card</div>
                    </div>
                    <div className="col-6 col-lg-3 light-grey-hover">
                        <div className="fw-bold center-lg">Order ID</div>
                        <div className="mt-2 center-lg">{order.id}</div>
                    </div>
                    <hr className="mt-3"></hr>
                    {/* Product details / image */}
                    <div className="row mt-3">
                        <div className="fw-bold">Product Details</div>
                    </div>
                    {/* <div className="row mt-3"> */}
                        {order.products && order.products.map( product => {
                            return (
                                <div className="row mt-3">
                                    <div className="col-4 col-lg-2 mb-4">
                                        <img className="product-img-profile"
                                        src={product.product_image_1}
                                        alt="product"/>
                                        {/* ---linkable to product page--- */}
                                    </div>
                                    <div className="col-8 col-lg-10 light-grey-hover mb-4">
                                        {/* ---linkable to product page--- */}
                                        <div className="ms-2 fw-bold">{product.designer.name}</div>
                                        <div className="ms-2">{product.name}</div>
                                        <div className="ms-2"><span className="fw-bold">Condition: </span>{product.condition}</div>
                                        <div className="ms-2 fw-bold">$S {product["_pivot_unit_price"]}<span className="ms-1 fw-normal">x {product["_pivot_quantity"]}</span></div>
                                        <div className="ms-2 fw-bold">Total: <span className="ms-1 fw-normal orange-text">S${(product["_pivot_unit_price"] * product["_pivot_quantity"] / 100).toFixed(2)}</span></div>
                                    </div>
                                </div>
                            )
                            
                        })}
                </div>) 
            : null}
            
        </React.Fragment>
    )
}