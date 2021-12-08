import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import EditProfileForm from './EditProfileForm'
import ChangePasswordForm from './ChangePasswordForm'
import DeleteAccountForm from './DeleteAccountForm'
import SubmittedProfileUpdateForm from './SubmittedProfileUpdateForm'
import DeleteAccountCompleted from './DeleteAccountCompleted'

export default function EditProfile(){
    
    const [activePage, setActivePage] = useState("EditProfile")
    let { url } = useRouteMatch();

    return (
        <React.Fragment>

            {/* nested routes: https://v5.reactrouter.com/web/example/nesting */}

            <Router>

                <div className="row mt-4">
                    {/* Nav list */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item underline-remove" role="presentation" onClick={() => {setActivePage("EditProfile")}}>
                            <Link to={`${url}/edit-profile`} type="button" className={activePage === "EditProfile" ? "nav-link active" : "nav-link"}>Edit My Profile</Link> 
                        </li>
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("ChangePassword")}}>
                            <Link to={`${url}/change-password`} type="button" className={activePage === "ChangePassword" ? "nav-link active" : "nav-link"}>Change Password</Link>
                        </li>
                        <li className="nav-item" role="presentation"  onClick={() => {setActivePage("DeleteAccount")}}>
                            <Link to={`${url}/delete-account`} type="button" className={activePage === "DeleteAccount" ? "nav-link active" : "nav-link"}>Delete Account</Link>
                        </li>
                    </ul>

                    {/* content container */}
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <Switch>
                                <Route path={`${url}/edit-profile/completed`}>
                                    <SubmittedProfileUpdateForm/>
                                </Route>
                                <Route path={`${url}/edit-profile`}>
                                    <EditProfileForm/>
                                </Route>
                                <Route path={`${url}/change-password`}>
                                    <ChangePasswordForm/>
                                </Route>
                                <Route exact path={`${url}/delete-account`}>
                                    <DeleteAccountForm/>
                                </Route>
                                <Route exact path={`${url}/delete-account/completed`}>
                                    <DeleteAccountCompleted/>
                                </Route>
                            </Switch> 

                        </div>
                    </div>
                </div>

            </Router>

        </React.Fragment>
    )
}