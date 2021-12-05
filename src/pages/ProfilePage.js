import React, {useContext, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useRouteMatch } from "react-router-dom";
// import UserProfileProvider from '../contexts/profile/UserProfileProvider';
import MyPurchaseOrders from '../components/profile/MyPurchaseOrders'
import MySellingOrders from '../components/profile/MySellingOrders'
import EditProfile from '../components/profile/EditProfile'

import UserProfileContext from '../contexts/profile/UserProfileContext';

export default function ProfilePage(){
    let { url } = useRouteMatch();
    const history = useHistory();
    const userContext = useContext(UserProfileContext);

    useEffect(() => {
        //
    }, [userContext])

    function logoutUser() {
        userContext.logoutUser();
        history.push("/");
    }

    return (
        <React.Fragment>
            <div className="container">

                <Router>

                    <div className="row">
                        {/* sidebar navigation list */}
                        <div className="col-2">
                            <div className="ps-1 col-bg">
                                <div className="mt-3 col-hover">
                                    <div className="btn white-font mt-2">Dashboard</div>
                                </div>
                                <Link to={`${url}/purchases`}>
                                    <div className="mt-3 col-hover">
                                        <div className="btn white-font">My Purchases</div>
                                    </div>
                                </Link>
                                <Link to={`${url}/sellings`}> 
                                    <div className="mt-3 col-hover">
                                        <div className="btn white-font">My Selling</div>
                                    </div>
                                </Link>
                                <div className="mt-3 col-hover">
                                    <div className="btn white-font">Order History</div>
                                </div>
                                <Link to={`${url}/account-settings`}>
                                    <div className="mt-3 col-hover">
                                        <div className="btn white-font">Account Settings</div>
                                    </div>
                                </Link>
                                <div className="mt-3 col-hover">
                                    <div className="btn white-font mb-3" onClick={() => {logoutUser()}}>Logout</div>  
                                </div>
                            </div>
                        </div>

                        {/* Each profile content */}
                        <div className="col-10">

                            {/* <UserProfileProvider> */}

                                <Switch>
                                    <Route path={`${url}/purchases`}>
                                        <MyPurchaseOrders/>
                                    </Route>
                                    <Route path={`${url}/sellings`}>
                                        <MySellingOrders/> 
                                    </Route>
                                    <Route path={`${url}/account-settings`}>
                                        <EditProfile/>   
                                    </Route>
                                </Switch> 

                            {/* </UserProfileProvider> */}
                            
                        </div>
                    </div>

                </Router>

            </div>
        </React.Fragment>
    )
}