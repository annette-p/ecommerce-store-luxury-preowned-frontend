import React, { useState } from 'react';
import CartPage from '../../pages/CartPage'
import ProductInfo from './ProductInfo'
import SellWithUs from './SellWithUs'

export default function ProductDetails({product}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-4 mb-4">
                    <div className="col-1">
                    </div>
                    {/* image section */}
                    <div className="col">
                        <div className="card" style={{width: "30rem"}}>
                            <img className="card-img-top product-img-container"
                            src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                            alt="first"/>
                        </div>
                        <div className="row mt-2">
                            <div className="img-bucket horizontal-scrollbar">
                                {/* img 1 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 2 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 3 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 4 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 5 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 6 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 7 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 8 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 9 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                                {/* img 10 */}
                                <div class="additional-img-div me-1">
                                    <img className="product-img-cart"
                                    src={require('../../images/product/dior-mini-saddle-shoulder.jpg').default}
                                    alt="product"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    {/* details section */}
                    <div className="col">
                        <div className="row">
                            <h5>{product.designer}</h5>
                            <p className="card-text">{product.name}</p>
                            <div className="fw-bold">{product.price}</div>
                            <div className="fw-light fst-italic">Est. Retail<span>${product.retail_price}</span></div>
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
                        <SellWithUs/>
                        {/* Collapse option - product details */}
                        <ProductInfo/>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}