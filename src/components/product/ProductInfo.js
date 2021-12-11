import React from 'react'
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'

export default function ProductInfo({product}){
    return (
        <React.Fragment>
            <div className="row mt-4">
                <Accordion>
                    {/* Description */}
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>
                            {product.description}
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* Specification */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Specification</Accordion.Header>
                        <Accordion.Body style={{whiteSpace: "pre-wrap"}}>
                            {/* Ref https://developer.mozilla.org/en-US/docs/Web/CSS/white-space */}
                            {product.specifications}
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* Condtition */}
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Condtition</Accordion.Header>
                        <Accordion.Body>
                            <div>{product.condition}</div>
                            <div>{product.condition_description}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* Authenticity and Warranty */}
                    {product.authenticity ? 
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Verified Authenticity and Warranty</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    Our in-house luxury experts take extra care in ensuring that each of the items listed on our site have gone through a rigorous authentication process.
                                </div>
                                <div className="fw-bold mt-3">
                                    Warranty
                                </div>
                                <div>
                                    To ensure full peace of mind to our customers, we offer a lifetime 100% authenticity guarantee for all of our items.
                                </div>
                                <div className="fw-bold mt-3">
                                    See our authentication process
                                </div>
                                <Link to="/product-authentication" target="_blank">
                                    click here 
                                </Link>
                                <div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    : null}
                    {/* Return Policy */}
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Return Policy</Accordion.Header>
                        <Accordion.Body>
                            All returnable items can be returned within 3-days of receipt. The Luxury Preowned offers free returns. Customs duties and taxes are applicable and will be borne by the customer. We do not accept returns on Hermès Birkin and Kelly bags.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </React.Fragment>
    )
}