import React from 'react' 
// to access the information that was sent over in the SubmittedForm component 
import { useLocation } from 'react-router-dom';  

export default function SubmittedProfileUpdateForm(){

    const location = useLocation();

    const name = location.state.name;
    const lastName = location.state.lastName;
    const email = location.state.email;
    const address = location.state.address;
    const shippingAddress = location.state.shippingAddress;

    return (
        <React.Fragment>

            <div className="row mt-4 mb-4">
                <h5 className="mt-2">Your profile has been updated</h5>
                <div className="mt-3 card light-grey-bg edit-profile" style={{width: "30rem"}}>
                    <div className="card-body">
                        {/* username */}
                        <div className="row">
                            <div className="col-3 fw-bold">Name: </div>
                            <div className="col-9">{name}</div>
                        </div>
                        {/* Last name */}
                        <div className="row mt-2">
                            <div className="col-3 fw-bold">Last Name: </div>
                            <div className="col-9">{lastName}</div>
                        </div>
                        {/* email address */}
                        <div className="row mt-2">
                            <div className="col-3 fw-bold">Email: </div>
                            <div className="col-9">{email}</div>
                        </div>
                        {/* billing address */}
                        <div className="row mt-2">
                            <div className="col-3 fw-bold">Address: </div>
                            <div className="col-9">{address}</div>
                        </div>
                        {/* shipping address */}
                        <div className="row mt-2">
                            <div className="col-3 fw-bold">Shipping Address: </div>
                            <div className="col-9 mt-2">{shippingAddress}</div>
                        </div>
                    </div>
                </div>
                
            </div>

        </React.Fragment>
    )
}