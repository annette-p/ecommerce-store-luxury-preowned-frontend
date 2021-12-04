import React from 'react'

export default function CheckoutFail(){
    return (
        <React.Fragment>

            <div className="row">
                <div className="col processing-cart">
                    We are sorry 
                    <div className="mt-1">Your order is unable to process</div>

                    <div className="mt-4 fw-normal">Please try again later</div>

                </div>
            </div>

        </React.Fragment>
    )
}