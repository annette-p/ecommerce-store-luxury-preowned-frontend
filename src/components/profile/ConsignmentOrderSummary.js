import React from 'react'

export default function ConsignmentOrderSummary(){
    return (
        <React.Fragment>

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
                    <div className="sell-order-sum fw-bold">Order No.: <span className="ms-1 fw-normal">CLP0009999888555567</span></div>
                    <div className="sell-order-sum fw-bold">Product:<span className="ms-1 fw-normal">YSL - Leather Mini Shoulder Bag</span></div>
                    <div className="sell-order-sum"><span className="fw-bold">Condition: </span>Used like new</div>
                    <div className="sell-order-sum"><span className="fw-bold">Quantity: </span>1</div>
                    {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                    <div className="sell-order-sum"><span className="fw-bold">Status: </span>1st evaluation</div>
                </div>
                <hr className="mt-3"></hr>
            </div>


        </React.Fragment>
    )
}