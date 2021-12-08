import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import UserProfileContext from '../../contexts/profile/UserProfileContext';

export default function SignupForm(){

    const [firstname, setFirstname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [errors, setErrors] = useState({})
    const [accountCreationFailed, setAccountCreationFailed] = useState(false);
    const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);

    const userContext = useContext(UserProfileContext);
    
    // Perform validation of form inputs
    function validateForm() {
        let errors = {}
        let formIsValid = true

        if (!firstname) {
            formIsValid = false
            errors["firstname"] = "Please enter your first name"
        }

        if (!username) {
            formIsValid = false
            errors["username"] = "Please enter your username"
        }

        if (!password) {
            formIsValid = false
            errors["password"] = "Please enter your preferred password"
        }

        if (!confirmPassword) {
            formIsValid = false
            errors["confirmPassword"] = "Please re-enter your preferred password"
        }

        if (password && confirmPassword && password !== confirmPassword) {
            formIsValid = false
            errors["confirmPassword"] = "Password does not match the above"
        }

        if (!email) {
            formIsValid = false
            errors["email"] = "Please enter your email address"
        }

        setErrors(errors);

        return formIsValid
    }

    // Perform signup of new user account
    async function createUserAccount() {
        if (validateForm()) {
            try {
                await userContext.createUserProfile(firstname, username, password, email)
                .then( signupSuccess => {
                    if (signupSuccess) {
                        setAccountCreationSuccess(true);
                    } else {
                        setAccountCreationFailed(true);
                    }
                })
            } catch(err) {
                setAccountCreationFailed(true)
            }
        }
    }

    // Render account signup failure message
    function renderFailAccountCreation() {
        if (accountCreationFailed) {
            return (
                <div className="row mt-4 login-fail">
                    <p>Create Account Unsuccessful</p>
                </div>
            )
        }
    }

    // Render account signup form
    function renderSignupForm() {
        if (!accountCreationSuccess) {
            return (
                <div className="card-body">
                    <h5 className="card-title text-center">Create Account</h5>
                    {/* display account creation failure error */}
                    {renderFailAccountCreation()}
                    {/* first name */}
                    <div className="mt-4">
                        <input className="form-control" type="text" placeholder="First name" name="firstname" value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
                        <div className="error-msg">{errors.firstname}</div>
                    </div>
                    {/* username */}
                    <div className="mt-4">
                        <input className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <div className="error-msg">{errors.username}</div>
                    </div>
                    {/* password */}
                    <div className="mt-4">
                        <input className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <div className="error-msg">{errors.password}</div>
                    </div>
                    {/* confirm password */} 
                    <div className="mt-4">
                        <input className="form-control" type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                        <div className="error-msg">{errors.confirmPassword}</div>
                    </div>
                    {/* email address */} 
                    <div className="mt-4">
                        <input className="form-control" type="text" placeholder="Email Address" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <div className="error-msg">{errors.email}</div>
                    </div>
                    {/* sign up button */}
                    <div className="mt-4">
                        <div className="d-grid gap-2">
                            <button className="btn btn-secondary" type="submit" onClick={()=>{createUserAccount()}}>
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    // Render account signup success message
    function renderSuccessAccountCreation() {
        if (accountCreationSuccess) {
            return (
                <div className="card-body">
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

            <div className="col-md-6">                      
                {renderSignupForm()}
                {renderSuccessAccountCreation()}
            </div>

        </React.Fragment>
    )
}