import React, { useContext, useEffect, useState } from 'react'
import UserProfileContext from '../../contexts/profile/UserProfileContext'

export default function EditProfileForm(){

    const [userProfile, setUserProfile] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const context = useContext(UserProfileContext);

    useEffect(() => {
        const fetchUserProfile = () => {
            let retrievedUserProfile = context.getUserProfile();
            setName(retrievedUserProfile.name)
            setUserProfile(retrievedUserProfile);
        }
        fetchUserProfile();
    }, [userProfile, context]) 

    return (
        <React.Fragment>

            {userProfile ? 

                <div className="row mt-4 mb-4">
                    <div className="card light-grey-bg edit-profile" style={{width: "30rem"}}>
                        <div className="card-body">
                            {/* username */}
                            <div className="mt-4">
                                {/* placeholder={userProfile.name} */}
                                <input className="form-control" type="text" placeholder="Name" name="name" value={name} 
                                onChange={(e) => {setName(e.target.value)}}/>
                            </div>
                            {/* Last name */}
                            <div className="mt-4">
                                <input className="form-control" type="text" name="last_name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                            </div>
                            {/* email address */}
                            <div className="mt-4">
                                <input className="form-control" type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            {/* billing address */}
                            <div className="mt-4">
                                <input className="form-control" type="text" name="address" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                            </div>
                            {/* shipping address */}
                            <div className="mt-4">
                                <input className="form-control" type="text" name="shipping_address" value={shippingAddress} onChange={(e) => {setShippingAddress(e.target.value)}}/>
                            </div>
                            {/* sign up button */}
                            <div className="mt-4">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-secondary gold-hover" type="submit" valuelue="updateProfile" onClick={()=>{context.updateProfile(name, lastName, email, address, shippingAddress)}} >
                                        UPDATE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            : null}

        </React.Fragment>
    )
}