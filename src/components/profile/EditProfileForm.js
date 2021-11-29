import React from 'react'

export default function EditProfileForm(){
    return (
        <React.Fragment>

            <div className="row mt-4 mb-4">
                <div className="card light-grey-bg edit-profile" style={{width: "30rem"}}>
                    <div class="card-body">
                        {/* username */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Name" aria-label="default input example"/>
                        </div>
                        {/* password */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Last Name" aria-label="default input example"/>
                        </div>
                        {/* email address */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Email Address" aria-label="default input example"/>
                        </div>
                        {/* billing address */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Address" aria-label="default input example"/>
                        </div>
                        {/* shipping address */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Shipping Address" aria-label="default input example"/>
                        </div>
                        {/* sign up button */}
                        <div class="mt-4">
                            <div class="d-grid gap-2">
                                <button class="btn btn-secondary gold-hover" type="button">UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </React.Fragment>
    )
}