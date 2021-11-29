import React from 'react'

export default function ChangePasswordForm(){
    return (
        <React.Fragment>

            <div className="row mt-4 mb-4">
                <div className="card light-grey-bg edit-profile" style={{width: "30rem"}}>
                    <div class="card-body">
                        {/* password */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Current Password" aria-label="default input example"/>
                        </div>
                        {/* new password */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="New Password" aria-label="default input example"/>
                        </div>
                        {/* new password */}
                        <div class="mt-4">
                            <input class="form-control" type="text" placeholder="Confirm New Password" aria-label="default input example"/>
                        </div>
                        {/* sign up button */}
                        <div class="mt-4">
                            <div class="d-grid gap-2">
                                <button class="btn btn-secondary gold-hover" type="button">UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </React.Fragment>
    )
}