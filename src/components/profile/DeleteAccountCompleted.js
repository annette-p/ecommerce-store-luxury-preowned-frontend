import React from 'react'  

export default function DeleteAccountCompleted(){

    return (
        <React.Fragment>

            <div className="row mt-4 mb-4">
                <h5 className="mt-2">Your profile has been deleted</h5>
                <div className="mt-3 card light-grey-bg edit-profile light-grey-hover delete-done-div" >
                    <div className="card-body delete-complete-msg">
                        <div className="mt-3">
                            While we are sad that you decided to delete an account with us, on behalf of Luxury Pre-owned team, we would like to thank you and hornored to once be able to serve you. 
                        </div>
                        <div className="mt-4">
                            You can continue to browse through our products and stye tune for new up-coming collections. Please feel free to sign up for a new account with us anytime you wish. 
                        </div>
                        <div className="mt-4 mb-2">
                            We would love to have you back again! 
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}