import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import ShopCarousel from '../components/ShopCarousel'

export default function MainPage(){
    return (
        <React.Fragment>
            <div className="container">
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
                    {/* Navigation tap */}
                    <div className="col">
                        <ul className="nav justify-content-end mt-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/product">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/product">Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/product">Cart</a>
                            </li>
                        </ul>
                    </div> 
                </div>
                {/* Nav options */}
                <div className="row mt-3">
                    <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link href="/home">Just in</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Limited edition</Nav.Link>
                        </Nav.Item>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Designers</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Alexander McQueen</Dropdown.Item>
                                <Dropdown.Item>Alexander Wang</Dropdown.Item>
                                <Dropdown.Item>Balenciaga</Dropdown.Item>
                                <Dropdown.Item>Gucci</Dropdown.Item>
                                <Dropdown.Item>Celine</Dropdown.Item>
                                <Dropdown.Item>Chanel</Dropdown.Item>
                                <Dropdown.Item>Christian Dior</Dropdown.Item>
                                <Dropdown.Item>Christian Louboutin</Dropdown.Item>
                                <Dropdown.Item>Dolce Gabbana</Dropdown.Item>
                                <Dropdown.Item>Fendi</Dropdown.Item>
                                <Dropdown.Item>Hermes</Dropdown.Item>
                                <Dropdown.Item>Loius Vuitton</Dropdown.Item>
                                <Dropdown.Item>Miu Miu</Dropdown.Item>
                                <Dropdown.Item>Patek Philippe</Dropdown.Item>
                                <Dropdown.Item>Prada</Dropdown.Item>
                                <Dropdown.Item>Rolex</Dropdown.Item>
                                <Dropdown.Item>Siant Laurent</Dropdown.Item>
                                <Dropdown.Item>Valentino</Dropdown.Item>
                                <Dropdown.Item>Versace</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>By categories</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Bag</Dropdown.Item>
                                <Dropdown.Item>Shoe</Dropdown.Item> 
                                <Dropdown.Item>Clothing</Dropdown.Item> 
                                <Dropdown.Item>Jewelry</Dropdown.Item> 
                                <Dropdown.Item>Watch</Dropdown.Item> 
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Vintage</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Voucher</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr className="mt-1"></hr>
                </div>
                {/* Carousel */}
                <div class="row mt-3">
                    <ShopCarousel/>
                </div>
                {/* card */}
                <div className="row ms-1 mt-4">
                    <div className="col mb-3">
                        <div className="card listing-card">
                            <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
                            <div className="card-body">
                                <h5>Dior</h5>
                                <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                                <div className="fw-bold">$S3,500</div>
                                <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card listing-card">
                            <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
                            <div className="card-body">
                                <h5>Dior</h5>
                                <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                                <div className="fw-bold">$S3,500</div>
                                <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card listing-card">
                            <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
                            <div className="card-body">
                                <h5>Dior</h5>
                                <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                                <div className="fw-bold">$S3,500</div>
                                <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card listing-card">
                            <img src={require("../images/product/dior-mini-saddle-shoulder.jpg").default} className="card-img-top" alt="doirMiniShoulderBag"/>
                            <div className="card-body">
                                <h5>Dior</h5>
                                <p className="card-text">Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</p>
                                <div className="fw-bold">$S3,500</div>
                                <div className="fw-light fst-italic">Est. Retail<span>$S3,500</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}