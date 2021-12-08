import React from 'react'
import { useHistory } from 'react-router'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function LoginModal({action}){
    const history = useHistory();

    function renderLogoAndMotto() {
        return (
            <div>

                <img src={require('../../images/logo/curve-lp-logo.jpg').default} className="img-fluid round-logo" alt="logo"/>
                <div className="mt-4 motto-text fw-bold">
                    Sustainable Luxury  
                </div>
                <div className="mt-1 motto-text">
                    Give your wardrobe a second life 
                </div>

            </div>

        )
    }

    return (
        <React.Fragment>
            <div
                className="modal show fade" tabIndex="-1"
                style={{display: "block", backgroundColor: "rgba(0.5, 0.5, 0.5, 0.5)"
                }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content login-card">
                        {/* header */}
                        <div className="modal-header">
                            <h4 className="d-none d-md-block modal-title ms-4">Welcome to Luxury Pre-owned</h4>
                            <h5 className="d-block d-md-none modal-title text-center">Welcome to Luxury Pre-owned</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {history.goBack()}}></button>
                        </div>
                        <div className="modal-body login-card">
                            <div className="container-fluid"> 
                                <div className="row">
                                    {/* logo and motto column */}
                                    <div className="d-none d-md-block col-md-6 vertical-line center-div">
                                        {renderLogoAndMotto()}
                                    </div>
                                    {/* logo and motto column -- for mobile */}
                                    <div className="d-block d-md-none col-md-6 center-div">
                                        {renderLogoAndMotto()}
                                    </div>
                                    {action === "login" ? <LoginForm/> : null}
                                    {/* login column */}
                                    {/* <LoginForm/> */}

                                    {/* Signup column */}
                                    {action === "signup" ? <SignupForm /> : null}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}