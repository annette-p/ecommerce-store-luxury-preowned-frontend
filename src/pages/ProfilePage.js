import React from 'react'
import MyPurchaseOrders from '../components/profile/MyPurchaseOrders'

export default function ProfilePage(){
    return (
        <React.Fragment>
            <div className="container">
                <div class="row">
                    {/* sidebar medu */}
                    <div class="col-2">
                        <div class="ps-1 col-bg">
                            <div class="mt-3 col-hover">
                                <div class="btn white-font mt-2">Dashboard</div>
                            </div>
                            <div class="mt-3 col-hover">
                                <div class="btn white-font">My Purchases</div>
                            </div>
                            <div class="mt-3 col-hover">
                                <div class="btn white-font">My Selling</div>
                            </div>
                            <div class="mt-3 col-hover">
                                <div class="btn white-font">Order History</div>
                            </div>
                            <div class="mt-3 col-hover">
                                <div class="btn white-font">Account Settings</div>
                            </div>
                            <div class="mt-3 col-hover">
                                <div class="btn white-font mb-3">Logout</div>  
                            </div>
                        </div>
                    </div>

                    {/* Each profile content */}
                    <div class="col-10">
                        <MyPurchaseOrders/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}