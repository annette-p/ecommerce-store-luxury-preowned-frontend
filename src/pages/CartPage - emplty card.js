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
                        <div className="empty-cart">
                            Your Cart is Empty
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}