import React, { useContext, useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { useParams } from 'react-router';

import UserProfileContext from '../../contexts/profile/UserProfileContext'
import OrderNone from './OrderNone'

export default function OrderSummary(){
    const {order_status} = useParams();
    let { url } = useRouteMatch();
    const [ purchaseOrders, setPurchaseOrders ] = useState();
    // const [loaded, setLoaded] = useState(false);
    const userContext = useContext(UserProfileContext);

    useEffect(() => {
        const fetchPurchaseOrders = async (status) => {
            /*
                The list of valid order statuses are:
                [
                    "New",
                    "Processing",
                    "Shipment",
                    "Completed",
                    "Cancelled",
                    "Refund"
                ]

                The order status tabs on the frontend UI are:
                * To Delivery    (uri /deliver)
                * To Receive     (uri /receive)
                * Completed      (uri /completed)
                * Cancelled      (uri /cancelled)
                * Return Refund  (uri /refund)
            */
            let orderStatus;
            switch(status) {
                case "deliver": 
                    orderStatus=["New", "Processing"]; 
                    break;
                case "receive": 
                    orderStatus=["Shipment"]; 
                    break;
                case "completed":
                    orderStatus=["Completed"]; 
                    break;
                case "cancelled":
                    orderStatus=["Cancelled"]; 
                    break;
                case "refund":
                    orderStatus=["Refund"]; 
                    break;
                default: 
                    orderStatus=[status]; 
            }
            let retrievedPurchasedOrders = await userContext.getPurchaseOrdersByStatus(orderStatus);
            setPurchaseOrders(retrievedPurchasedOrders);
            
        }
        fetchPurchaseOrders(order_status);
    }, [userContext, order_status]) 


    return (
        <React.Fragment>

            {purchaseOrders && purchaseOrders.length > 0 ? 
                purchaseOrders.map(order => {
                    return (
                        <Link to={`${url}/${order.id}/order-details`} key={`orderId_${order.id}`} className="no-underline">
                            {order.products[0] && 
                                <div className="row mt-4">
                                    {/* product image */}
                                    <div className="col-3 col-lg-1">
                                        <img className="product-img-profile"
                                        src={order.products[0].product_image_1}
                                        alt="product"/>
                                    </div>
                                    {/* product description */}
                                    <div className="col-9 col-lg-11">
                                        <div className="ms-2 fw-bold">{order.products[0].designer.name}</div>
                                        <div className="ms-2">{order.products[0].name}</div>
                                        <div className="ms-2"><span className="fw-bold">Condition: </span>{order.products[0].condition}</div>
                                        <div className="ms-2 fw-bold">
                                            Order Total: <span className="ms-1 fw-normal orange-text">S${(order.payment_amount / 100).toFixed(2)}</span>
                                            {/* Formula to use reduce() to calculate total */}
                                            {/* Ref: https://stackoverflow.com/a/16751601 */}
                                            <span className="ms-3 fw-normal">({order.products.reduce( (partial_total, a) => partial_total + a['_pivot_quantity'], 0)} items)</span>
                                        </div>
                                    </div>
                                    <hr className="mt-3"></hr>
                                </div>
                            }
                        </Link> 
                    )
                })
            : <OrderNone/>}
            
        </React.Fragment>
    )
}