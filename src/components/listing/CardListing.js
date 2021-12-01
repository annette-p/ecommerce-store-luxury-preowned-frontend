import React, {useContext} from 'react';
import ProductContext from '../../contexts/products/ProductContext';
import { Link } from 'react-router-dom';

// import ProductPage from '../../pages/ProductPage'

export default function CardListing(){

    let context = useContext(ProductContext);

    return (
        <React.Fragment>
            {/* card */}
            <div className="row ms-1 mt-4">
            {
                context.getProducts().map( (p)=>{
                    return (

                        <div className="col mb-3">
                            <Link to={"/product/" + p.id} className="no-underline">
                                <div className="card listing-card" key={p.id}>
                                    <img src={require("../../images/product/dior-mini-saddle-shoulder.jpg").default}
                                    // ref: https://stackoverflow.com/questions/48703510/change-image-on-hover-in-jsx
                                    onMouseOver={e => (e.currentTarget.src = require("../../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                                    onMouseOut={e => (e.currentTarget.src = require("../../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                                    className="card-img-top card-img-container" alt="doirMiniShoulderBag"/>
                                    <div className="card-body">
                                        <h5>{p.designer}</h5>
                                        <p className="card-text">{p.name}</p>
                                        <div className="fw-bold">$S{p.price}</div>
                                        <div className="fw-light fst-italic">Est. Retail<span>$S{p.retail_price}</span></div>
                                    </div>
                                </div>
                            </Link> 
                        </div>          
                    )
                })
            }
            
                {/* to REMOVE */}
                <div className="col mb-3">
                    <div className="card listing-card">
                        <img src={require("../../images/product/dior-mini-saddle-shoulder.jpg").default}
                        // ref: https://stackoverflow.com/questions/48703510/change-image-on-hover-in-jsx
                        onMouseOver={e => (e.currentTarget.src = require("../../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                        onMouseOut={e => (e.currentTarget.src = require("../../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                        className="card-img-top card-img-container" alt="doirMiniShoulderBag"/>
                        <div className="card-body">
                            <h5>Dior</h5>
                            <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                            <div className="fw-bold">$S3,500</div>
                            <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card listing-card">
                        <img src={require("../../images/product/dior-mini-saddle-shoulder.jpg").default}
                        onMouseOver={e => (e.currentTarget.src = require("../../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                        onMouseOut={e => (e.currentTarget.src = require("../../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                        className="card-img-top card-img-container" alt="doirMiniShoulderBag"/>
                        <div className="card-body">
                            <h5>Dior</h5>
                            <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                            <div className="fw-bold">$S3,500</div>
                            <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card listing-card">
                        <img src={require("../../images/product/dior-mini-saddle-shoulder.jpg").default}
                        onMouseOver={e => (e.currentTarget.src = require("../../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                        onMouseOut={e => (e.currentTarget.src = require("../../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                        className="card-img-top card-img-container" alt="doirMiniShoulderBag"/>
                        <div className="card-body">
                            <h5>Dior</h5>
                            <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                            <div className="fw-bold">$S3,500</div>
                            <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card listing-card">
                        <img src={require("../../images/product/dior-mini-saddle-shoulder.jpg").default}
                        onMouseOver={e => (e.currentTarget.src = require("../../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                        onMouseOut={e => (e.currentTarget.src = require("../../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                        className="card-img-top card-img-container" alt="doirMiniShoulderBag"/>
                        <div className="card-body">
                            <h5>Dior</h5>
                            <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                            <div className="fw-bold">$S3,500</div>
                            <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}