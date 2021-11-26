import React from 'react'
// import SignupForm from './SignupForm'

export default function LoginModal(){
    return (
        <React.Fragment>
            <div
                className="modal show fade" tabIndex="-1"
                style={{display: "block", backgroundColor: "rgba(0.5, 0.5, 0.5, 0.5)"
                }}>
                <div class="modal-dialog modal-lg">
                    <div class="modal-content login-card">
                        {/* header */}
                        <div class="modal-header">
                            <h4 class="modal-title">Welcome to Luxury Pre-owned</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body login-card">
                            <div class="container-fluid"> 
                                <div class="row">
                                    {/* logo and motto column */}
                                    <div class="col-md-6 login-logo vertical-line">
                                        <img src={require('../../images/logo/curve-lp-logo.jpg').default} class="img-fluid round-logo" alt="logo"/>
                                        <div className="mt-4 motto-text fw-bold">
                                            Sustainable Luxury  
                                        </div>
                                        <div className="mt-1 motto-text">
                                            Give your wardrobe a second life 
                                        </div>
                                    </div>
                                    {/* login column */}
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">Login</h5>
                                            <div class="mt-4">
                                            </div>
                                            <div class="mt-4">
                                                <input class="form-control" type="text" placeholder="Username" aria-label="default input example"/>
                                            </div>
                                            <div class="mt-4">
                                                <input class="form-control" type="text" placeholder="Password" aria-label="default input example"/>
                                            </div>
                                            <div class="mt-4">
                                                <div class="d-grid gap-2">
                                                    <button class="btn btn-secondary" type="button">LOGIN</button>
                                                </div>
                                            </div>
                                            <p class="text-center mt-4">
                                                Forgot password?
                                            </p>
                                            <p class="text-center">
                                                Not yet a member? <span className="fw-bold ms-2">Sign up here </span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Signup column */}
                                    <div class="col-md-6">
                                        {/* <SignupForm /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}