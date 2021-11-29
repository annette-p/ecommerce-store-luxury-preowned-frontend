import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'

export default function SellWithUs(){
    return (
        <React.Fragment>

            <div className="row mt-4">
                <div className="col mt-2 ms-2">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="hand-dollar-icon"/>
                    </div>
                </div>
                <div className="col mt-2 similar-item-div">
                    <h6>Have a similar item?</h6>
                    <a href="/sell" className="card-link">Click here to Sell with Us!</a>
                </div>
                <div className="col">
                </div>
            </div>

        </React.Fragment>
    )
}