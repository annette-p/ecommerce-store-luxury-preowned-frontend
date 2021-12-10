import React, { useContext, useEffect, useState } from 'react'

import UserProfileContext from '../../contexts/profile/UserProfileContext';

export default function Dashboard(){

    const [firstName, setFirstName] = useState();
    const [numOrders, setNumOrders] = useState([]);
    const [numConsignments, setNumConsignments] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const userContext = useContext(UserProfileContext);

    // to display the form with existing infomation frm the shared state in contex
    useEffect(() => {

        const fetchUserProfile = async () => {
            if (!loaded) {
                setFirstName(userContext.getUserInfoFromLocalStorage().info.firstname);
                setNumOrders(userContext.getNumberOfPurchaseOrders());
                setNumConsignments(userContext.getNumberOfSellingOrders());
                setLoaded(true);
            }
        }
        fetchUserProfile();

    }, [loaded, userContext]) 

    return (
        <React.Fragment>
            <div className="row mt-4">
                <h4 className="mt-3 mb-0 mb-md-4">Hello {firstName}</h4>
                <div className="d-none d-lg-block col-1 mt-4"></div>
                <div className="col mt-4 ms-0 ms-lg-4">
                    <div className="card light-gold-bg dashboard-card">
                        <div className="card-body text-center">
                            <h6 className="card-subtitle mb-2 text-muted">BUY</h6>
                            <h1>{numOrders}</h1>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mb-4">
                    <div className="card total-card-bg light-gold-bg dashboard-card">
                        <div className="card-body text-center">
                            <h6 className="card-subtitle mb-2 text-muted">SELL</h6>
                            <h1>{numConsignments}</h1>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block col-1 mt-4"></div>
            </div>
        </React.Fragment>
    )
}