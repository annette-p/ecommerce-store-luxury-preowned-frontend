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
        console.log("ERROR in service/authentication.js authenticateUser(): ", err);
        throw err;
    }
}

// Perform required tasks in order to invalidate the session of the authenticated user
export async function invalidateUserAuthentication() {

    // Call the /users/logout api to blacklist the user's refresh token so that it 
    // cannot be used by others in the event that this refresh token has been leaked.
    try {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        const logoutInfo = {
            refresh_token: refreshToken
        }
        await axios.post(`${global.apiUrl}/users/logout`, logoutInfo, headers);
    } catch(err) {
        console.log("Failed to perform remote logout to invalidate the user's refresh token. ", err)
    }

    // remove the information about the authenticated user from window local storage
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
    localStorage.removeItem("authenticatedUser")
}

// Retrieve the authenticated user's refresh token
export function getRefreshToken() {

    // the refresh token is stored in the window local storage after the user has been authenticated
    const user = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (user) {
        return user.token;
    } else {
        return null;
    }

}

// Create a new user profile
export async function createNewUserProfile(firstname, username, password, email) {

    // the user profile type will be "Customer"
    let userInfo = {
        type: "Customer",
        firstname: firstname,
        username: username,
        password: password,
        email: email
    }

    try {

        // call the api with the new user information to create the profile
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
        console.log("ERROR in service/authentication.js createNewUserProfile(): ", err);
        throw err;
    }
}

// use refresh token to obtain a new access token
export async function getAccessToken(refreshToken) {

    /* Access Token
    
    When a user logins in, the server issues an access token, which the client applications 
    can use to make secure calls to an API server. For security reasons, access tokens are
    valid for short time. 

    Refresh tokens which have longer valid time can be used to obtain a new access token
    without the need for the user to constantly log in. 

    ref: https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

    */

    if (refreshToken) {

        // call api /users/refresh with refresh token to get a new access token
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
    
        // return the new access token
        let accessToken = accessTokenResult.data.accessToken;
        return accessToken;

    } else {
        // refresh token does not exists.. likely the user has not log in
        return null
    }
    
}

// generate http authorization header
export async function generateHttpAuthzHeader(refreshToken) {

    // Request for a new access token, and prepare the http authorization
    // header
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
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

// Perform the password change for the user
export async function changeUserPassword(currentPassword, newPassword) {

    // Need 3 things - current password, new password, and access token
    // access token is needed because the api /users/change-password is protected
    // (i.e. need token to authenticate)
    try {
        const refreshToken = getRefreshToken();
        const headers = await generateHttpAuthzHeader(refreshToken);
        const updatedUserInfo = {
            current_password: currentPassword,
            new_password: newPassword
        }
        await axios.put(`${global.apiUrl}/users/change-password`, updatedUserInfo, headers);
        return true;
    } catch(err) {
        console.log("ERROR in service/autentication.js changeUserPassword(): ", err)
        throw err
    }
}
