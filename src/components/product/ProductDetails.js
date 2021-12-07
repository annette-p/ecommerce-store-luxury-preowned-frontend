import React, { useEffect, useState } from 'react'
// import CartPage from '../../pages/CartPage'
import ProductInfo from './ProductInfo'
import SellWithUs from './SellWithUs'
import CheckoutPage from '../../pages/CheckoutPage' // to remove later


export default function ProductDetails({product}){

    const images = [
        'product_image_1', 'product_image_2',
        'product_gallery_1', 'product_gallery_2', 'product_gallery_3', 'product_gallery_4',
        'product_gallery_5', 'product_gallery_6', 'product_gallery_7', 'product_gallery_8'
    ]

    const [carouselImg, setCarouselImg] = useState(product[images[0]])
    const [show, setShow] = useState(false);
    console.log(product)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCarouselImg(product[images[0]])
    }, [product]);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-4 mb-4">
                    <div className="col-1"></div>
                    {/* image section */}
                    <div className="col ms-md-4 ms-lg-0">
                        <div className="card product-card">
                            <img className="card-img-top product-img-container"
                            src={carouselImg}
                            alt="first"/>
                        </div>
                        <div className="row mt-2">
                            <div className="img-bucket horizontal-scrollbar">
                                {images.map( image => {
                                    if (product[image]) {
                                        return (
                                            <div class="additional-img-div me-1">
                                                <img className="product-img-cart"
                                                src={product[image]}
                                                alt="product" onClick={() => setCarouselImg(product[image])}/>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                    
                                })}
                            </div> 
                        </div>
                    </div>
                    {/* details section */}
                    <div className="col mb-4">
                        <div className="row product-detail-section">
                            {product.designer && 
                                <h5>{product.designer.name}</h5>
                            }
                            <p className="card-text">{product.name}</p>
                            <div className="fw-bold">S${product.selling_price}</div>
                            <div className="fw-light fst-italic">Est. Retail<span> S${product.retail_price}</span></div>
                        </div>
                        {/* buttons */}
                        <div className="row mt-4">
                            <div className="d-grid gap-2 ms-2 ms-md-0">
                                <button className="btn btn-secondary gold-hover" type="button">BUY NOW</button>
                                <button className="btn btn-secondary gold-hover" type="button" onClick={handleShow}>ADD TO CART</button>
                                {/* <CartPage handleClose={handleClose} placement="end" show={show} /> */}

                                {/* to remove later */}
                                <CheckoutPage handleClose={handleClose} placement="end" show={show} />
                                
                            </div>
                        </div>
                        {/* Sell with us */}
                        <SellWithUs/>
                        {/* Collapse option - product details */}
                        <ProductInfo product={product} />
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}