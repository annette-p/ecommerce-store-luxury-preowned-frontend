import React from 'react'


export default function CardListing(){
    return (
        <React.Fragment>
            {/* card */}
            <div className="col mb-3">
                <div className="card listing-card">
                    <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default}
                    // ref: https://stackoverflow.com/questions/48703510/change-image-on-hover-in-jsx
                    onMouseOver={e => (e.currentTarget.src = require("../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                    onMouseOut={e => (e.currentTarget.src = require("../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                    className="card-img-top" alt="doirMiniShoulderBag"/>
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
                    <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default}
                    onMouseOver={e => (e.currentTarget.src = require("../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                    onMouseOut={e => (e.currentTarget.src = require("../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                    className="card-img-top" alt="doirMiniShoulderBag"/>
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
                    <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default}
                    onMouseOver={e => (e.currentTarget.src = require("../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                    onMouseOut={e => (e.currentTarget.src = require("../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                    className="card-img-top" alt="doirMiniShoulderBag"/>
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
                    <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default}
                    onMouseOver={e => (e.currentTarget.src = require("../images/product/review-dior-mini-saddle-shoulder.jpg").default)} 
                    onMouseOut={e => (e.currentTarget.src = require("../images/product/dior-mini-saddle-shoulder.jpg").default)} 
                    className="card-img-top" alt="doirMiniShoulderBag"/>
                    <div className="card-body">
                        <h5>Dior</h5>
                        <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                        <div className="fw-bold">$S3,500</div>
                        <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}