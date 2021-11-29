import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import NavFilterOption from '../components/main/NavFilterOption'
import Footer from '../components/main/Footer'
import ListingPage from './ListingPage'
import ProductPage from "./ProductPage"; 
import ProfilePage from "./ProfilePage";
import ConsignmentPage from "./ConsignmentPage";

// import LoginModal from '../components/main/LoginModal'

export default function MainPage(){

    // const [showLogin, setShowLogin] = useState(false);
    // const handleCloseLogin = () => setShowLogin(false);
    // const handleShowLogin = () => setShowLogin(true);

    return (
        <React.Fragment>
            <div className="container">

                <Router>

                    {/* Navbar and search input */}
                    <div className="row mt-4 bg-light bg-color">
                        {/* logo */}
                        <div className="col">
                            {/* <a className="navbar-brand logo" href="#"></a> */}
                            {/* <a className="navbar-brand text-logo" href="#"></a>  */}
                            <a className="navbar-brand" href="/product">
                                <img src={require('../images/logo/lp-logo.jpg').default} id="logo" alt="logo"/>
                                <img src={require('../images/logo/text-lp-logo.jpg').default} id="text-logo" alt="logo"/>
                            </a>
                        </div>
                        {/* Search input */}
                        <div className="col">
                            <form className="d-flex justify-content-center mt-3">
                                <input className="form-control me-2 search-box" type="search" placeholder="Search" aria-label="Search"/>
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                        {/* Sell / Sign in / Cart tap */}
                        <div className="col">
                            <ul className="nav justify-content-end mt-3">
                                {/* sell icon */}
                                <Link to="/start-selling">
                                    <li className="nav-item">
                                        <OverlayTrigger
                                            key="sell-icon"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-bottom-sell-icon">
                                                    Sell with Us!
                                                </Tooltip>
                                            }>
                                            <a className="nav-link active" aria-current="page" href="/product">
                                                <FontAwesomeIcon icon={faHandHoldingUsd} className="sell-icon"/>
                                            </a>
                                        </OverlayTrigger>
                                    </li>
                                </Link>
                                {/* user icon */}
                                <Link to="/login">
                                    <li className="nav-item">
                                        <OverlayTrigger
                                            key="user-icon"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-bottom-user-icon">
                                                    Login
                                                </Tooltip>
                                            }>
                                            <a className="nav-link" href="/product">
                                                <FontAwesomeIcon icon={faUser} className="user-icon"/>
                                            </a>
                                        </OverlayTrigger>
                                    </li>
                                </Link>
                                {/* cart icon */}
                                <Link to="/shopping-cart">
                                    <li className="nav-item">
                                        <OverlayTrigger
                                            key="cart"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-bottom-cart">
                                                    Shopping Cart
                                                </Tooltip>
                                            }>
                                            <a className="nav-link" href="/product">
                                                <FontAwesomeIcon icon={faCartArrowDown} className="cart"/>
                                            </a>
                                        </OverlayTrigger>
                                    </li>
                                </Link>
                                {/* login Modal Pop-up */}
                                {/* <LoginModal/> */}
                            </ul>
                        </div> 
                    </div>
                    {/* Nav options */}
                    <NavFilterOption/>

                    <Switch> 
                        <Route exact path="/">
                            {/* Listing Page */}
                            <ListingPage/>
                        </Route>
                        <Route exact path="/product">
                            <ProductPage/> 
                        </Route> 
                        <Route exact path="/profile">
                            <ProfilePage/>
                        </Route> 
                        <Route exact path="/consignment">
                            <ConsignmentPage/>
                        </Route>
                    </Switch> 

                    {/* footer section */}
                    <Footer/>

                </Router>
                
            </div>
        </React.Fragment>
    )
}