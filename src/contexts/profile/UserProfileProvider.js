import React, {useEffect, useState} from "react";
import UserProfileContext from "./UserProfileContext";

import { 
    authenticateUser,
    changeUserPassword,
    createNewUserProfile,
    getRefreshToken,
    invalidateUserAuthentication
} from '../../services/authentication';

import {
    deleteUserAccount,
    getUserInfo,
    getUserInfoFromLocalStorage,
    updateUserInfo
} from '../../services/user';

import {
    getCartIdForUser,
    takeOwnershipOfCart,
    removeCartId
} from '../../services/cart';

import {
    getConsignmentsOfUser,
    getOrdersOfUser
} from '../../services/orders';

export default function UserProfileProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [consignments, setConsigments] = useState([])
    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const context = {

        // get number of purchase orders
        getNumberOfPurchaseOrders:() => {
            return orders.length;
        },

        // retrieve all purchase orders of that authenticated user
        getPurchaseOrders:() => {
            return orders;
        },

        // retrieve a purchase order by its id
        getPurchaseOrderById: (id) => {
            return orders.find( p => p.id === parseInt(id))
        },

        // retrieve purchase orders that matches the list of given order statuses
        getPurchaseOrdersByStatus: (desiredOrderStatuses) => {
            return orders.filter( p => desiredOrderStatuses.includes(p.status) )
        },


        // .................................................................... //

        // get number of selling orders (i.e. consignments)
        getNumberOfSellingOrders:() => {
            return consignments.length;
        },

        // retrieve all consignment orders of that authenticated user 
        getSellingOrders:() => {
            return consignments;
        },

        // retrieve a consignment order by its id
        getSellingOrderById: (id) => {
            return consignments.find( s => s.id === parseInt(id))
        },

        // retrieve consignment orders that matches the list of given order statuses
        getSellingOrdersByStatus: (desiredOrderStatuses) => {
            return consignments.filter( p => desiredOrderStatuses.includes(p.status) )
        },


        // .................................................................... //

        // Validate whether there is currently an authenticated user session
        // - the authenticated user information is stored in window local storage
        isAuthenticated: () => {
            // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
            if (getUserInfoFromLocalStorage()) {
                // User info found in local storage. We can assume that user is authenticated :)
                return true;
            } else {
                // User info NOT found in local storage. We can assume that user is NOT authenticated
                return false;
            }
        },

        // Perform user authentication.
        loginUser: async (username, password) => {
            let loginSuccess = await authenticateUser(username, password);
            if (loginSuccess) {
                // The main purpose is to leverage "useEffect" to re-render components when the Context state changes.
                setIsAuthenticated(true);

                // take ownership of cart (if any)
                await takeOwnershipOfCart()

                // if user have an existing cart, retrieved the cart id
                await getCartIdForUser()
            }
            return loginSuccess;
        },

        // Perform logout of user by invalidating the window local storage, as well as the React Context state.
        logoutUser: () => {
            setIsAuthenticated(false);
            invalidateUserAuthentication();
            removeCartId();
        },

        // Retrieve all details about that authenticated user profile
        getUserProfile: async () => {
            // return user.info;
            let retrievedUserInfo = await getUserInfo();
            return retrievedUserInfo;
        },

        // retrieve the authenticated user information from window local storage
        getUserInfoFromLocalStorage: () => {
            return getUserInfoFromLocalStorage()
        },

        // create a user profile
        createUserProfile: async (firstname, username, password, email) => {
            try {
                let signupSuccess = await createNewUserProfile(firstname, username, password, email);
                return signupSuccess;
            } catch(_err) {
                return false
            }
        },

        // change the user's current password
        changeUserPassword: async(currentPassword, newPassword) => {
            try {
                let changePasswordSuccess = await changeUserPassword(currentPassword, newPassword);
                return changePasswordSuccess;
            } catch(_err) {
                return false;
            }
        },

        // delete the user's account
        // - user need to provide the current password as an additional level of security
        deleteUserAccount: async(currentPassword) => {
            try {
                let deleteAccountSuccess = await deleteUserAccount(currentPassword);
                if (deleteAccountSuccess) {
                    invalidateUserAuthentication();
                    removeCartId();
                    setIsAuthenticated(false);
                    return true;
                } else {
                    return false;
                }
            } catch(_err) {
                return false;
            }
        },

        // function to allow edit and update profile 
        updateProfile: async (firstName, lastName, shippingAddress) => {
            let updateSuccess = await updateUserInfo(firstName, lastName, shippingAddress);
            if (updateSuccess) {
                const updatedUser = await getUserInfo();

                const authenticatedUserInfo = {   
                    "info": updatedUser,
                    "token": getRefreshToken()
                }

                localStorage.setItem("authenticatedUser", JSON.stringify(authenticatedUserInfo));
                return true;
            } else {
                return false;
            }
            
        }

    }

    useEffect(() => {

        const loadData = async() => {
            if (!loaded) {

                // check whether user is authenticated
                if (getUserInfoFromLocalStorage()) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
    
                // for authenticated user, retrieve the list of purchased orders and consignment orders
                if (isAuthenticated) {
                    const retrievedOrders = await getOrdersOfUser();
                    setOrders(retrievedOrders);
        
                    const retrievedConsignments = await getConsignmentsOfUser();
                    setConsigments(retrievedConsignments);
                }
    
                setLoaded(true);
            }
        }
        loadData();

    }, [loaded, isAuthenticated, orders, consignments])

    return (
        <UserProfileContext.Provider value={context}>
            {props.children}  
        </UserProfileContext.Provider>
    )

}