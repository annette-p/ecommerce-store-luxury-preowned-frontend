import axios from 'axios'

import { getRefreshToken, generateHttpAuthzHeader } from './authentication'

export async function getUserInfo() {
    const refreshToken = getRefreshToken();
    const headers = await generateHttpAuthzHeader(refreshToken);
    let userInfoResult = await axios.get(`${global.apiUrl}/users/info`, headers);
    const userInfo = userInfoResult.data.data;
    return userInfo;
}

export async function updateUserInfo(firstName, lastName, shippingAdress) {
    try {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        const updatedUserInfo = {
            firstname: firstName,
            lastname: lastName,
            shipping_address: shippingAdress
        }
        await axios.put(`${global.apiUrl}/users/update`, updatedUserInfo, headers);
        return true;
    } catch(err) {
        console.log("ERROR in service/user.js updateUserInfo(): ", err)
        throw err
    }
}

export function getUserInfoFromLocalStorage() {
    return JSON.parse(localStorage.getItem("authenticatedUser"));
}
