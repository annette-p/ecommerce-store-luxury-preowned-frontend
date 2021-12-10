import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import ConsignmentNote from './ConsignmentNote'
import ProductConsignmentForm from './ProductConsignmentForm'
import VirtualAppointmentForm from './VirtualAppointmentForm'

export default function SellingMethod(){

    const [open1, setOpen1 ] = useState(false);
    const [open2, setOpen2 ] = useState(false);

    return (
        <React.Fragment>

            <div className="row mt-4">
                {/* button */}
                <div className="col-12 col-md-6 mb-2 mb-md-0">
                    <div className="d-grid gap-2">
                        <button className="btn btn-secondary gold-hover" type="button" 
                        // onClick={() => { setOpen1(!open1); setOpen2(open1) }} 
                        onClick={() => { setOpen1(!open1); }}
                        aria-controls="consignment-form"
                        aria-expanded={open1}>
                            Submit Online Quote
                        </button>
                    </div>
                </div>
                {/* button */}
                <div className="col-12 col-md-6">
                    <div className="d-grid gap-2">
                        <button className="btn btn-secondary gold-hover" type="button" 
                        // onClick={() =>{ setOpen2(!open2); setOpen1(open2) }} 
                        onClick={() =>{ setOpen2(!open2); }} 
                        aria-controls="virtual-appt"
                        aria-expanded={open2}>
                            Schedule a Virtual Appointment
                        </button>
                    </div>
                </div>
                {/* consignment form */}
                <div className="col-12 col-lg-6">
                    <Collapse in={open1}>
                        <div id="consignment-form">
                            <div className="card mt-4 mb-4 ms-md-4 ms-lg-2 consign-form">
                                <div className="card-body">
                                    <h6 className="text-center ps-4 pe-4 pb-1">Fill in a quick form, send us photos of your items and get a quote online at NO COST</h6> 
                                    {/* note message */}
                                    <ConsignmentNote/>
                                    {/* form - product consignment */}
                                    <ProductConsignmentForm/>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>

                {/* virtual appointmet form */}
                <div className="col-12 col-lg-6">
                    <Collapse in={open2}>
                        <div id="virtual-appt" className="ms-md-2 ms-lg-0">
                            <div className="card mt-4 mb-4 ms-md-4 ms-lg-2 consign-form">
                                <div className="card-body">
                                    <h6 className="text-center ps-4 pe-4 pb-1">
                                        Schedule a Virtual Appointment with one of our expert in high-end products to easily consign your ultra-luxury items.
                                    </h6> 
                                    {/* note message */}
                                    <ConsignmentNote/>
                                    {/* form - product consignment */}
                                    <VirtualAppointmentForm/>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>

        </React.Fragment>
    )
}