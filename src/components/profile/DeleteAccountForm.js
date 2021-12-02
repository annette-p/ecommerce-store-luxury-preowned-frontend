import React, { useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function DeleteAccountForm(){

    const history = useHistory();
    let { url } = useRouteMatch();

    const [deleteReason, setDeleteReason] = useState();
    const [specifyDeleteReason, setSpecifyDeleteReason] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const [deleteAccountFailed, setDeleteAccountFailed] = useState(false);
    const [deleteAccountSuccess, setDeleteAccountSuccess] = useState(false);

    function cancelDeletion() {
        history.push("/");
    }
    

    // -- to take customer name from session storage to display on the deletion form message **

    // function to perform form validation (password authentication, reason and specify reason)


    // function to delete account -- to add logic to delete account in db
    function deleteAccount() {
        // assume success
        setDeleteAccountFailed(false)
        setDeleteAccountSuccess(true)

        // --- for reference ----
        // deleteFreelancer = async () => {
        //     if (this.validateDeleteAccountForm()) {
        //         let freelancerToDelete = this.state._id
        //         let deleteAccountFailed = false
        //         let deleteAccountSuccess = false
    
        //         let data = {
        //             "password": this.state.currentPassword,
        //             "reasonToLeave": this.state.reasonToDelete,
        //             "additionalInfo": this.state.specifyDeleteReason
        //         }
    
        //         await axios.delete(`${this.apiUrl}/freelancer/${freelancerToDelete}`, {data: data})
        //         .then( async (result) => {
        //             deleteAccountSuccess = true
        //             sessionStorage.removeItem("authenticatedUser")
        
        //             setTimeout(this.props.afterUpdateFreelancerProfile, 5000);
        //         })
        //         .catch( (e) => {
        //             deleteAccountFailed = true
        //         })
    
        //         this.setState({
        //             deleteAccountFailed: deleteAccountFailed,
        //             deleteAccountSuccess: deleteAccountSuccess, 
        //             currentPassword: "",
        //             reasonToDelete: "",
        //             specifyDeleteReason: ""
        //         })
        //     }
        // }

        history.push(`${url}/completed`);
    }

    function renderDeleteAccountForm() {
        if (!deleteAccountSuccess && !deleteAccountFailed) {
            return (

                <div className="card v-light-grey-bg ms-4" style={{width: "60rem"}}>
                    <div className="card-body">
                        <p className="mt-3">Dear <span className="fw-bold">name</span></p>
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
                                        <option value="second-account">Create second account</option>
                                        <option value="remove-data">Want to remove something</option>
                                        <option value="data-privacy">Concerned about my data</option>
                                        <option value="privacy">Privacy concerns</option>
                                        <option value="navigation">Trouble nagivating platform</option>
                                        <option value="other">Something else</option>
                                    </select>
                                    <div className="error-msg"></div>
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
                                <input className="form-control" type="text" name="currentPassword"  value={currentPassword} 
                                onChange={(e) => {setCurrentPassword(e.target.value)}}/>
                                <div className="error-msg"></div>
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
                        <div className="error-msg"></div>
                    </div>
                </div>

            )
        }
    }


    function renderDeleteAccountFailedMessage() {
        if (deleteAccountFailed) {
            return (
                <div className="card change-fail edit-profile top-margin" style={{width: "30rem"}}>
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