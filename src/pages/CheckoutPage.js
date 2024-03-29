import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Processing from '../components/checkout/Processing';
import CheckoutSuccess from '../components/checkout/CheckoutSuccess';
import CheckoutFail from '../components/checkout/CheckoutFail';

import UserProfileContext from '../contexts/profile/UserProfileContext';


export default function CheckoutPage({ ...props }){

    let { url } = useRouteMatch();
    const history = useHistory();

    const [loaded, setLoaded] = useState(false);

    const userContext = useContext(UserProfileContext);

    useEffect(() => {
        const performCheckout = async() => {
            if (!userContext.isAuthenticated()) {
                history.push("/login");
            }
            setLoaded(true);
        }
        performCheckout()
    }, [loaded, history, userContext])
    
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
                    <Router>
                        <Switch> 
                            <Route exact path={`${url}`}>
                                <Processing />
                            </Route>
                            <Route exact path={`${url}/success`}>
                                <CheckoutSuccess />  
                            </Route> 
                            <Route exact path={`${url}/error`}>
                                <CheckoutFail />
                            </Route>
                        </Switch>
                    </Router>
                     
                </Offcanvas.Body>
            </Offcanvas>


        </React.Fragment>
    )
}