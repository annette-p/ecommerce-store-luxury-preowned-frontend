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
    // getListOfValidOrderStatuses,
    // getListOfValidConsignmentStatuses,
    getConsignmentsOfUser,
    getOrdersOfUser
} from '../../services/orders';

export default function UserProfileProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [consignments, setConsigments] = useState([])
    const [orders, setOrders] = useState([]);
    // const [consignmentStatuses, setConsignmentStatuses] = useState([])
    // const [orderStatuses, setOrderStatuses] = useState([])
    const [loaded, setLoaded] = useState(false);

    const context = {

        // // retrieve the list of valid order statuses
        // getPurchaseOrderStatuses: () => {
        //     return orderStatuses;
        // },

        getNumberOfPurchaseOrders:() => {
            return orders.length;
        },

        // retrieve all purchase orders of that authenticated user
        getPurchaseOrders:() => {
            return orders;
        },

        getPurchaseOrderById: (id) => {
            return orders.find( p => p.id === parseInt(id))
        },

        getPurchaseOrdersByStatus: (selectedStatus) => {
            return orders.filter( p => selectedStatus.includes(p.status) )
        },


        // .................................................................... //

        // // retrieve list of valid consignment statuses
        // getSellingOrderStatuses: () => {
        //     return consignmentStatuses;
        // },

        getNumberOfSellingOrders:() => {
            return consignments.length;
        },

        // retrieve all consignment orders of that authenticated user 
        getSellingOrders:() => {
            return consignments;
        },

        getSellingOrderById: (id) => {
            return consignments.find( s => s.id === parseInt(id))
        },

        // *** to fix -- for several pending status such as pending initial evaliation, pending official evaluation status which is be displayed under "in progress" tap  >> currently only display 1 status only
        getSellingOrdersByStatus: (selectedStatus) => {
            return consignments.filter( p => selectedStatus.includes(p.status) )
        },


        // .................................................................... //

        // Validate whether there is currently an authenticated user session based on whether 'user' state variable is NULL
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

        getUserInfoFromLocalStorage: () => {
            return getUserInfoFromLocalStorage()
        },

        createUserProfile: async (firstname, username, password, email) => {
            try {
                let signupSuccess = await createNewUserProfile(firstname, username, password, email);
                return signupSuccess;
            } catch(_err) {
                return false
            }
        },

        changeUserPassword: async(currentPassword, newPassword) => {
            try {
                let changePasswordSuccess = await changeUserPassword(currentPassword, newPassword);
                return changePasswordSuccess;
            } catch(_err) {
                return false;
            }
        },

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
                if (getUserInfoFromLocalStorage()) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
    
                const retrievedOrders = await getOrdersOfUser();
                setOrders(retrievedOrders);
    
                const retrievedConsignments = await getConsignmentsOfUser();
                setConsigments(retrievedConsignments);
    
                // const retrievedOrderStatuses = await getListOfValidOrderStatuses();
                // setOrderStatuses(retrievedOrderStatuses);
    
                // const retrievedConsignmentStatuses = await getListOfValidConsignmentStatuses();
                // setConsignmentStatuses(retrievedConsignmentStatuses);
    
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