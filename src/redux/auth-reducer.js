import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;

    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    let status = await response.json()
    console.log(status)

    if (status.resultCode === 0) {
        let {id, login, email} = status.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export default authReducer