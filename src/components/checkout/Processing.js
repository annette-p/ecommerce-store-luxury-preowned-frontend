import React from 'react'

export default function Processing(){
    return (
        <React.Fragment>

            <div className="row">
                <div className="col processing-cart">
                    Your Order is Now

                    <img className=""
                    src={require('../../images/checkout/processing.gif').default}
                    alt="processing"/>

                </div>
            </div>

        </React.Fragment>
    )
}