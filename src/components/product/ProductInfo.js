import React from 'react'
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
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. */}
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* Specification */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Specification</Accordion.Header>
                        <Accordion.Body style={{whiteSpace: "pre"}}>
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
                                <div className="">
                                    To ensure full peace of mind to our customers, we offer a lifetime 100% authenticity guarantee for all of our items.
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