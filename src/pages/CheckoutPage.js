import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
// import Processing from '../components/checkout/Processing'
// import CheckoutSuccess from '../components/checkout/CheckoutSuccess'
import CheckoutFail from '../components/checkout/CheckoutFail'


export default function CheckoutPage({ ...props }){
    return (
        <React.Fragment>
            <Offcanvas show={props.show} onHide={props.handleClose} {...props}>   {/* is a short cut of: <Offcanvas onHide={props.handleClose} show={props.show} placement={props.placement}> 
            note: placement indicate which direction the canvas will show (start, end, top, bottom) */}
                <Offcanvas.Header closeButton className=""> 
                    <Offcanvas.Title>
                        {/* <FontAwesomeIcon icon={faCartArrowDown} className="cart-icon"/> */}
                        <div className="">Checkout Page</div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="fw-bold"> 
                    <hr className="dark-grey cart-hr"></hr>
                    
                    {/* <Processing /> */}
                    {/* <CheckoutSuccess /> */}
                    <CheckoutFail />
                     
                </Offcanvas.Body>
            </Offcanvas>


        </React.Fragment>
    )
}