import React from 'react'

export default function Footer(){
    return (
        <React.Fragment>
            <div className="col mb-3 ms-4">
                <h5 className="mt-3">About Us</h5>
                <div className="pt-2">Our Concept</div>
                <div>Premium Service <span className="fst-italic fw-light">- coming soon</span></div>
            </div>
            <div className="col mb-3">
                <h5 className="mt-3">Sell</h5>
                <div className="pt-2">How to sell</div>
                <div>Selling advice</div>
                <div>Start selling</div> 
            </div>
            <div className="col mb-3">
                <h5 className="mt-3">Help</h5>
                <div className="pt-2">Contact Us</div>
                <div>FAQ</div>
            </div>
            <div className="col mb-3 me-4">
                <h5 className="mt-3">Our Services</h5>
                <div className="pt-2">Authentication</div>
                <div>Condition Guide</div>
                <div>Payment in installment plan<span className="fst-italic fw-light">- coming soon</span></div>
            </div>

        </React.Fragment>
    )
}