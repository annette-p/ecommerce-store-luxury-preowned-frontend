import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CartPage from '../../pages/CartPage'
import ProductInfo from './ProductInfo'
import SellWithUs from './SellWithUs'
import DontMissOutModal from './DontMissOutModal'
// import CheckoutPage from '../../pages/CheckoutPage' // to remove later

import CartContext from '../../contexts/carts/CartContext';


export default function ProductDetails({product}){

    const images = [
        'product_image_1', 'product_image_2',
        'product_gallery_1', 'product_gallery_2', 'product_gallery_3', 'product_gallery_4',
        'product_gallery_5', 'product_gallery_6', 'product_gallery_7', 'product_gallery_8'
    ]

    const history = useHistory();

    const [carouselImg, setCarouselImg] = useState(product[images[0]])
    const [show, setShow] = useState(false);
    const [soldOut, setSoldOut] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        console.log("...")
        setCarouselImg(product[images[0]])
        // eslint-disable-next-line
    }, [soldOut, product]);

    // add item to cart, and show cart details
    async function addItemToCart(productId) {
        try {
            let success = await cartContext.addProductToCart(productId, 1)
            if (success) {
                handleShow();
            } else {
                setSoldOut(true);
            }
        } catch(err) {
            setSoldOut(true);
            console.log(err);
        }
    }

    function renderItemSoldOut() {
        if (soldOut) {
            return (
                <div className="error-msg text-center mt-2">Sorry, item sold out</div>
            )
        }
    }

    // add the item to cart, and proceed to checkout
    async function buyNow(productId) {
        try {
            let success = await cartContext.addProductToCart(productId, 1)
            if (success) {
                // route to checkout page
                history.push("/checkout");
            } else {
                setSoldOut(true);
            }
        } catch(err) {
            setSoldOut(true);
            console.log(err)
        }
    }

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
                                            <div key={`${image}`} className="additional-img-div me-1">
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
                                <button className="btn btn-secondary gold-hover" type="button" onClick={() => buyNow(product.id)}>BUY NOW</button>
                                <button className="btn btn-secondary gold-hover" type="button" onClick={() => addItemToCart(product.id)}>ADD TO CART</button>
                                <CartPage handleClose={handleClose} placement="end" show={show} />
                                {renderItemSoldOut()}

                                {/* to remove later */}
                                {/* <CheckoutPage handleClose={handleClose} placement="end" show={show} /> */}
                                
                            </div>
                        </div>
                        {/* Sell with us */}
                        <SellWithUs/>
                        {/* Collapse option - product details */}
                        <ProductInfo product={product} />
                    </div>
                    <div className="col-1">
                    <DontMissOutModal/>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}