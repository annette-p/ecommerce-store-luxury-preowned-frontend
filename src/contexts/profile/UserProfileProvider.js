import React, {useState} from "react";
import UserProfileContext from "./UserProfileContext";

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

    const [userProfile, setUserProfile] = useState([
        {
          id: 1,
          name: "Jane",
          last_name: "XX",
          email: "jane@gmail.com",
          address: "132 xxxxxxxxxx Singapore 232323"
        }
    ]);

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


        // retrieve all details about that authenticated user profile
        getUserProfile:() => {
            return userProfile;
        },

        // function to allow edit profile 

        // function to allow changing password

        // function to allow delete account

        test: () => {
            setUserProfile(userProfile)
        }

    }

    return (
        <UserProfileContext.Provider value={context}>
            {props.children}  
        </UserProfileContext.Provider>
    )

}