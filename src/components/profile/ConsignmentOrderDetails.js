import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import UserProfileContext from '../../contexts/profile/UserProfileContext'

export default function ConsignmentOrderDetails(){

    const images = [
        'product_image_1', 'product_image_2',
        'product_gallery_1', 'product_gallery_2', 'product_gallery_3', 'product_gallery_4',
        'product_gallery_5', 'product_gallery_6', 'product_gallery_7', 'product_gallery_8'
    ]
    
    const {order_id} = useParams();
    const [ sellingOrders, setSellingOrders ] = useState();
    const context = useContext(UserProfileContext);

    useEffect(() => {
        const fetchSellingOrders = (id) => {
            let retrievedSellingOrders = context.getSellingOrderById(id); 
            setSellingOrders(retrievedSellingOrders);
        }
        fetchSellingOrders(order_id);
    }, [context, order_id])

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

            {sellingOrders ? 

                <div className="row mt-4 mb-3 mb-lg-0">
                    {/* Future Implementation - link to consignment shipment table in DB */}
                    <div className="col-6 col-lg-3 light-grey-hover">
                        <div className="fw-bold">Shipping Information</div>
                        <div className="mt-2">
                            NA
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 mb-lg-0 light-grey-hover">
                        <div className="fw-bold">Address</div>
                        <div className="mt-2">
                            NA
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 light-grey-hover">
                        <div className="fw-bold center-lg">Payment Method</div>
                        <div className="mt-2 center-lg">
                            NA
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 light-grey-hover">
                        <div className="fw-bold center-lg">Order No.</div>
                        <div className="mt-2 center-lg">{sellingOrders.id}</div>
                    </div>
                    <hr className="mt-3"></hr>
                    {/* Product details and Images */}
                    <div className="row mt-3">
                        <div className="fw-bold">Product Details</div>
                    </div>
                    <div className="row mt-3">

                        <div className="col mb-4">
                            <div className="row mt-2">
                                <div className="consignment-img-bucket horizontal-scrollbar">
                                {sellingOrders.product && 
                                    images.map( image => {
                                        if (sellingOrders.product[image]) {
                                            return (
                                                <div className="additional-img-div me-2">
                                                    <img className="consignment-img"
                                                    src={sellingOrders.product[image]}
                                                    alt="product"/>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })
                                }
                                </div>
                                
                            </div>
                        </div>
                        {/* Product Description */}
                        {sellingOrders.product && 
                            <div className="col">
                                {/* ---linkable to product page--- */}
                                <div className="sell-order-sum fw-bold mb-1">Date: <span className="ms-1 fw-normal">{formatDateTimeToSG(sellingOrders.updated_at)} SGT</span></div>
                                <div className="sell-order-sum fw-bold mb-1">Order No.: <span className="ms-1 fw-normal">{sellingOrders.id}</span></div>
                                {sellingOrders.product.designer && 
                                    <div className="sell-order-sum fw-bold mb-1">Product:<span className="ms-1 fw-normal">{sellingOrders.product.designer.name} - {sellingOrders.product.name}</span></div>
                                }
                                <div className="sell-order-sum mb-1"><span className="fw-bold">Quantity: </span>{sellingOrders.product.quantity}</div>
                                <div className="sell-order-sum mb-1"><span className="fw-bold">Condition: </span>{sellingOrders.product.condition}</div>
                                <div className="sell-order-sum mb-3"><span className="fw-bold">Condition Description: </span>{sellingOrders.product.condition_description}</div>
                                {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                                <div className="sell-order-sum mb-1"><span className="fw-bold">Status: </span>{sellingOrders.status}</div>
                                <div className="sell-order-sum mb-1"><span className="fw-bold">Status Details: </span>{sellingOrders.comment}</div>
                            </div>
                        }
                    </div>

                </div>

            : null}
        </React.Fragment>
    )
}