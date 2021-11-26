import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import CartPage from './CartPage'

export default function ProductPage(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-1">
                    </div>
                    {/* image section */}
                    <div className="col">
                        <div className="card" style={{width: "30rem"}}>
                            <img className="card-img-top product-img-container"
                            src={require('../images/product/dior-mini-saddle-shoulder.jpg').default}
                            alt="first"/>
                            <div className="card-body">
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="img-bucket">
                                container to display additional product images for viewing
                            </div> 
                        </div>
                    </div>
                    {/* details section */}
                    <div className="col">
                        <div className="row">
                            <h5>Dior</h5>
                            <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                            <div className="fw-bold">$S3,500</div>
                            <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                        </div>
                        {/* buttons */}
                        <div className="row mt-4">
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary gold-hover" type="button">BUY NOW</button>
                                <button className="btn btn-secondary gold-hover" type="button" onClick={handleShow}>ADD TO CART</button>
                                <CartPage handleClose={handleClose} placement="end" show={show} />
                            </div>
                        </div>
                        {/* Sell with us */}
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
                        {/* Collapse option - product description */}
                        <div className="row mt-4">
                            <Accordion>
                                {/* Description */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Description</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Specification */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Specification</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Condtition */}
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Condtition</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Authenticity and Warranty */}
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Verified Authenticity and Warranty</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            Our in-house luxury experts take extra care in ensuring that each of the items listed on our site have gone through a rigorous authentication process.
                                        </div>
                                        <div className="fw-bold mt-3">
                                            Warranty
                                        </div>
                                        <div className="">
                                            To ensure full peace of mind to our customers, we offer a lifetime 100% authenticity guarantee for all of our items.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Return Policy */}
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Return Policy</Accordion.Header>
                                    <Accordion.Body>
                                        All returnable items can be returned within 3-days of receipt. The Luxury Preowned offers free returns. Customs duties and taxes are applicable and will be borne by the customer. We do not accept returns on Hermès Birkin and Kelly bags.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}