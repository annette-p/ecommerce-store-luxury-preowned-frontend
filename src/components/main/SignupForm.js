import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// --->> later  to think how to share the authenticated user across the state, either to create user contex**

export default function SignupForm(){

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [accountCreationFailed, setAccountCreationFailed] = useState(false);
    const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);
    

    // --->>> to perform validation function here -- refer to project 2


    function createUserAccount() {
        let userAccount = {
            userName: userName,
            password: password,
            confirmPassword: confirmPassword,
            email: email
        }
        setAccountCreationFailed(false)
        setAccountCreationSuccess(true)
        console.log(userAccount)
    }

    function renderLoginFailMessage() {
        if (accountCreationFailed) {
            return (
                <div className="row mt-4 login-fail">
                    <p>Create Account Unsuccessful</p>
                </div>
            )
        }
    }

    function renderSignupForm() {
        if (!accountCreationSuccess) {
            return (
                <div class="card-body">
                    <h5 class="card-title text-center">Create Account</h5>
                    {/* display login error */}
                    {renderLoginFailMessage()}
                    {/* username */}
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Username" name="userName" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                    </div>
                    {/* password */}
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    {/* confirm password */} 
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                    </div>
                    {/* email address */} 
                    <div class="mt-4">
                        <input class="form-control" type="text" placeholder="Email Address" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    {/* sign up button */}
                    <div class="mt-4">
                        <div class="d-grid gap-2">
                            <button class="btn btn-secondary" type="submit" onClick={()=>{createUserAccount()}}>
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function renderSuccessAccountCreation() {
        if (accountCreationSuccess) {
            return (
                <div class="card-body">
                    <div className="row mt-4">
                        <h5 className="text-center top-margin-div">Your Account has been created</h5>
                        <p className="text-center mt-4 fw-bold">
                            <Link to="/login">Login here</Link> 
                        </p>
                    </div>
                </div>
            )
        }
    }


    return (
        <React.Fragment>

            <div class="col-md-6">                      
                {renderSignupForm()}
                {renderSuccessAccountCreation()}
            </div>

        </React.Fragment>
    )
}