import React from 'react'

export default function ConsignmentOrderDetails(){
    return (
        <React.Fragment>
            <div className="row mt-4">
                <div className="col light-grey-hover">
                    <div className="fw-bold">Shipping Information</div>
                    <div className="mt-2">
                        NA
                    </div>
                </div>
                <div className="col light-grey-hover">
                    <div className="fw-bold">Address</div>
                    <div className="mt-2">Jonh Doe</div>
                    <div>
                        80 Marine Parade Rd, Singapore 449269
                    </div>
                </div>
                <div className="col light-grey-hover">
                    <div className="fw-bold text-center">Payment Method</div>
                    <div className="mt-2 text-center">Cheque</div>
                </div>
                <div className="col light-grey-hover">
                    <div className="fw-bold text-center">Order Np.</div>
                    <div className="mt-2 text-center">CLP000999888555567</div>
                </div>
                <hr className="mt-3"></hr>
                {/* Product details / image */}
                <div className="row mt-3">
                    <div className="fw-bold">Product Details</div>
                </div>
                <div className="row mt-3">

                    <div className="col mb-4">
                        {/* <div className="card" style={{width: "30rem"}}>
                            <img className="card-img-top product-img-container"
                            src={require('../../images/consignment/ysl-sample.png').default}
                            alt="first"/>
                        </div> */}
                        <div className="row mt-2">
                            <div className="consignment-img-bucket horizontal-scrollbar">
                                {/* img 1 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 2 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 3 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 4 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 5 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 6 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 7 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 8 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 9 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                                {/* img 10 */}
                                <div class="additional-img-div me-2">
                                    <img className="consignment-img"
                                    src={require('../../images/consignment/ysl-sample.png').default}
                                    alt="product"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    {/* product description */}
                    <div className="col">
                        {/* ---linkable to product page--- */}
                        <div className="sell-order-sum fw-bold mb-1">Date: <span className="ms-1 fw-normal">18-11-2021 15.28</span></div>
                        <div className="sell-order-sum fw-bold mb-1">Order No.: <span className="ms-1 fw-normal">CLP0009999888555567</span></div>
                        <div className="sell-order-sum fw-bold mb-1">Product:<span className="ms-1 fw-normal">YSL - Leather Mini Shoulder Bag</span></div>
                        <div className="sell-order-sum mb-1"><span className="fw-bold">Quantity: </span>1</div>
                        <div className="sell-order-sum mb-1"><span className="fw-bold">Condition: </span>Used like new</div>
                        <div className="sell-order-sum mb-3"><span className="fw-bold">Condition Description: </span>Used twice, in perfect condition. No defected at all.</div>
                        {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                        <div className="sell-order-sum mb-1"><span className="fw-bold">Status: </span>1st evaluation</div>
                        <div className="sell-order-sum mb-1"><span className="fw-bold">Status Details: </span>NA</div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}