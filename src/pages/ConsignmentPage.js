import React, {useContext, useEffect, useState} from 'react'
import ConsignmentCarousel from '../components/consignment/ConsignmentCarousel'
import PayoutRates from '../components/consignment/PayoutRates'
import SellingMethod from '../components/consignment/SellingMethod'
import SellingAdvice from '../components/consignment/SellingAdvice'

import UserProfileContext from '../contexts/profile/UserProfileContext'

export default function ConsignmentPage(){

    const [loaded, setLoaded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const userContext = useContext(UserProfileContext);

    useEffect(() => {
        const checkUserAuthenticationStatus = async() => {
            setIsAuthenticated(userContext.isAuthenticated())
            setLoaded(true);
        }
        checkUserAuthenticationStatus()
    }, [loaded, userContext])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-4">
                    <h4>Consignment Service</h4>
                </div>
                {/* Carousel Section */}
                <ConsignmentCarousel />
                <div className="row mt-4">
                    <div className="container consign-container">
                        <p className="fs-5 pt-4 pb-3 pb-lg-3 text-center light-grey-hover consign-text">
                            Luxury Pre-owned offers an exclusive end-to-end service to anyone with exceptional items to consign.
                            This consignment service is available THROUGHOUT SINGAPORE and takes care of the whole process from collection to selling.
                        </p>
                    </div>
                </div>
                {/* Payout Rate - collapse buttons */}
                <PayoutRates />
                {/* Selling Section */}
                <div className="row mt-4">
                    <div className="mt-4 container consign-container">
                        <h4 className="text-center">START SELLING</h4>
                        <h6 className="mt-3">
                            Select your selling method 
                            <span className="ms-2 fw-normal">- Already have an account?</span>
                            <span className="ms-2 fw-normal text-decoration-underline"><a href="/login">Sign in</a></span>
                        </h6>  
                    </div>
                </div>
                {/* Selling request */}
                {isAuthenticated ? 
                    // user is already authenticated
                    <SellingMethod />
                : null}
                {/* Selling Advice */}
                <div className="row mt-3 mt-md-4">
                    <div className="col mt-4">
                        <h4 className="text-center">SELLING ADVICE</h4>     
                    </div>
                </div>
                <SellingAdvice />
                
            </div>
        </React.Fragment>
    )
}