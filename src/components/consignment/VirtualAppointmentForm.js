import React, { useState } from 'react'

export default function VirtualAppointmentForm(){

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [successFormSubmission, setSuccessFormSubmission] = useState(false);

    
    // --- >>> to route the request to email.js 

    // --->>> to perform validation function here 

    function requestVirtualAppt() {
        let newAppointment = {
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            date: date,
            time: time
        }
        setSuccessFormSubmission(true)
        console.log(newAppointment)
    }


    function renderVirtualAppointmentForm() {
        if (!successFormSubmission) {
            return (
                <div>
                    <div className="row mt-4 v-light-grey-bg">
                        <h4 className="text-center pt-3">Get Virtual Appointment</h4>
                        {/* Name */}
                        <div className="mt-4 mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Name  
                            </label>
                            <input type="text" className="form-control" placeholder="Your Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        {/* Phone Number */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Phone Number  
                            </label>
                            <input type="email" className="form-control" placeholder="Your Phone Number" name="phoneNumber" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                        </div>
                        {/* Email address */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Email 
                            </label>
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        {/* Date */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Select a date  
                            </label>
                            <input type="date" className="form-control" name="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                        </div>
                        {/* Time */}
                        <div className="mb-4 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Select a time 
                            </label>
                            <input type="time" className="form-control" name="time" value={time} onChange={(e) => {setTime(e.target.value)}}/>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className="row mt-4 mb-2">
                        <div className="d-grid gap-2">
                            <button className="btn btn-secondary" type="submit" onClick={()=>{requestVirtualAppt()}}>
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }


    function renderSuccessFormSubmission() {
        if (successFormSubmission) {
            return (
                <div>
                    <div className="row mt-4 v-light-grey-bg">
                        <h4 className="text-center pt-4 mb-4">
                            Virtual Appointment has been submitted
                        </h4>
                        <p className="fs-5 text-center mt-3 pb-3">
                            We will get back to you within 48 hours with the appointment confirmation or our experts will be contacting you directly if there's any changes to the appointment. 
                        </p>
                    </div>
                </div>
            )
        }
    }


    return (
        <React.Fragment> 
            {renderVirtualAppointmentForm()}
            {renderSuccessFormSubmission()}
        </React.Fragment>
    )
}