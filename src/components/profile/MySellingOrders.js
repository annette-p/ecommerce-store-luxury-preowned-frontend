import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ConsignmentOrderSummary from './ConsignmentOrderSummary'
import ConsignmentOrderDetails from './ConsignmentOrderDetails'


export default function MySellingOrders(){

    const [activePage, setActivePage] = useState("Progress")
    let { url } = useRouteMatch();

    return (
        <React.Fragment>

            <Router>

                <div className="row mt-4">
                    {/* Nav list */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                        <li className="nav-item" role="presentation" onClick={() => {setActivePage("Progress")}}>
                            <Link to={`${url}/progress`} type="button" className={activePage === "Progress" ? "nav-link active" : "nav-link"}>In Progress</Link>
                        </li>
                        {/* the items that are currently listed - link to product listing/product page */}
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Listing")}}>
                            <Link to={`${url}/listing`} type="button" className={activePage === "Listing" ? "nav-link active" : "nav-link"}>Listing</Link>
                        </li>
                        {/* Item that status is sold */}
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Completed")}}>
                            <Link to={`${url}/completed`} type="button" className={activePage === "Completed" ? "nav-link active" : "nav-link"}>Completed</Link>
                        </li>
                        {/* it's either rejected by the store or customer change mind not selling anymore */}
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Cancelled")}}>
                            <Link to={`${url}/cancelled`} type="button" className={activePage === "Cancelled" ? "nav-link active" : "nav-link"}>Cancelled</Link>
                        </li>
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Refund")}}>
                            <Link to={`${url}/refund`} type="button" className={activePage === "Refund" ? "nav-link active" : "nav-link"}>Return Refund</Link>
                        </li>
                    </ul>
                    {/* content container */}
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <Switch>
                                {/* <Route  path={`${url}/progress`}>
                                    <ConsignmentOrderSummary/>
                                </Route>
                                <Route  path={`${url}/listing`}>
                                    <ConsignmentOrderNone/>  
                                </Route>
                                <Route  path={`${url}/completed`}>
                                    <ConsignmentOrderNone/>  
                                </Route>
                                <Route  path={`${url}/cancelled`}>
                                    <ConsignmentOrderNone/>  
                                </Route>
                                <Route  path={`${url}/refund`}>
                                    <ConsignmentOrderNone/>  
                                </Route> */}

                                <Route path={`${url}/:order_status/:order_id/order-details`}>
                                    <ConsignmentOrderDetails/>
                                </Route>
                                <Route path={`${url}/:order_status`}>
                                    <ConsignmentOrderSummary/>
                                </Route>
                            </Switch> 
                            
                            
                        </div>
                    </div>

                </div>

            </Router>
        </React.Fragment>
    )
}