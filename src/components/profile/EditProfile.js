import React, { useState } from 'react'
// import EditProfileForm from './EditProfileForm'
// import ChangePasswordForm from './ChangePasswordForm'
import DeleteAccountForm from './DeleteAccountForm'

export default function EditProfile(){
    const [activePage, setActivePage] = useState("EditProfile")

    return (
        <React.Fragment>
            <div className="row mt-4">
                {/* Nav list */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation" onClick={() => {setActivePage("EditProfile")}}>
                        <a type="button" href="/edit-profile" className={activePage === "EditProfile" ? "nav-link active" : "nav-link"}>Edit My Profile</a>
                    </li>
                    <li className="nav-item" role="presentation"  onClick={() => {setActivePage("ChangePassword")}}>
                        <a type="button" className={activePage === "ChangePassword" ? "nav-link active" : "nav-link"} href="/change-password">Change Password</a>
                    </li>
                    <li className="nav-item" role="presentation"  onClick={() => {setActivePage("DeleteAccount")}}>
                        <a type="button" className={activePage === "DeleteAccount" ? "nav-link active" : "nav-link"} href="/delete-account">Delete Account</a>
                    </li>
                </ul>
                {/* content container */}
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {/* <EditProfileForm/> */}
                        {/* <ChangePasswordForm/> */}
                        <DeleteAccountForm/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}