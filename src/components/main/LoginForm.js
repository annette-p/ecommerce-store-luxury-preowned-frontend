import React, {useContext, useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserProfileContext from '../../contexts/profile/UserProfileContext';

export default function LoginForm(){

    const history = useHistory();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({})
    const [loginFailed, setLoginFailed] = useState(false);

    const userContext = useContext(UserProfileContext);

    useEffect( () => {}, [userContext])

    // Perform validation of form inputs
    function validateForm() {
        let errors = {}
        let formIsValid = true

        if (!username) {
            formIsValid = false
            errors["username"] = "Please enter your username"
        }

        if (!password) {
            formIsValid = false
            errors["password"] = "Please enter your password"
        }

        setErrors(errors);

        return formIsValid
    }

    // Perform user authentication based on username/password
    async function authenticateUser() {
        if (validateForm()) {
            try {
                await userContext.loginUser(username, password)
                .then( authSuccess => {
                    if (authSuccess) {
                        // history.push("/");
                        history.goBack();
                    } else {
                        setLoginFailed(true)
                    }
                })
                
            } catch(err) {
                setLoginFailed(true)
            }
        }
    }

    // Render login failure message
    function renderLoginFailMessage() {
        if (loginFailed) {
            return (
                <div className="row mt-4 login-fail">
                    <p>Login Failed</p>
                </div>
            )
        }
    }

    return (
        <React.Fragment>

            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <div className="mt-4">
                    </div>
                    {/* display login error */}
                    {renderLoginFailMessage()}
                    <div className="mt-4">
                        <input className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <div className="error-msg">{errors.username}</div>
                    </div>
                    <div className="mt-4">
                        <input className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <div className="error-msg">{errors.password}</div>
                    </div>
                    <div className="mt-4">
                        <div className="d-grid gap-2">
                            <button className="btn btn-secondary" type="submit" 
                            onClick={()=>{authenticateUser()}}>
                                LOGIN
                            </button>
                        </div>
                    </div>
                    <p className="text-center mt-4">
                        Forgot password?
                    </p>
                    <p className="text-center">
                        Not yet a member? <span className="fw-bold ms-2"><Link to="/signup">Sign up here</Link> </span>
                    </p>
                </div>
            </div>

        </React.Fragment>
    )
}