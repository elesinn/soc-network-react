import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newId = state.posts.slice(-1)[0].id + 1; //last + 1
            let newPost = {
                id: newId,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    let status = await response.json()
    console.log(status)
    dispatch(setStatus(status))
}

export const updateStatus = (status) => async (dispatch) => {
    // let response = await profileAPI.updateStatus(status);
    //
    // if (response.data.resultCode === 0) {
    //     dispatch(setStatus(status));
    // }

    dispatch(setStatus(status));
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setStatus = (status) => ({type: SET_STATUS, status})

export default profileReducer;