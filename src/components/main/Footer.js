import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <React.Fragment>
            <div className="row mt-3 mb-3 ms-1 me-1 footer-row">
                <div className="col mb-3 ms-1 ms-md-4">
                    <h5 className="mt-3">About Us</h5>
                    <Link to="/coming-soon" className="no-underline">
                        <div className="pt-2">Our Concept</div>
                    </Link>
                    <Link to="/coming-soon" className="no-underline">
                        <div>Premium Service <span className="fst-italic fw-light">- coming soon</span></div>
                    </Link>
                    
                </div>
                <div className="col mb-3">
                    <h5 className="mt-3">Sell</h5>
                    <Link to="/consignment" className="no-underline">
                        <div className="pt-2">How to sell</div>
                    </Link>
                    <Link to="/consignment" className="no-underline">
                        <div>Selling advice</div>
                    </Link>
                    <Link to="/consignment" className="no-underline">
                        <div>Start selling</div> 
                    </Link>
                </div>
                <div className="col mb-3">
                    <h5 className="mt-3">Help</h5>
                    <Link to="/coming-soon" className="no-underline">
                        <div className="pt-2">Contact Us</div>
                    </Link>
                    <Link to="/coming-soon" className="no-underline">
                        <div>FAQ</div>
                    </Link>
                </div>
                <div className="col mb-3 me-4">
                    <h5 className="mt-3">Our Services</h5>
                    <Link to="/product-authentication" className="no-underline">
                        <div className="pt-2">Authentication</div>
                    </Link>
                    <Link to="/condition-guide" className="no-underline">
                    <div>Condition Guide</div>
                    </Link>
                    <Link to="/coming-soon" className="no-underline">
                        <div>Payment in installment plan<span className="fst-italic fw-light">- coming soon</span></div>
                    </Link>
                </div>
            </div>

        </React.Fragment>
    )
}