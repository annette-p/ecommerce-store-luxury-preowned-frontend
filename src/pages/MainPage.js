import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import NavFilterOption from '../components/main/NavFilterOption'
import Footer from '../components/main/Footer'
// import ProductProvider from '../contexts/products/ProductProvider'
import CartProvider from '../contexts/carts/CartProvider';
import ConsignmentProvider from '../contexts/consignment/ConsignmentProvider';
import ListingPage from './ListingPage'
import ProductPage from "./ProductPage"; 
import ProfilePage from "./ProfilePage";
import ConsignmentPage from "./ConsignmentPage";
import CartPage from './CartPage';
import LoginModal from '../components/main/LoginModal'
import CheckoutPage from './CheckoutPage'; // to remove later
import AuthenticationPage from './AuthenticationPage';

import UserProfileContext from '../contexts/profile/UserProfileContext';
import ProductContext from '../contexts/products/ProductContext';

export default function MainPage(){

    // const [showLogin, setShowLogin] = useState(false);
    // const handleCloseLogin = () => setShowLogin(false);
    // const handleShowLogin = () => setShowLogin(true);

    // for shopping cart 
    const [show, setShow] = useState(true);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    // for nav bar
    const userContext = useContext(UserProfileContext);
    const productContext = useContext(ProductContext);

    useEffect(() => {
        setIsUserAuthenticated(userContext.isAuthenticated());
    }, [isUserAuthenticated, userContext, productContext])

    function updateSearchCriteria(newSearchText) {
        productContext.updateSearchCriteria(newSearchText)
    }

    function renderSearchBar() {
        return (
            <form className="d-flex justify-content-center mb-2 mt-2 search-box-div">
                <input className="form-control me-2 search-box" type="search" placeholder="Search" aria-label="Search" name="search" value={productContext.getSearchCriteria()} onChange={(e) => updateSearchCriteria(e.target.value)}/>
            </form>
        )
    }

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
                            <a className="navbar-brand" href="/">
                                <img src={require('../images/logo/lp-logo.jpg').default} id="logo" alt="logo"/>
                                <img src={require('../images/logo/text-lp-logo.jpg').default} id="text-logo" alt="logo"/>
                            </a>
                        </div>
                        {/* Search input  - render on laptop*/}
                        <div className="col d-none d-lg-block">
                            {renderSearchBar()}
                        </div>
                        {/* Sell / Sign in / Cart tap */}
                        <div className="col mt-1">
                            <ul className="nav justify-content-end mt-sm-2 mt-md-3">
                                <li className="nav-item mt-1">
                                    {/* Display first name of authenticated user */}
                                    <span className="fw-bold name-nav">Jenny</span>
                                    {/* {userContext.isAuthenticated() ? userContext.getUserProfile().firstname : null} */}
                                </li>
                                {/* sell icon */}
                                <Link to="/consignment">
                                    <li className="nav-item">
                                        <OverlayTrigger
                                            key="sell-icon"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-bottom-sell-icon">
                                                    Sell with Us!
                                                </Tooltip>
                                            }>
                                            {/* <a className="nav-link active" aria-current="page" href="/product"> */}
                                                <FontAwesomeIcon icon={faHandHoldingUsd} className="sell-icon"/>
                                            {/* </a> */}
                                        </OverlayTrigger>
                                    </li>
                                </Link>
                                {/* user icon */}
                                <Link to={userContext.isAuthenticated() ? "/profile" : "/login"}>
                                    <li className="nav-item">
                                        <OverlayTrigger
                                            key="user-icon"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-bottom-user-icon">
                                                    {userContext.isAuthenticated() ? "Manage Profile" : "Login"}
                                                </Tooltip>
                                            }>
                                            {/* <a className="nav-link" href="/"> */}
                                                <FontAwesomeIcon icon={faUser} className="user-icon"/>
                                            {/* </a> */}
                                        </OverlayTrigger>
                                    </li>
                                </Link>
                                {/* cart icon */}
                                <Link to="/shopping-cart" onClick={() => handleShow()}>
                                    <li className="nav-item">
                                        <OverlayTrigger
                                            key="cart"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-bottom-cart">
                                                    Shopping Cart
                                                </Tooltip>
                                            }>
                                            {/* <a className="nav-link" href="/product"> */}
                                                <FontAwesomeIcon icon={faCartArrowDown} className="cart"/>
                                            {/* </a> */}
                                        </OverlayTrigger>
                                    </li>
                                </Link>
                                {/* login Modal Pop-up */}
                                {/* <LoginModal/> */}
                            </ul>
                        </div> 
                        {/* Search input  - render on iPad and Mobile*/}
                        <div className="col d-sm-block d-md-block d-lg-none">
                            {renderSearchBar()}
                        </div>
                    </div>
                    {/* Nav options */}
                    <NavFilterOption/>


                    {/* <ProductProvider> */}
                    <ConsignmentProvider>
                        <CartProvider>

                            <Switch> 
                                <Route exact path="/">
                                    <ListingPage/>
                                </Route>
                                <Route path="/product/:productId">
                                    <ProductPage/> 
                                </Route> 
                                <Route exact path="/shopping-cart">
                                    <CartPage handleClose={handleClose} placement="end" show={show}/>
                                </Route>
                                {/* To remove later */}
                                <Route path="/checkout">
                                    <CheckoutPage handleClose={handleClose} placement="end" show={show}/>
                                </Route>
                                <Route exact path="/login">
                                    <LoginModal action="login"/>
                                </Route> 
                                <Route exact path="/signup">
                                    <LoginModal action="signup"/>
                                </Route> 
                                <Route path="/profile">
                                    <ProfilePage/>
                                </Route> 
                                <Route exact path="/consignment">
                                    <ConsignmentPage/>
                                </Route>
                                <Route exact path="/product-authentication">
                                    <AuthenticationPage/>
                                </Route>
                            </Switch>

                        </CartProvider>
                    </ConsignmentProvider>
                    {/* </ProductProvider> */}
                    

                    {/* footer section */}
                    <Footer/>

                </Router>
                
            </div>
        </React.Fragment>
    )
}