import React from 'react'

export default function OrderDetails(){
    return (
        <React.Fragment>
            <div className="row mt-4">
                <div className="col">
                    <div className="fw-bold">Shipping Information</div>
                    <div className="mt-2">
                        fedex - 908888555556666
                    </div>
                </div>
                <div className="col">
                    <div className="fw-bold">Delivery Address</div>
                    <div className="mt-2">Jonh Doe</div>
                    <div>
                        80 Marine Parade Rd, Singapore 449269
                    </div>
                </div>
                <div className="col">
                    <div className="fw-bold text-center">Payment Method</div>
                    <div className="mt-2 text-center">Credit Card</div>
                </div>
                <div className="col">
                    <div className="fw-bold text-center">Order ID</div>
                    <div className="mt-2 text-center">LP5556666888999</div>
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
                    <div class="col">
                        {/* ---linkable to product page--- */}
                        <div className="ms-2 fw-bold">Dior</div>
                        <div className="ms-2">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</div>
                        <div className="ms-2"><span className="fw-bold">Condition: </span>Used like new</div>
                        <div className="ms-2 fw-bold">$S 3,500 <span className="ms-1 fw-normal">x1</span></div>
                        <div className="ms-2 fw-bold">Total: <span className="ms-1 fw-normal orange-text">$S 3,500</span></div>
                    </div>

                    <div class="col-1">
                        <img className="product-img-profile"
                        src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                        alt="product"/>
                        {/* ---linkable to product page--- */}
                    </div>
                    <div class="col">
                        {/* ---linkable to product page--- */}
                        <div className="ms-2 fw-bold">Dior</div>
                        <div className="ms-2">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</div>
                        <div className="ms-2"><span className="fw-bold">Condition: </span>Used like new</div>
                        <div className="ms-2 fw-bold">$S 3,500 <span className="ms-1 fw-normal">x1</span></div>
                        <div className="ms-2 fw-bold">Total: <span className="ms-1 fw-normal orange-text">$S 3,500</span></div>
                    </div>
                  
                </div>

            </div>
        </React.Fragment>
    )
}