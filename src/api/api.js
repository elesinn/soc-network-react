const myInit = {
    headers:     {
        "API-KEY": "37b9c622-19ed-4d9a-a65d-023ffbaf361b"
    },
    credentials: "include"
};

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

export const profileApi = {
    getProfile(userId) {
        const request = new Request(baseUrl+'profile/'+userId, {...myInit, method: 'GET'})
        return fetch(request)
    },
    getStatus(userId) {
        // const request = new Request(baseUrl+'profile/status/'+userId, {...myInit, method: 'GET'})

        return fetch(baseUrl+'profile/status/'+userId)
    },
    // updateStatus() {
    //     const request = new Request(baseUrl+'profile/status'+userId, {...myInit, method: 'PUT'})
    //     return fetch(request)
    // }
}

export const authAPI = {
    me() {
        const request = new Request(baseUrl+'auth/me', {...myInit, method: 'GET'})
        return fetch(request)
    }
}