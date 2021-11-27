import React, { useState } from 'react'
// import ConsignmentOrderSummary from './ConsignmentOrderSummary'
// import ConsignmentOrderDetails from './ConsignmentOrderDetails'
import ConsignmentOrderNone from './ConsignmentOrderNone'

export default function MySellingOrders(){
    const [activePage, setActivePage] = useState("Progress")

    return (
        <React.Fragment>
            <div className="row mt-4">
                {/* Nav list */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {/* In progress: oder with status - 1st evaluation, arrange carrier pickup, official evaluation, accepted */}
                    <li className="nav-item" role="presentation" onClick={() => {setActivePage("Progress")}}>
                        <a type="button" href="/progress" className={activePage === "Progress" ? "nav-link active" : "nav-link"}>In Progress</a>
                    </li>
                    {/* the items that are currently listed - link to product listing/product page */}
                    <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Listing")}}>
                        <a type="button" className={activePage === "Listing" ? "nav-link active" : "nav-link"} href="/listing">Listing</a>
                    </li>
                    {/* Item that status is sold */}
                    <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Completed")}}>
                        <a type="button" className={activePage === "Completed" ? "nav-link active" : "nav-link"} href="/completed">Completed</a>
                    </li>
                    {/* it's either rejected by the store or customer change mind not selling anymore */}
                    <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Cancelled")}}>
                        <a type="button" className={activePage === "Receive" ? "nav-link active" : "nav-link"} href="/cancelled">Cancelled</a>
                    </li>
                    <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Refund")}}>
                        <a type="button" className={activePage === "Receive" ? "nav-link active" : "nav-link"} href="/refund">Return Refund</a>
                    </li>
                </ul>
                {/* content container */}
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {/* <ConsignmentOrderSummary/> */}
                        {/* <ConsignmentOrderDetails/> */}
                        <ConsignmentOrderNone/>  
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}