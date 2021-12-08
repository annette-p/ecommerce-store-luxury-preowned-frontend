import React, {useState} from "react";
import UserProfileContext from "./UserProfileContext";

import { 
    authenticateUser,
    createNewUserProfile,
    getRefreshToken,
    invalidateUserAuthentication
} from '../../services/authentication';

import {
    getUserInfo,
    getUserInfoFromLocalStorage,
    updateUserInfo
} from '../../services/user';

import {
    getCartIdForUser,
    takeOwnershipOfCart,
    removeCartId
} from '../../services/cart';

export default function UserProfileProvider(props) {

    const [purchaseOrders, setPurchaseOrders] = useState([
        {
          id: 1,
          designer: "Dior1",
          name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
          condition: "Used like new",
          price: "3,500",
          quantity: "1",
          total: "3,500",
          total_quantity: "1",
          status: "new",
          shipping_name: "NA",
          delivery_tracking: "NA",
          delivery_address: "80 Marine Parade Rd, Singapore 449269",
          customer_name: "Jenny Doe"
        },
        {
            id: 2,
            designer: "Dior2",
            name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag2",
            condition: "New with tag",
            price: "4,500",
            quantity: "2",
            total: "9,000",
            total_quantity: "2",
            status: "delivery",
            shipping_name: "FedEx",
            delivery_tracking: "XY99999888888",
            delivery_address: "80 Marine Parade Rd, Singapore 449269",
            customer_name: "James Daniel"
        },
        {
            id: 3,
            designer: "Dior3",
            name: "Diorissimo Canvas and Leather Mini Saddle Shoulder Bag",
            condition: "Worn twice",
            price: "5,500",
            quantity: "3",
            total: "16,500",
            total_quantity: "3",
            status: "completed",
            shipping_name: "FedEx",
            delivery_tracking: "MT5555555555555",
            delivery_address: "80 Marine Parade Rd, Singapore 449269",
            customer_name: "Tony Jaa"
        },
    ]);

    const [sellingOrders, setSellingOrders] = useState([
        {
          id: 1,
          order_no: "CLP00099998885555671",
          designer: "YSL",
          name: "Red Leather Mini Shoulder Bag",
          condition: "Used like new",
          quantity: "1",
          extected_price: "3,500",
          status: "pending initial evaluation"
        },
        {
            id: 2,
            order_no: "CLP0009999888888888",
            designer: "Dolce Cabana",
            name: "Blue Leather Tole Bag",
            condition: "New with tag",
            quantity: "1",
            extected_price: "2,500",
            status: "Pending official evaluation",
            delivery_tracking: "XY99999888888"
        },
        {
            id: 3,
            order_no: "CLP00099995555555555",
            designer: "Gucci",
            name: "Baby Pink Side Bag",
            condition: "Vintage",
            quantity: "1",
            extected_price: "5,500",
            status: "Cancelled",
            status_comment: "xxxxxxxxxxxxx"
        },
    ]);

    // eslint-disable-next-line 
    const [user, setUser] = useState(null);

    const context = {

        // retrieve all purchase orders of that authenticated user
        getPurchaseOrders:() => {
            return purchaseOrders;
        },

        getPurchaseOrderById: (id) => {
            return purchaseOrders.filter( p => p.id === parseInt(id))[0]
        },

        getPurchaseOrdersByStatus: (selectedStatus) => {
            return purchaseOrders.filter( p => p.status === selectedStatus)
        },

        testOrder: () => {
            setPurchaseOrders(purchaseOrders)
        },


        // .................................................................... //

        // retrieve all consignment orders of that authenticated user 
        getSellingOrders:() => {
            return sellingOrders;
        },

        getSellingOrderById: (id) => {
            return sellingOrders.filter( s => s.id === parseInt(id))[0]
        },

        // *** to fix -- for several pending status such as pending initial evaliation, pending official evaluation status which is be displayed under "in progress" tap  >> currently only display 1 status only
        getSellingOrdersByStatus: (selectedStatus) => {
            return sellingOrders.filter( s => s.status.toLowerCase() === selectedStatus.toLowerCase())
        },

        testSellingOrder: () => {
            setSellingOrders(sellingOrders)
        },


        // .................................................................... //

        // Validate whether there is currently an authenticated user session based on whether 'user' state variable is NULL
        isAuthenticated: () => {
            // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
            if (getUserInfoFromLocalStorage() && user) {
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
                // if authentication is successful, keep a copy of the user info from the window local storage and save in the
                // React Context state. The main purpose is to leverage "useEffect" to re-render components when the Context state
                // changes.
                setUser(JSON.parse(localStorage.getItem("authenticatedUser")));

                // take ownership of cart (if any)
                await takeOwnershipOfCart()

                // if user have an existing cart, retrieved the cart id
                await getCartIdForUser()
            }
            return loginSuccess;
        },

        // Perform logout of user by invalidating the window local storage, as well as the React Context state.
        logoutUser: () => {
            invalidateUserAuthentication();
            removeCartId();
            setUser(null);
        },

        // Retrieve all details about that authenticated user profile
        getUserProfile: async () => {
            // return user.info;
            let retrievedUserInfo = await getUserInfo();
            // setUser(retrievedUserInfo);
            return retrievedUserInfo;
        },

        getUserInfoFromLocalStorage: () => {
            return getUserInfoFromLocalStorage()
        },

        createUserProfile: async (firstname, username, password, email) => {
            let signupSuccess = await createNewUserProfile(firstname, username, password, email);
            return signupSuccess;
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
                setUser(authenticatedUserInfo);
                return true;
            } else {
                return false;
            }
            
        }

    }

    return (
        <UserProfileContext.Provider value={context}>
            {props.children}  
        </UserProfileContext.Provider>
    )

}