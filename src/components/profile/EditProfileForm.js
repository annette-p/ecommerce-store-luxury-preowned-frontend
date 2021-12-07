import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import UserProfileContext from '../../contexts/profile/UserProfileContext'

export default function EditProfileForm(){

    const history = useHistory();

    let { url } = useRouteMatch();
    
    // setting up local state
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [errors, setErrors] = useState({})
    const [loaded, setLoaded] = useState(false)
    const userContext = useContext(UserProfileContext);
   

    // to display the form with existing infomation frm the shared state in contex
    useEffect(() => {

        const fetchUserProfile = async () => {
            console.log("executing fetchUserProfile()...")
            let retrievedUserProfile = await userContext.getUserProfile();
            console.log(retrievedUserProfile)
            setFirstName(retrievedUserProfile.firstname);
            setLastName(retrievedUserProfile.lastname);
            // setEmail(retrievedUserProfile.email)
            setShippingAddress(retrievedUserProfile.shipping_address)
            setLoaded(true);
        }
        fetchUserProfile();

    }, [loaded, userContext]) 

    // Perform validation of form inputs
    function validateForm() {
        let errors = {}
        let formIsValid = true

        if (!firstName) {
            formIsValid = false
            errors["firstName"] = "Please enter your first name"
        }

        if (!lastName) {
            formIsValid = false
            errors["lastName"] = "Please enter your last name"
        }

        // if (!email) {
        //     formIsValid = false
        //     errors["email"] = "Please re-enter your email address"
        // }

        setErrors(errors);

        return formIsValid;
    }
    

    async function submitProfileForm() {
        if (validateForm()) {
            await userContext.updateProfile(firstName, lastName, shippingAddress)
            history.push(`${url}/completed`,{
                firstName, lastName, shippingAddress
            });
        }
    }

    return (
        <React.Fragment>

            {/* {userProfile ?  */}

                <div className="row mt-4 mb-4">
                    <div className="card light-grey-bg no-order-div">
                        <div className="card-body">
                            {/* First name */}
                            <div className="mt-4">
                                <input className="form-control" type="text" placeholder="First Name" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                                <div className="error-msg">{errors.firstName}</div>
                            </div>
                            {/* Last name */}
                            <div className="mt-4">
                                <input className="form-control" type="text" placeholder="Last name" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                                <div className="error-msg">{errors.lastName}</div>
                            </div>
                            {/* email address */}
                            {/* <div className="mt-4">
                                <input className="form-control" type="text" placeholder="Email Address" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                <div className="error-msg">{errors.email}</div>
                            </div> */}
                            {/* shipping address */}
                            <div className="mt-4">
                                <textarea className="form-control" rows="4" placeholder="Shipping Address" name="shippingAddress" value={shippingAddress} onChange={(e) => {setShippingAddress(e.target.value)}}/>
                                <div className="error-msg">{errors.shippingAddress}</div>
                            </div>
                            {/* sign up button */}
                            <div className="mt-4">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-secondary gold-hover" type="submit" onClick={()=>{submitProfileForm()}} >
                                        UPDATE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            {/* : null} */}

        </React.Fragment>
    )
}