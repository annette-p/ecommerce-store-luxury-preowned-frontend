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
                <h4 class="mt-3 mb-0 mb-md-4">Hello {firstName}</h4>
                <div class="d-none d-lg-block col-1 mt-4"></div>
                <div class="col mt-4 ms-0 ms-lg-4">
                    <div class="card light-gold-bg dashboard-card">
                        <div class="card-body text-center">
                            <h6 class="card-subtitle mb-2 text-muted">BUY</h6>
                            <h1>{numOrders}</h1>
                        </div>
                    </div>
                </div>
                <div class="col mt-4 mb-4">
                    <div class="card total-card-bg light-gold-bg dashboard-card">
                        <div class="card-body text-center">
                            <h6 class="card-subtitle mb-2 text-muted">SELL</h6>
                            <h1>{numConsignments}</h1>
                        </div>
                    </div>
                </div>
                <div class="d-none d-lg-block col-1 mt-4"></div>
            </div>
        </React.Fragment>
    )
}