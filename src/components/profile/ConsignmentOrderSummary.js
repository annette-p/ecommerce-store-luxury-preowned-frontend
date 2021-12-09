import React, { useContext, useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { useParams } from 'react-router';
import UserProfileContext from '../../contexts/profile/UserProfileContext'
import ConsignmentOrderNone from './ConsignmentOrderNone'

export default function ConsignmentOrderSummary(){

    const {order_status} = useParams();
    let { url } = useRouteMatch();
    const [ sellingOrders, setSellingOrders ] = useState();
    const userContext = useContext(UserProfileContext);

    useEffect(() => {
        const fetchSellingOrders = (status) => {
            /*
                The list of valid order statuses are:
                [
                    "New",
                    "Initial Evaluation",
                    "Official Evaluation",
                    "Shipment",
                    "Listed",
                    "Completed",
                    "Rejected",
                    "Cancelled",
                    "Refund"
                ]

                The order status tabs on the frontend UI are:
                * In Progress    (uri /progress)
                * To Listing     (uri /listing)
                * Completed      (uri /completed)
                * Cancelled      (uri /cancelled)
                * Return Refund  (uri /refund)
            */

            let orderStatus;
            switch(status) {
                case "progress": 
                    orderStatus=["New", "Initial Evaluation", "Official Evaluation", "Shipment"]; 
                    break;
                case "listing": 
                    orderStatus=["Listed"]; 
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
            let retrievedSellingOrders = userContext.getSellingOrdersByStatus(orderStatus);
            setSellingOrders(retrievedSellingOrders);
        }
        fetchSellingOrders(order_status);
    }, [userContext, order_status])

    // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    // Ref: https://gist.github.com/jczaplew/f055788bf851d0840f50
    function formatDateTimeToSG(dateTimeToFormat) {
        return new Date(dateTimeToFormat.replace('T',' ').replace('Z',''))
                    .toLocaleString('en-SG', {
                                    timeZone: 'Asia/Singapore',
                                    hour12: true
                    }).replace(/\//g, "-");
    }

    
    return (
        <React.Fragment>

            {sellingOrders && sellingOrders.length > 0 ? 
                sellingOrders.map(order => {
                    return (
                        <Link to={`${url}/${order.id}/order-details`} className="no-underline">

                            {order.product && 
                                <div className="row mt-4">
                                    {/* product image */}
                                    <div className="col-3 col-lg-1">
                                        <img className="product-img-sell"
                                        src={order.product.product_image_1}
                                        alt="product"/>
                                        {/* ---linkable to product page--- */}
                                    </div>
                                    {/* product description */}

                                    <div className="col-9 col-lg-11">
                                        {/* ---linkable to product page--- */}
                                        <div className="sell-order-sum fw-bold">Date: <span className="ms-1 fw-normal">{formatDateTimeToSG(order.updated_at)} SGT</span></div>
                                        <div className="sell-order-sum fw-bold">Order No.: <span className="ms-1 fw-normal">{order.id}</span></div>
                                        {order.product.designer && 
                                            <div className="sell-order-sum fw-bold">Product:<span className="ms-1 fw-normal">{order.product.designer.name} - {order.product.name}</span></div>
                                        }
                                        <div className="sell-order-sum"><span className="fw-bold">Condition: </span>{order.product.condition}</div>
                                        <div className="sell-order-sum"><span className="fw-bold">Quantity: </span>{order.product.quantity}</div>
                                        {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                                        <div className="sell-order-sum"><span className="fw-bold">Status: </span>{order.status}</div>
                                    </div>
                                    <hr className="mt-3"></hr>
                                </div>
                            }

                            

                        </Link>
                    )
                })
            : <ConsignmentOrderNone/>}

        </React.Fragment>
    )
}