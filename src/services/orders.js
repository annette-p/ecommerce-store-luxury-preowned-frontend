import axios from 'axios'

import { getRefreshToken, generateHttpAuthzHeader } from './authentication'

// // get list of valid order statuses
// export async function getListOfValidOrderStatuses() {
//     let orderStatusesResult = await axios.get(`${global.apiUrl}/orders/statuses`);
//     let orderStatuses = orderStatusesResult.data.data;
//     return orderStatuses;
// }

// export async function getListOfValidConsignmentStatuses() {
//     let consignmentStatusesResult = await axios.get(`${global.apiUrl}/consignments/statuses`);
//     let consignmentStatuses = consignmentStatusesResult.data.data;
//     return consignmentStatuses;
// }

export async function getOrdersOfUser() {
    try {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        let userOrdersResult = await axios.get(`${global.apiUrl}/orders`, headers);
        const userOrders = userOrdersResult.data.data;
        return userOrders;
    } catch(err) {
        console.log("ERROR in service/orders.js getOrders(): ", err)
        throw err
    }
}

export async function getConsignmentsOfUser() {
    try {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        let userConsignmentsResult = await axios.get(`${global.apiUrl}/consignments`, headers);
        const userConsignments = userConsignmentsResult.data.data;
        return userConsignments;
    } catch(err) {
        console.log("ERROR in service/orders.js getConsignments(): ", err)
        throw err
    }
}