import React, {useContext, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useRouteMatch } from "react-router-dom";
import { Redirect } from 'react-router';
import Accordion from 'react-bootstrap/Accordion'
// import UserProfileProvider from '../contexts/profile/UserProfileProvider';
import Dashboard from '../components/profile/Dashboard'
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

    function renderSideNavigationBar() {
        return (
            <div className="ps-1 col-bg">
                <Link to={`${url}/dashboard`}>
                    <div className="mt-3 col-hover">
                        <div className="btn white-font mt-2">Dashboard</div>
                    </div>
                </Link>
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
                <Link to={`${url}/account-settings`}>
                    <div className="mt-3 col-hover">
                        <div className="btn white-font">Account Settings</div>
                    </div>
                </Link>
                <div className="mt-3 col-hover">
                    <div className="btn white-font mb-3" onClick={() => {logoutUser()}}>Logout</div>  
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className=""> {/* container */}

                <Router>

                    <div className="row">

                        {/* sidebar navigation list - for ipad and laptop */}
                        <div className="d-none d-md-block col-md-4 col-lg-2">
                            {renderSideNavigationBar()}
                        </div>

                        {/* sidebar navigation list - for mobile */}
                        <div className="d-block d-md-none col-12 mt-4">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Navigation Menu</Accordion.Header>
                                    <Accordion.Body>
                                        {/* sidebar navigation list */}
                                        {renderSideNavigationBar()}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        {/* Each profile content */}
                        <div className="col-12 col-md-8 col-lg-10">

                            {/* <UserProfileProvider> */}

                                <Switch>
                                    <Route exact path={`${url}`}>
                                        <Redirect to={`${url}/dashboard`} />
                                    </Route>
                                    <Route path={`${url}/dashboard`}>
                                        <Dashboard/>
                                    </Route>
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