import React, { useState } from 'react'

export default function DontMissOutModal({displayModal}){
    const [show, setShow] = useState(displayModal);

    return (
        <React.Fragment>
            <div
                className="modal show fade" tabIndex="-1"
                style={{display: show ? "block" : "none", backgroundColor: "rgba(0.5, 0.5, 0.5, 0.5)"
                }}>
                <div className="modal-dialog dont-miss-modal">  {/* modal-lg */}
                    <div className="modal-content login-card">
                        {/* header */}
                        <div className="modal-header">
                            <h3 className="modal-title missout-title">
                                Don't miss out !
                            </h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(false)}></button>
                        </div>
                        <div className="modal-body login-card">
                            <div className="container-fluid"> 
                                <div className="row">
                                    <p className='text-center fw-bold'>only 1 in stock</p>
                                    <p className='text-center'>Grab before it is gone !</p>
                                </div>
                                <div className="row">
                                    <img className="hour-glass-img"
                                        src={require('../../images/product/hourglass.gif').default}
                                        alt="time"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}