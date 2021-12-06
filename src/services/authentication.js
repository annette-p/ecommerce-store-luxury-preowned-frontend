import axios from 'axios'

// Perform user authentication
// * when user is authenticated, the session 'authenticatedUser' object is created with the user info
//   and function return "true".
// * when user is not authenticated, the function return "false".
export async function authenticateUser(username, password) {
    let userLogin = {
        username: username,
        password: password
    }

    try {
        let authResult = await axios.post(`${global.apiUrl}/users/authenticate`, userLogin);
        // login success
        /*
            A success login response data from backend API will be:
            {
                "accessToken": "eyJhbGc...",
                "refreshToken": "eyJhbGc...",
                "lastLogin": "2021-12-05T05:02:07.000Z"
            }
        */

        const tokens = authResult.data;

        const authHeaders = {
            "Authorization": `Bearer ${tokens.accessToken}`
        };

        // now use the access token to retrieve the user's info
        let userInfoResult = await axios.get(`${global.apiUrl}/users/info`, { headers: authHeaders})

        const userInfo = userInfoResult.data.data
        if (userInfo.type === "Customer") {
            const authenticatedUserInfo = {   
                "info": userInfo,
                "token": tokens.refreshToken
            }

            // update session storage with details of logged-in freelancer
            // ref: https://typeofnan.dev/using-session-storage-in-react-with-hooks/

            // The JSON.stringify() method converts a JavaScript object to a JSON string,
            localStorage.setItem("authenticatedUser", JSON.stringify(authenticatedUserInfo))

            return true;
            
        } else {
            // Admins are not permitted to login here
            return false
        }
    } catch(err) {
        throw err;
    }
}

export function invalidateUserAuthentication() {
    // remove the entry from local window storage
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
    localStorage.removeItem("authenticatedUser")
}

export function getRefreshToken() {
    const user = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (user) {
        return user.token;
    } else {
        return null;
    }
}

export async function createNewUserProfile(username, password, email) {
    let userInfo = {
        type: "Customer",
        username: username,
        password: password,
        email: email
    }

    try {
        let signupResult = await axios.post(`${global.apiUrl}/users/create`, userInfo);
        /*
            A success user account sign-up response data from backend API will be:
            {
                "success": true,
                "message": "New user created successfully",
                "user_id": 1
            }
        */

        const newUserId = signupResult.data.user_id;
        if (newUserId) {
            // signup success
            return true;
        } else {
            return false
        }
    } catch(err) {
        throw err;
    }
}

// use refresh token to obtain a new access token
export async function getAccessToken(refreshToken) {
    let accessTokenResult = await axios.post(
        `${global.apiUrl}/users/refresh`, 
        {
            "refresh_token": refreshToken
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    if (!accessTokenResult) {
        // if it is not possible to get a new access token, it is 
        // likely that the refresh token has expired.
        invalidateUserAuthentication();
        return null;
    }

    let accessToken = accessTokenResult.data.accessToken;
    return accessToken;
}

// generate http authorization header
export async function generateHttpAuthzHeader(refreshToken) {
    const accessToken = await getAccessToken(refreshToken);
    if (accessToken !== null) {
        const headers = { 
            'headers': {
                'Authorization': `Bearer ${accessToken}`
            }
        };
        return headers;
    } else {
        return null;
    }
}
