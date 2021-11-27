import React from 'react'

export default function OrderSummary(){
    return (
        <React.Fragment>

            <div className="row mt-4">
                {/* product image */}
                <div className="col-1">
                    <img className="product-img-profile"
                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                    alt="product"/>
                    {/* ---linkable to product page--- */}
                </div>
                {/* product description */}
                <div className="col-11">
                    {/* ---linkable to product page--- */}
                    <div className="ms-2 fw-bold">Dior</div>
                    <div className="ms-2">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</div>
                    <div className="ms-2"><span className="fw-bold">Condition: </span>Used like new</div>
                    <div className="ms-2 fw-bold">$S 3,500 <span className="ms-1 fw-normal">x1</span></div>
                    <div className="ms-2 fw-bold">Order Total: <span className="ms-1 fw-normal orange-text">$S 3,500</span><span className="ms-3 fw-normal">(1 items)</span></div>
                </div>
                <hr className="mt-3"></hr>
            </div>


        </React.Fragment>
    )
}