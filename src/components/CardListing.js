import React from 'react'


export default function CardListing(){
    return (
        <React.Fragment>
            {/* card */}
            <div className="row ms-1 mt-4">
                <div className="col mb-3">
                    <div className="card listing-card">
                        <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
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
                        <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
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
                        <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
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
                        <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
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