import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import emailjs from 'emailjs-com';  // initialize EmailJS

import UserProfileContext from '../../contexts/profile/UserProfileContext';


export default function DeleteAccountForm(){

    // EmailJS config
    const emailUserId = process.env.REACT_APP_EMAILJS_USER_ID
    const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    emailjs.init(emailUserId);

    const history = useHistory();
    let { url } = useRouteMatch();

    const [firstName, setFirstName] = useState();
    const [deleteReason, setDeleteReason] = useState();
    const [specifyDeleteReason, setSpecifyDeleteReason] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const [errors, setErrors] = useState({});
    const [loaded, setLoaded] = useState(false)
    const [deleteAccountFailed, setDeleteAccountFailed] = useState(false);
    const [deleteAccountSuccess, setDeleteAccountSuccess] = useState(false);

    const userContext = useContext(UserProfileContext);

    // to display the form with existing infomation frm the shared state in contex
    useEffect(() => {

        const fetchUserProfile = async () => {
            if (!loaded) {
                let retrievedUserProfile = await userContext.getUserProfile();
                setFirstName(retrievedUserProfile.firstname);
                setLoaded(true);
            }
        }
        fetchUserProfile();

    }, [loaded, deleteAccountFailed, userContext]) 

    function cancelDeletion() {
        history.push("/");
    }

    // function to perform form validation (password authentication, reason and specify reason)
    function validateForm() {
        let errors = {}
        let formIsValid = true

        if (!deleteReason) {
            formIsValid = false
            errors["deleteReason"] = "Please specify why you want to delete this account"
        }

        if (deleteReason === "other" && !specifyDeleteReason) {
            formIsValid = false
            errors["specifyDeleteReason"] = "Please specify why you want to delete this account"
        }

        if (!currentPassword) {
            formIsValid = false
            errors["currentPassword"] = "Please enter your password"
        }

        setErrors(errors);

        return formIsValid
    }


    // function to delete account -- to add logic to delete account in db
    async function deleteAccount() {
        if (validateForm()) {
            try {
                const accountDeleteStatus = await userContext.deleteUserAccount(currentPassword);
                if (accountDeleteStatus) {

                    // send feedback via EmailJS
                    let emailContent = {
                        subject: "Account Deletion Feedback",
                        body: "Customer decided to delete the account due to: ",
                        content: deleteReason === "other" ? `Others: ${specifyDeleteReason}` : deleteReason
                    }
                    await emailjs.send(emailServiceId, emailTemplateId, emailContent, emailUserId);

                    setDeleteAccountSuccess(true);
                    history.push(`${url}/completed`);
                    
                } else {
                    setDeleteAccountFailed(true); 
                }
            } catch(_err) {
                setDeleteAccountFailed(true); 
            }
        }
        
    }

    function renderDeleteAccountForm() {
        if (!deleteAccountSuccess && !deleteAccountFailed) {
            return (

                <div className="card v-light-grey-bg ms-4 delete-acct-div">
                    <div className="card-body">
                        <p className="mt-3">Dear <span className="fw-bold">{firstName}</span></p>
                        <p>We are sorry to hear that you would like to delete your account.</p>
                        <p className="fw-bold mt-3">Are you sure you want to proceed?</p>
                        <p>
                            This mean you are deleting your profile and account permanently. You won't be able to retrieve the information or your past orders in Luxury Pre-owned platform.  
                        </p>
                        <hr className="mt-1"></hr>
                        {/* reason to delete */}
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <p className="fw-bold mt-4">Why do you want to delete this account ?</p>
                            </div>
                            {/* Drop down list */}
                            <div className="col-sm-12 col-md-7">
                                <div className="mt-0 mt-md-4">
                                    <select className="form-select" name="deleteReason" value={deleteReason} onChange={(e) => {setDeleteReason(e.target.value)}} >
                                        <option value=""> ----- Select One ----- </option>
                                        <option value="Create second account">Create second account</option>
                                        <option value="Want to remove something">Want to remove something</option>
                                        <option value="Concerned about my data">Concerned about my data</option>
                                        <option value="Privacy concerns">Privacy concerns</option>
                                        <option value="Trouble nagivating platform">Trouble nagivating platform</option>
                                        <option value="other">Something else</option>
                                    </select>
                                    <div className="error-msg">{errors.deleteReason}</div>
                                </div>
                            </div>
                        </div>
                        {/* Specify Reason */}
                        {renderDeleteAccountSpecifyReasonTextbox()}
                        {/* Enter password */}
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-5">
                                <p className="mt-3 fw-bold">To continue, please re-enter your password</p>
                            </div>
                            <div className="col-sm-12 col-md-7 mt-0 mt-md-2">
                                <input className="form-control" type="password" name="currentPassword"  value={currentPassword} 
                                onChange={(e) => {setCurrentPassword(e.target.value)}}/>
                                <div className="error-msg">{errors.currentPassword}</div>
                            </div>
                        </div>
                        {/* buttons */}
                        <div className="mt-4">
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary gold-hover" type="button" onClick={()=>{cancelDeletion()}}>
                                    CANCEL  
                                </button>
                                <button className="btn btn-secondary red-hover" type="button" 
                                onClick={()=>{deleteAccount()}}>
                                    DELETE ACCOUNT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else {
            return null
        }
    }

    function renderDeleteAccountSpecifyReasonTextbox() {
        // display the input textbox for specify reason for delete account
        if (deleteReason === "other") {
            return (

                <div className="row mt-3">
                    <div className="col-sm-12 col-md-2">
                        <p className="fw-bold mt-3 mt-md-0">Please specify: </p>
                    </div>
                    <div className="col-sm-12 col-md-10">
                        <input type="text" className="form-control" name="specifyDeleteReason" 
                        value={specifyDeleteReason} 
                        onChange={(e) => {setSpecifyDeleteReason(e.target.value)}}
                        />
                        <div className="error-msg">{errors.specifyDeleteReason}</div>
                    </div>
                </div>

            )
        }
    }


    function renderDeleteAccountFailedMessage() {
        if (deleteAccountFailed) {
            return (
                <div className="card change-fail top-margin no-order-div">
                    <div className="card-body">
                        <div className="row mt-4 text-center fw-bold">
                            <h5>Request Fail</h5>
                            <p>Unable to delete account at this moment</p>
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <React.Fragment>

            <div className="row ms-4 mt-4 mb-4">
                {renderDeleteAccountForm()}
                {renderDeleteAccountFailedMessage()}
            </div>

        </React.Fragment>
    )
}