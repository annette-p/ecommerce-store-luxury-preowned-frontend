import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export default function CartPage({ ...props }){
    return (
        <React.Fragment>
            <Offcanvas show={props.show} onHide={props.handleClose} {...props}>   {/* is a short cut of: <Offcanvas onHide={props.handleClose} show={props.show} placement={props.placement}> 
            note: placement indicate which direction the canvas will show (start, end, top, bottom) */}
                <Offcanvas.Header closeButton> 
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="row">
                        <div className="col">
                            product image
                        </div>
                        <div className="col">
                            <div>Designer</div>
                            <div>Product name</div>
                            <div>Condtion</div>
                            <div className="fw-bold">$S 3,500</div>
                        </div>
                        <div className="col-12">
                            <FontAwesomeIcon icon={faTrashAlt} className="trash-icon"/>
                        </div>
                        <hr className="white-hr"></hr>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}