import React from 'react'

export default function DeleteAccountForm(){
    return (
        <React.Fragment>

            <div className="row ms-4 mt-4 mb-4">
                <div className="card v-light-grey-bg ms-4" style={{width: "60rem"}}>
                    <div class="card-body">
                        <p className="mt-3">Dear <span className="fw-bold">name</span></p>
                        <p>We are sorry to hear that you would like to delete your account.</p>
                        <p className="fw-bold mt-3">Are you sure you want to proceed?</p>
                        <p>
                            This mean you are deleting your profile and account permanently. You won't be able to retrieve the information or past orders in Luxury Pre-owned platform.  
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
                                    <select className="" name="reasonToDelete" value="reasonToDelete">
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
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-2">
                                <p className="fw-bold mt-3 mt-md-0">Please specify: </p>
                            </div>
                            <div className="col-sm-12 col-md-10">
                                <input type="text" name="specifyDeleteReason" className="form-control"/>
                                <div className="error-msg"></div>
                            </div>
                        </div>
                        {/* Enter password */}
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-5">
                                <p className="mt-3 fw-bold">To continue, please re-enter your password</p>
                            </div>
                            <div className="col-sm-12 col-md-7 mt-0 mt-md-2">
                                <input type="password" name="currentPassword" className="form-control"/>
                                <div className="error-msg"></div>
                            </div>
                        </div>
                        {/* buttons */}
                        <div class="mt-4">
                            <div class="d-grid gap-2">
                                <button class="btn btn-secondary gold-hover" type="button">CANCEL</button>
                                <button class="btn btn-secondary red-hover" type="button">DELETE ACCOUNT</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}