import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// --->> later  to think how to share the authenticated user across the state, either to create user contex**

export default function LoginForm(){

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loginFailed, setLoginFailed] = useState(false);


    // --->>> to perform validation function here -- refer to project 2

    function authenticateUser() {
        let userLogin = {
            userName: userName,
            password: password
        }
        setLoginFailed(true)
        console.log(userLogin)
    }

    function renderLoginFailMessage() {
        if (loginFailed) {
            return (
                <div className="row mt-4 login-fail">
                    <p>Login Failed</p>
                </div>
            )
        }
    }


    // --- >>> login success > route to main page (listing page) + display NAME on the nave bar 


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
                        <input className="form-control" type="text" placeholder="Username" name="userName" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                    </div>
                    <div className="mt-4">
                        <input className="form-control" type="text" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
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