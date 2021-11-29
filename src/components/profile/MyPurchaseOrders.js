import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import OrderSummary from './OrderSummary'
import OrderNone from './OrderNone'
// import OrderDetails from './OrderDetails'

export default function MyPurchaseOrders(){

    const [activePage, setActivePage] = useState("Deliver")
    let { url } = useRouteMatch();

    return (
        <React.Fragment>

            <Router>

                <div className="row mt-4 mb-4 me-2">
                    {/* Nav list */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation" onClick={() => {setActivePage("Deliver")}}>
                            <Link to={`${url}/deliver`} type="button" className={activePage === "Deliver" ? "nav-link active" : "nav-link"}>To Deliver</Link>
                        </li>
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Receive")}}>
                            <Link to={`${url}/receive`} type="button" className={activePage === "Receive" ? "nav-link active" : "nav-link"}>To Receive</Link>
                        </li>
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Completed")}}>
                            <Link to={`${url}/completed`} type="button" className={activePage === "Completed" ? "nav-link active" : "nav-link"}>Completed</Link>
                        </li>
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
                                <Route  path={`${url}/deliver`}>
                                    <OrderSummary/>
                                </Route>
                                <Route  path={`${url}/receive`}>
                                    <OrderNone/>
                                </Route>
                                <Route  path={`${url}/completed`}>
                                    <OrderNone/>
                                </Route>
                                <Route  path={`${url}/cancelled`}>
                                    <OrderNone/>
                                </Route>
                                <Route  path={`${url}/refund`}>
                                    <OrderNone/>
                                </Route>
                            </Switch> 
                            
                            {/* to process using React context */}
                            {/* <OrderDetails/> */}

                        </div>
                    </div>

                </div>

            </Router>

        </React.Fragment>
    )
}