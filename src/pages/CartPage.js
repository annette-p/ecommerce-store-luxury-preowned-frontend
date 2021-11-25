import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCartArrowDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


export default function CartPage({ ...props }){
    return (
        <React.Fragment>
            <Offcanvas show={props.show} onHide={props.handleClose} {...props}>   {/* is a short cut of: <Offcanvas onHide={props.handleClose} show={props.show} placement={props.placement}> 
            note: placement indicate which direction the canvas will show (start, end, top, bottom) */}
                <Offcanvas.Header closeButton className="grey-bg"> 
                    <Offcanvas.Title><FontAwesomeIcon icon={faCartArrowDown} className="cart-icon"/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="grey-bg white-font"> 
                    <hr className="dark-grey cart-hr"></hr>
                    <div className="row">
                        {/* product image */}
                        <div className="col">
                            <img className="product-img-cart"
                            src={require('../images/product/dior-mini-saddle-shoulder.jpg').default}
                            alt="product"/>
                            {/* ---linkable to product page--- */}
                        </div>
                        {/* product description */}
                        <div className="col product-des-cart">
                            {/* ---linkable to product page--- */}
                            <div>Dior</div>
                            <div>Diorissimo Canvas and Leather Mini Saddle Shoulder Bag</div>
                            <div><span className="fw-bold">Condition: </span>Used like new</div>
                            <div className="fw-bold">$S 3,500</div>
                        </div>
                        {/* Quantity Control Section */}
                        <div className="col-12 mb-1">
                            <form class="d-flex mt-4 quantity-control-sec">
                                <button class="btn btn-outline-secondary gold-hover white-font me-1 quantity-btn" type="submit">
                                    <FontAwesomeIcon icon={faPlus} className="mb-1"/>
                                </button>
                                <input class="form-control me-1 quantity-form" type="" placeholder="1" aria-label=""/>   {/* -- default quantity -- */}
                                <button class="btn btn-outline-secondary gold-hover white-font quantity-btn" type="submit">
                                    <FontAwesomeIcon icon={faMinus} className="mb-1"/>
                                </button>
                                {/* trash */}
                                <FontAwesomeIcon icon={faTrashAlt} className="ms-4 trash-icon"/>
                            </form> 
                        </div>
                        <hr className="white-hr"></hr>
                    </div>
                    {/* summary section */}
                    <div class="row summary-section">
                        <hr className="dark-grey"></hr>
                        <div class="col">
                            <div>Total <span>(1 item)</span></div>
                            <div className="mt-1">Shipping</div>
                            <div className="mt-1">Total Order</div>
                        </div>
                        <div class="col total-number">
                            <div><span className="me-2">S$</span>3,500</div>
                            <div className="mt-1"><span className="free"></span>Free</div>
                            <div className="mt-1"><span className="me-2">S$</span>3,500</div>
                        </div>
                        {/* button */}
                        <form class="d-flex mt-4">
                            <input class="form-control me-1" type="" placeholder="Add voucher code" aria-label=""/>
                            <button class="btn btn-secondary gold-hover" type="submit">APPLY</button>
                        </form>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-secondary gold-hover" type="button">CHECK OUT</button>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}