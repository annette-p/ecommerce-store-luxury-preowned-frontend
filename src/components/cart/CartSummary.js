import React from 'react'

export default function CartSummary(){
    return (
        <React.Fragment>

            <div className="row summary-section">
                <hr className="dark-grey"></hr>
                <div className="col">
                    <div>Total <span>(1 item)</span></div>
                    <div className="mt-1">Shipping</div>
                    <div className="mt-1">Total Order</div>
                </div>
                <div className="col total-number">
                    <div><span className="me-2">S$</span>3,500</div>
                    <div className="mt-1"><span className="free"></span>Free</div>
                    <div className="mt-1"><span className="me-2">S$</span>3,500</div>
                </div>
                {/* button */}
                <form className="d-flex mt-4">
                    <input className="form-control me-1" type="" placeholder="Add voucher code" aria-label=""/>
                    <button className="btn btn-secondary gold-hover" type="submit">APPLY</button>
                </form>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-secondary gold-hover" type="button">CHECK OUT</button>
                </div>
            </div>

        </React.Fragment>
    )
}