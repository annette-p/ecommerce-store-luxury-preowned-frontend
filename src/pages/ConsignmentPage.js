import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PayoutRates from '../components/consignment/PayoutRates'
import SellingMethod from '../components/consignment/SellingMethod'

export default function ConsignmentPage(){
    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-4">
                    <h4>Consignment Service</h4>
                </div>
                <div className="row mt-4">
                    <Carousel>
                        {/* slide 1 */}
                        <Carousel.Item>
                            <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                            <Carousel.Caption>
                                <h3>Tell us what you would like to sell</h3>
                                <p className="consignment-carousel-text">We take care of everything: free pick-ups, item pricing, item write-ups and photography, meaning more sales and less effort for you.</p>
                                {/* button */}
                                <div class="ms-4 me-4 mb-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-outline-secondary white-font fw-bold" type="button">Fill out a consignment form with your item information</button>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* slide 2 */}
                        <Carousel.Item>
                            <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                            <Carousel.Caption>
                                <h3>We collect your items, free of charge</h3>
                                <p className="consignment-carousel-text">
                                    Sit back and relax while our experts will contact you and collect the items you want to sell. We arrange a FREE home pick-up for all eligible bags, watches and prestige jewelry. For apparel, there is a $5 pick up fee.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* slide 3 */}
                        <Carousel.Item>
                            <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                            <Carousel.Caption>
                                <h3>Get a quote</h3>
                                <p className="consignment-carousel-quote">
                                    Our experts will evaluate your items and offer you a quote within 5-10 days. 
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* slide 4 */}
                        <Carousel.Item>
                            <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                            <Carousel.Caption>
                                <h3>We take care of everything</h3>
                                <p className="consignment-carousel-text">
                                    That means item curation, descriptions, display, pricing, photography, quality control, authentication, item listing on Luxury Pre-owned platform and trace progress of your sales including sales transaction processing. 
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* slide 5 */}
                        <Carousel.Item>
                            <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                            <Carousel.Caption>
                                <h3>You get paid</h3>
                                <p className="consignment-carousel-text">
                                    Once your item is sold, we send a direct payment to your account. You can earn up to 80% of the sale price. 
                                </p>
                                {/* button */}
                                <div class="ms-4 me-4 mb-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-outline-secondary white-font fw-bold" type="button">See the Payout Scheme</button>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="row mt-4">
                    <div className="container consign-container">
                        <p className="fs-5 pt-4 pb-4 text-center light-grey-hover">
                            Luxury Pre-owned offers an exclusive end-to-end service to anyone with exceptional items to consign.
                            This consignment service is available THROUGHOUT SINGAPORE and takes care of the whole process from collection to selling.
                        </p>
                    </div>
                </div>
                
                {/* Payout Rate - collapse buttons */}
                <PayoutRates />

                <div className="row mt-4">
                    <div className="mt-4 container consign-container">
                        <h4 className="text-center">Start Selling</h4>
                        <h6 className="mt-3">
                            Select your selling method 
                            <span className="ms-2 fw-normal">- Already have an account?</span>
                            <span className="ms-2 fw-normal text-decoration-underline">Sign in</span>
                        </h6>  
                    </div>
                </div>
                {/* Selling request */}
                <SellingMethod />
  
            </div>
        </React.Fragment>
    )
}