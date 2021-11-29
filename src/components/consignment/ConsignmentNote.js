import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

export default function ConsignmentNote(){

    const [openNote, setOpenNote ] = useState(false);

    return (
        <React.Fragment>
            <div className="fw-bold mt-4">
                Please note: 
                <span onClick={() => setOpenNote(!openNote)} className="ms-4 arrow-down-icon fst-italic"> click me <FontAwesomeIcon icon={faAngleDoubleDown} className="ms-1 arrow-down-icon"/></span>
            </div>
            <div style={{display: openNote === true ? "block" : "none"}} className="light-grey-hover">
                <div className="mt-2 pt-2 ps-2 pe-2">
                    Our experts inspect and authenticate every item offered for sale or swap via Luxury Pre-owned. If an item does not pass our quality control or is found to be inauthentic, it is the owner's responsibility to arrange for it to be collected.
                </div>
                <div className="mt-3 ps-2 pe-2">
                    We will get back to you within 48 hours with an initial quotation. If you're happy with the quotation, once we receive your item it  will take 7-10 working days to book in, authenticate, and make listing on our platform.  
                </div> 
                <hr></hr>
            </div>
        </React.Fragment>
    )
}