import React, { useContext, useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { useParams } from 'react-router';
import UserProfileContext from '../../contexts/profile/UserProfileContext'
import ConsignmentOrderNone from './ConsignmentOrderNone'

export default function ConsignmentOrderSummary(){

    const {order_status} = useParams();
    let { url } = useRouteMatch();
    const [ sellingOrders, setSellingOrders ] = useState();
    const context = useContext(UserProfileContext);

    useEffect(() => {
        const fetchSellingOrders = (status) => {
            let orderStatus;
            switch(status) {
                // there's few pending status under in progress tap
                case "progress": orderStatus="pending initial evaluation"; break;
                case "listing": orderStatus="completed"; break;
                default: orderStatus=status; 
            }
            let retrievedSellingOrders = context.getSellingOrdersByStatus(orderStatus);  
            setSellingOrders(retrievedSellingOrders);
        }
        fetchSellingOrders(order_status);
    }, [context, order_status])

    
    return (
        <React.Fragment>

            {sellingOrders && sellingOrders.length > 0 ? 
                sellingOrders.map(order => {
                    return (
                        <Link to={`${url}/${order.id}/order-details`} className="no-underline">

                            <div className="row mt-4">
                                {/* product image */}
                                <div className="col-1">
                                    <img className="product-img-sell"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                    {/* ---linkable to product page--- */}
                                </div>
                                {/* product description */}
                                <div className="col-11">
                                    {/* ---linkable to product page--- */}
                                    <div className="sell-order-sum fw-bold">Date: <span className="ms-1 fw-normal">18-11-2021 15.28</span></div>
                                    <div className="sell-order-sum fw-bold">Order No.: <span className="ms-1 fw-normal">{order.order_no}</span></div>
                                    <div className="sell-order-sum fw-bold">Product:<span className="ms-1 fw-normal">{order.designer} - {order.name}</span></div>
                                    <div className="sell-order-sum"><span className="fw-bold">Condition: </span>{order.condition}</div>
                                    <div className="sell-order-sum"><span className="fw-bold">Quantity: </span>{order.quantity}</div>
                                    {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                                    <div className="sell-order-sum"><span className="fw-bold">Status: </span>{order.status}</div>
                                </div>
                                <hr className="mt-3"></hr>
                            </div>

                        </Link>
                    )
                })
            : <ConsignmentOrderNone/>}

        </React.Fragment>
    )
}