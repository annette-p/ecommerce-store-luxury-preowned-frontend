import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

export default function ShopCarousel(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <React.Fragment>

            <div className="row mt-3">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {/* item 1 */}
                    <Carousel.Item>
                        <img className="d-none d-md-block shop-carousel-div"
                            src={require('../../images/banner/gg-runway.jpg').default}
                            alt="First slide"
                        />
                        <img className="d-block d-md-none shop-carousel-div"
                            src={require('../../images/banner/sm-gg-runway.jpg').default}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="row custom-caption-carousel">
                                <div className="d-none d-lg-block">
                                    <h1 className="text text-start">Shop<span className="fw-bold gold-color">.</span></h1>
                                    <h1 className="text text-start">Sell<span className="fw-bold gold-color">.</span></h1>
                                    <h1 className="text text-start">Repeat<span className="fw-bold gold-color">.</span></h1>
                                </div>
                                <div className="d-block d-lg-none">
                                    <h4 className="text text-start">Shop<span className="fw-bold gold-color">.</span></h4>
                                    <h4 className="text text-start">Sell<span className="fw-bold gold-color">.</span></h4>
                                    <h4 className="text text-start">Repeat<span className="fw-bold gold-color">.</span></h4>
                                </div>
                                <div className="text text-start cap-text mt-1 mt-md-2">Protect the Environment</div>
                                <div className="text text-start cap-text mb-3 mb-md-4">Through Circular Fashion</div>
                            </div>
                            <div className="row custom-caption-carousel">
                                <div className="col-md-6 col-lg-12 mb-1 mb-md-0 mb-lg-2">
                                    <button type="button" className="btn btn-secondary left-align small-btn">Shop Limited Edition<span className="fw-bold gold-color">&nbsp; &gt;&gt;</span></button>
                                </div>
                                <div className="col-md-6 col-lg-12 margin-bottom left-margin">
                                    <Link to="/consignment" className="no-underline">
                                        <button type="button" 
                                            className="btn btn-secondary left-align carousel-sell-btn small-btn">
                                            Sell with Us
                                            <span className="sell-btn fw-bold gold-color">&nbsp; &gt;&gt;
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* item 2 */}
                    <Carousel.Item>
                        <img className="d-block shop-carousel-div"
                            src={require('../../images/banner/gg-x-balenciaga.jpg').default}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className="row second-custom-cap-carousel">
                                <h3 className="text">Runway Collections</h3>
                                <div className="mt-3 text text-center second-carousel-text">Add another luxury collection to or offloading from your closet</div>
                                <div className="mb-3 text text-center second-carousel-text">Whether to splurge or sell or both, you can do it right here</div>
                            </div>
                            <div className="row second-custom-cap-carousel-btn">
                                <div className="col d-none d-lg-block"></div>
                                <div className="col">
                                    <Link to="/coming-soon" className="no-underline">
                                        <button type="button" className="btn btn-secondary left-align small-btn">Become VIP customer<span className="fw-bold gold-color">&nbsp; &gt;&gt;</span></button>
                                    </Link>
                                </div>
                                <div className="col d-none d-lg-block"></div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* item 3 */}
                    <Carousel.Item>
                        <img className="d-none d-md-block shop-carousel-div"
                            src={require('../../images/banner/lv-classic.jpg').default}
                            alt="Third slide"
                        />
                        <img className="d-block d-md-none shop-carousel-div"
                            src={require('../../images/banner/sm-lv-classic.jpg').default}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="row third-custom-caption-carousel">
                                <h3 className="text text-start">Affordable Luxury</h3>
                                <div className="fw-bold text text-start mt-3 third-carousel-text">Wear Now, pay LATER</div>
                                <div className="text text-start third-carousel-text">Own your dream items and</div>
                                <div className="text text-start mb-4 third-carousel-text">pay into 3, 6, or 12 monthly installments</div>
                            </div>
                            <div className="mt-1 row third-custom-caption-carousel">
                                <div className="col-12">
                                <Link to="/coming-soon" className="no-underline">
                                    <button type="button" className="btn btn-secondary left-align third-margin-btm">Register for Interest<span className="ms-2 fw-bold gold-color">&nbsp; &gt;&gt;</span></button>
                                </Link>
                                    
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* item 4 */}
                    <Carousel.Item>
                        <img className="d-none d-md-block shop-carousel-div"
                            src={require('../../images/banner/lv-newcollection.jpg').default}
                            alt="Third slide"
                        />
                        <img className="d-block d-md-none shop-carousel-div"
                            src={require('../../images/banner/sm-lv-newcollection.jpg').default}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="row forth-custom-caption-carousel">
                                <h3 className="text text-start d-none d-lg-block">Top Brand Latest Collection</h3>
                                <h4 className="text text-start d-block d-lg-none">Top Brand Latest Collection</h4>
                                <div className="fw-bold text text-start mt-3 third-carousel-text">At much FRIENDLY price</div>
                                <div className="text text-start third-carousel-text">Stay sustainable by giving a second life</div>
                                <div className="text text-start mb-4 third-carousel-text">to the fashion we no longer wear</div>
                            </div>
                            <div className="mt-1 row forth-custom-caption-carousel">
                                <div className="col-12">
                                    <button type="button" className="btn btn-secondary left-align third-margin-btm">Shop New Arrival<span className="ms-2 fw-bold gold-color">&nbsp; &gt;&gt;</span></button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </React.Fragment>
    )
}
