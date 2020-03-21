import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;