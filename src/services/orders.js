import axios from 'axios'

import { getRefreshToken, generateHttpAuthzHeader } from './authentication'

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