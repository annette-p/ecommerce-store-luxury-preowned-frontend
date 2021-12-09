import React, { useState } from 'react'
import emailjs from 'emailjs-com';  // initialize EmailJS

export default function VirtualAppointmentForm(){

    // EmailJS config
    const emailUserId = process.env.REACT_APP_EMAILJS_USER_ID
    const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    emailjs.init(emailUserId);

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [preferredDate, setPreferredDate] = useState();
    const [preferredTime, setPreferredTime] = useState();
    const [errors, setErrors] = useState({});
    const [successFormSubmission, setSuccessFormSubmission] = useState(false);

    // Perform form validation
    function validateForm() {
        let errors = {}
        let formIsValid = true

        if (!name) {
            formIsValid = false
            errors["name"] = "Please enter your name"
        }

        if (!email) {
            formIsValid = false
            errors["email"] = "Please enter your email address"
        }
        
        if (!phoneNumber) {
            formIsValid = false
            errors["phoneNumber"] = "Please enter your phone number"
        }

        if (!preferredDate) {
            formIsValid = false
            errors["preferredDate"] = "Please select your preferred date"
        }

        if (!preferredTime) {
            formIsValid = false
            errors["preferredTime"] = "Please select your preferred time"
        }

        setErrors(errors);

        return formIsValid
    }

    // Send virtual appoinment request using email via EmailJS https://www.emailjs.com/
    async function requestVirtualAppt() {
        if (validateForm()) {
            // send feedback via EmailJS
            let emailContent = {
                subject: "Schedule Virtual Appointment",
                body: "Customer would like to schedule a virtual appointment for consignment of luxury items.",
                content: `Name: ${name}, Email: ${email}, Phone: ${phoneNumber}, Preferred Appointment Date/Time: ${preferredDate}, ${preferredTime}`
            }
            await emailjs.send(emailServiceId, emailTemplateId, emailContent, emailUserId);

            setSuccessFormSubmission(true)
        }
        
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
                            <div className="error-msg">{errors.name}</div>
                        </div>
                        {/* Phone Number */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Phone Number  
                            </label>
                            <input type="email" className="form-control" placeholder="Your Phone Number" name="phoneNumber" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                            <div className="error-msg">{errors.phoneNumber}</div>
                        </div>
                        {/* Email address */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Email 
                            </label>
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            <div className="error-msg">{errors.email}</div>
                        </div>
                        {/* Date */}
                        <div className="mb-3 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Select a date  
                            </label>
                            <input type="date" className="form-control" name="preferredDate" value={preferredDate} onChange={(e) => {setPreferredDate(e.target.value)}}/>
                            <div className="error-msg">{errors.preferredDate}</div>
                        </div>
                        {/* Time */}
                        <div className="mb-4 fw-bold">
                            <label for="exampleFormControlInput1" className="form-label">
                                Select a time 
                            </label>
                            <input type="time" className="form-control" name="preferredTime" value={preferredTime} onChange={(e) => {setPreferredTime(e.target.value)}}/>
                            <div className="error-msg">{errors.preferredTime}</div>
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