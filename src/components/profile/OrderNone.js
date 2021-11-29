import React from 'react'

export default function OrderNone(){
    return (
        <React.Fragment>

            <div className="row mt-4">
                <div className="card light-grey-bg edit-profile" style={{width: "30rem"}}>
                    <div class="card-body">
                        <div className="no-order white-font">No Orders Yet</div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}