import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function VoucherPage(){
    return (
        <React.Fragment>

            <div className="container-fluid">
                <div className="row fully-redeem-div">
                    <h1 className="d-none d-md-block text-center">We are fully redeem today</h1>
                    <h3 className="d-block d-md-none text-center">We are fully redeem today</h3>
                    <div className="text-center mt-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon"/>
                    </div>
                    
                </div>
            </div>


        </React.Fragment>
    )
}