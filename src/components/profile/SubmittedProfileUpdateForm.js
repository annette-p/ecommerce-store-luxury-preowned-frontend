import React from 'react' 
// to access the information that was sent over in the SubmittedForm component 
import { useLocation } from 'react-router-dom';  

export default function SubmittedProfileUpdateForm(){

    const location = useLocation();

    const firstName = location.state.firstName;
    const lastName = location.state.lastName;
    // const email = location.state.email;
    const shippingAddress = location.state.shippingAddress;

    return (
        <React.Fragment>

            <div className="row mt-4 mb-4">
                <h5 className="mt-2">Your profile has been updated</h5>
                <div className="mt-3 card light-grey-bg light-grey-hover no-order-div">
                    <div className="card-body">
                        {/* username */}
                        <div className="row">
                            <div className="col-4 col-md-3 fw-bold">First Name: </div>
                            <div className="col-8 col-md-9">{firstName}</div>
                        </div>
                        {/* Last name */}
                        <div className="row mt-2">
                            <div className="col-4 col-md-3 fw-bold">Last Name: </div>
                            <div className="col-8 col-md-9">{lastName}</div>
                        </div>
                        {/* email address */}
                        {/* <div className="row mt-2">
                            <div className="col-4 col-md-3 fw-bold">Email: </div>
                            <div className="col-8 col-md-9">{email}</div>
                        </div> */}
                        {/* shipping address */}
                        <div className="row mt-2">
                            <div className="col-4 col-md-3 fw-bold">Shipping Address: </div>
                            <div className="col-8 col-md-9 mt-2">{shippingAddress}</div>
                        </div>
                    </div>
                </div>
                
            </div>

        </React.Fragment>
    )
}