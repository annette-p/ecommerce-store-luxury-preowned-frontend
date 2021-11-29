import React from 'react'

export default function VirtualAppointmentForm(){
    return (
        <React.Fragment>
            <div class="row mt-4 v-light-grey-bg">
                <h4 className="text-center pt-3">Get Virtual Appointment</h4>
                {/* Name */}
                <div class="mt-4 mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Name  
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                </div>
                {/* Phone Number */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Phone Number  
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone Number"/>
                </div>
                {/* Email address */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Email 
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email Address"/>
                </div>
                {/* Date */}
                <div class="mb-3 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Select a date 
                    </label>
                    <input type="date" class="form-control" id="exampleFormControlInput1"/>
                </div>
                {/* Time */}
                <div class="mb-4 fw-bold">
                    <label for="exampleFormControlInput1" class="form-label">
                        Select a time 
                    </label>
                    <input type="time" class="form-control" id="exampleFormControlInput1"/>
                </div>
            </div>

            {/* Submit button */}
            <div class="row mt-4 mb-2">
                <div class="d-grid gap-2">
                    <button class="btn btn-secondary" type="button">SUBMIT</button>
                </div>
            </div>

        </React.Fragment>
    )
}