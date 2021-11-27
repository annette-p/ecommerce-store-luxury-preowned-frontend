import React, { useState } from 'react'
// import OrderSummary from './OrderSummary'
import OrderDetails from './OrderDetails'

export default function MyPurchaseOrders(){
    const [activePage, setActivePage] = useState("Deliver")

    return (
        <React.Fragment>
            <div className="row mt-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation" onClick={() => {setActivePage("Deliver")}}>
                    <a type="button" href="/deliver" className={activePage === "Deliver" ? "nav-link active" : "nav-link"}>To Deliver</a>
                </li>
                <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Receive")}}>
                    <a type="button" className={activePage === "Receive" ? "nav-link active" : "nav-link"} href="/receive">To Receive</a>
                </li>
                <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Completed")}}>
                    <a type="button" className={activePage === "Completed" ? "nav-link active" : "nav-link"} href="/completed">Completed</a>
                </li>
                <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Cancelled")}}>
                    <a type="button" className={activePage === "Receive" ? "nav-link active" : "nav-link"} href="/cancelled">Cancelled</a>
                </li>
                <li className="nav-item" role="presentation"  onClick={() => {setActivePage("Refund")}}>
                    <a type="button" className={activePage === "Receive" ? "nav-link active" : "nav-link"} href="/refund">Return Refund</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {/* <OrderSummary/> */}
                    <OrderDetails/>
                </div>
            </div>


            </div>
        </React.Fragment>
    )
}