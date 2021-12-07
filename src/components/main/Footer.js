import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <React.Fragment>
            <div className="row mt-3 mb-3 ms-1 me-1 footer-row">
                <div className="col mb-3 ms-1 ms-md-4">
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
                    <Link to="/product-authentication" className="no-underline">
                        <div className="pt-2">Authentication</div>
                    </Link>
                    <div>Condition Guide</div>
                    <div>Payment in installment plan<span className="fst-italic fw-light">- coming soon</span></div>
                </div>
            </div>

        </React.Fragment>
    )
}