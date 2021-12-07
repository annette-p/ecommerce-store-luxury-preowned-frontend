import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ConsignmentCarousel(){
    return (
        <React.Fragment>

            <div className="row mt-4">
                <Carousel>
                    {/* slide 1 */}
                    <Carousel.Item>
                        <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                        <Carousel.Caption>
                            <h3 className="d-none d-md-block">Tell us what you would like to sell</h3>
                            <h4 className="d-block d-md-none">Tell us what you would like to sell</h4>
                            <p className="consignment-carousel-text consignment-carousel-spacing">
                                We take care of everything: free pick-ups, item pricing, item write-ups and photography, meaning more sales and less effort for you.
                            </p>
                            {/* button */}
                            <div class="ms-4 me-4 mb-2 mb-lg-4">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-secondary white-font fw-bold" type="button">Get Initial Evaluation NOW</button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* slide 2 */}
                    <Carousel.Item>
                        <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                        <Carousel.Caption>
                            <h3 className="d-none d-md-block">We collect your items, free of charge</h3>
                            <h4 className="d-block d-md-none">We collect your items, free of charge</h4>
                            <p className="consignment-carousel-text consignment-carousel-spacing">
                                Sit back and relax while our experts will contact you and collect the items you want to sell. We arrange a FREE home pick-up for all eligible bags, watches and prestige jewelry. For apparel, there is a $5 pick up fee.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* slide 3 */}
                    {/* <Carousel.Item>
                        <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                        <Carousel.Caption>
                            <h3>Get a quote</h3>
                            <p className="consignment-carousel-quote">
                                Our experts will evaluate your items and offer you a quote within 5-10 days. 
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    {/* slide 4 */}
                    <Carousel.Item>
                        <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                        <Carousel.Caption>
                            <h3 className="d-none d-md-block">We take care of everything</h3>
                            <h4 className="d-block d-md-none">We take care of everything</h4>
                            <p className="consignment-carousel-text consignment-carousel-spacing">
                                That means item curation, descriptions, display, pricing, photography, quality control, authentication, item listing on Luxury Pre-owned platform and trace progress of your sales including sales transaction processing. 
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* slide 5 */}
                    <Carousel.Item>
                        <div className="d-block w-100 light-grey-bg consignment-carousel-block"></div>
                        <Carousel.Caption>
                            <h3>You get paid</h3>
                            <p className="consignment-carousel-text consignment-carousel-spacing">
                                Once your item is sold, we send a direct payment to your account. You can earn up to 80% of the sale price. 
                            </p>
                            {/* button */}
                            <div class="ms-4 me-4 mb-2 mb-4">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-secondary white-font fw-bold" type="button">See the Payout Scheme</button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </React.Fragment>
    )
}


                