import React, { useState } from 'react'

export default function ChangePasswordForm(){

    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);
    const [changePasswordFailed, setChangePasswordFailed] = useState(false);
    

    function changePassword() {
        // assume success
        console.log("currentPassword: ", currentPassword)
        console.log("newPassword: ", newPassword)
        setChangePasswordSuccess(true)
        setChangePasswordFailed(false)
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
    }

    function renderChangePasswordForm() {
        if (!changePasswordSuccess && !changePasswordFailed) {
            return (
                <div className="card light-grey-bg no-order-div">
                    <div className="card-body">
                        {/* password */}
                        <div className="mt-4">
                            <input className="form-control" type="text" placeholder="Current Password" name="currentPassword"  value={currentPassword} 
                            onChange={(e) => {setCurrentPassword(e.target.value)}}/>
                        </div>
                        {/* new password */}
                        <div className="mt-4">
                            <input className="form-control" type="text" placeholder="New Password" name="newPassword"  value={newPassword} 
                            onChange={(e) => {setNewPassword(e.target.value)}}/>
                        </div>
                        {/* confirm new password */}
                        <div className="mt-4">
                            <input className="form-control" type="text" placeholder="Confirm New Password" name="confirmPassword"  value={confirmPassword} 
                            onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                        </div>
                        {/* button */}
                        <div className="mt-4">
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary gold-hover" type="button" onClick={()=>{changePassword()}}>
                                    UPDATE
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function renderChangePasswordFailMessage() {
        if (changePasswordFailed) {
            return (
                <div className="card change-fail edit-profile top-margin" style={{width: "30rem"}}>
                    <div className="card-body">
                        <div className="row mt-4 text-center fw-bold">
                            <p>Change Password Failed</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function renderChangePasswordSuccessMessage() {
        if (changePasswordSuccess) {
            return (
                <div className="card change-success top-margin no-order-div">
                    <div className="card-body">
                        <div className="row mt-4 text-center fw-bold">
                            <p>Completed. Password has been changed</p>
                        </div>
                    </div>
                </div>
            )
        }
    }


    // ** -- Validation of password change -- **
    // validateChangePasswordForm = () => {
    //     let errors = {}
    //     let formIsValid = true

    //     if (!this.state.username) {
    //         formIsValid = false
    //         errors["username"] = "Please enter your username"
    //     }

    //     if (!this.state.currentPassword) {
    //         formIsValid = false
    //         errors["currentPassword"] = "Please enter your current password"
    //     }

    //     if (!this.state.newPassword) {
    //         formIsValid = false
    //         errors["newPassword"] = "Please enter your new password"
    //     }

    //     if (this.state.newPassword && this.state.newPassword === this.state.currentPassword) {
    //         formIsValid = false
    //         errors["newPassword"] = "Current password and new password cannot be the same"
    //     }

    //     if (!this.state.confirmNewPassword) {
    //         formIsValid = false
    //         errors["confirmNewPassword"] = "Please re-enter your new password"
    //     }

    //     if (this.state.confirmNewPassword && this.state.newPassword !== this.state.confirmNewPassword) {
    //         formIsValid = false
    //         errors["confirmNewPassword"] = "New password mismatch"
    //     }

    //     this.setState({errors})

    //     return formIsValid
    // }
        


    // changePassword async validation
    <div>
        {/* changePassword = async () => {
        if (this.validateChangePasswordForm()) {
            let newUserPassword = {
                username: this.state.username,
                currentPassword: this.state.currentPassword,
                newPassword: this.state.newPassword
            } 
            let changePasswordFailed = false
            let changePasswordSuccess = false
            await axios.put(`${this.apiUrl}/change-password`, newUserPassword)
            .then( async (result) => {   
                changePasswordSuccess = true
            })
            .catch( (error) => {
    
                changePasswordFailed = true
            })
    
            this.setState({
                changePasswordFailed: changePasswordFailed,
                changePasswordSuccess: changePasswordSuccess, 
                username: "",
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            })
        }
        } */}    
    </div>
    

    return (
        <React.Fragment>

            <div className="row mt-4 mb-4">
                {renderChangePasswordFailMessage()}
                {renderChangePasswordSuccessMessage()}
                {renderChangePasswordForm()}
            </div>

        </React.Fragment>
    )
}