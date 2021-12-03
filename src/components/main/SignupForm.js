import React from 'react'

export default function SignupForm(){
    return (
        <React.Fragment>

            <div class="col-md-6">                      
                <div class="card-body">
                    <h5 class="card-title text-center">Create Account</h5>
                    {/* username */}
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Username" aria-label="default input example"/>
                    </div>
                    {/* password */}
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Password" aria-label="default input example"/>
                    </div>
                    {/* confirm password */}
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Confirm Password" aria-label="default input example"/>
                    </div>
                    {/* email address */}
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Email Address" aria-label="default input example"/>
                    </div>
                    {/* sign up button */}
                    <div class="mt-4">
                        <div class="d-grid gap-2">
                            <button class="btn btn-secondary" type="button">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}