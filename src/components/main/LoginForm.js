import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

// --->> later  to think how to share the authenticated user across the state, either to create user contex**

export default function LoginForm(){

    const history = useHistory();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({})
    const [loginFailed, setLoginFailed] = useState(false);

    // --->>> to perform validation function here -- refer to project 2

    useEffect( () => {}, [errors])

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

    async function authenticateUser() {
        if (validateForm()) {
            let userLogin = {
                username: username,
                password: password
            }

            await axios.post(`${global.apiUrl}/users/authenticate`, userLogin)
            .then( async (authResult) => {
                // login success
                /*
                    A success login response data from backend API will be:
                    {
                        "accessToken": "eyJhbGc...",
                        "refreshToken": "eyJhbGc...",
                        "lastLogin": "2021-12-05T05:02:07.000Z"
                    }
                */

                const tokens = authResult.data;

                const authHeaders = {
                    "Authorization": `Bearer ${tokens.accessToken}`
                };

                // now use the access token to retrieve the user's info
                await axios.get(`${global.apiUrl}/users/info`, { headers: authHeaders})
                .then( (userInfoResult) => {

                    const userInfo = userInfoResult.data.data

                    if (userInfo.type === "Customer") {
                        const authenticatedUserInfo = {   
                            "info": userInfo,
                            "token": tokens.refreshToken
                        }

                        // update session storage with details of logged-in freelancer
                        // ref: https://typeofnan.dev/using-session-storage-in-react-with-hooks/

                        // The JSON.stringify() method converts a JavaScript object to a JSON string,
                        sessionStorage.setItem("authenticatedUser", JSON.stringify(authenticatedUserInfo))

                        history.push("/");
                        
                    } else {
                        // Admins are not permitted to login here
                        setLoginFailed(true)
                    }
                    
                })
    
            })
            .catch( (error) => {
    
                setLoginFailed(true)
    
                // to improve error handling
                if (error.response){
    
                    //do something
                    console.error('error.response: ', error.response)
                
                } else if (error.request){
                
                    //do something else
                    console.error('error.request: ', error.request)
                
                } else if (error.message){
                
                    //do something other than the other two
                    console.error('error.message: ', error.message)
                
                }
            })

        }
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
                        <input className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <div className="error-msg">{errors.username}</div>
                    </div>
                    <div className="mt-4">
                        <input className="form-control" type="text" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
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