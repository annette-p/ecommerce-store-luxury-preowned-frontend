import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyPurchaseOrders from '../components/profile/MyPurchaseOrders'
import MySellingOrders from '../components/profile/MySellingOrders'
import EditProfile from '../components/profile/EditProfile'

export default function ProfilePage(){
    let { url } = useRouteMatch();
    return (
        <React.Fragment>
            <div className="container">

                <Router>

                    <div class="row">
                        {/* sidebar navigation list */}
                        <div class="col-2">
                            <div class="ps-1 col-bg">
                                <div class="mt-3 col-hover">
                                    <div class="btn white-font mt-2">Dashboard</div>
                                </div>
                                <Link to={`${url}/purchases`}>
                                    <div class="mt-3 col-hover">
                                        <div class="btn white-font">My Purchases</div>
                                    </div>
                                </Link>
                                <Link to={`${url}/sellings`}> 
                                    <div class="mt-3 col-hover">
                                        <div class="btn white-font">My Selling</div>
                                    </div>
                                </Link>
                                <div class="mt-3 col-hover">
                                    <div class="btn white-font">Order History</div>
                                </div>
                                <Link to={`${url}/account-settings`}>
                                    <div class="mt-3 col-hover">
                                        <div class="btn white-font">Account Settings</div>
                                    </div>
                                </Link>
                                <div class="mt-3 col-hover">
                                    <div class="btn white-font mb-3">Logout</div>  
                                </div>
                            </div>
                        </div>

                        {/* Each profile content */}
                        <div class="col-10">
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
                        </div>
                    </div>

                </Router>

            </div>
        </React.Fragment>
    )
}