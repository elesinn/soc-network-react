import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    form: formReducer
})

const store = createStore(reducers)

export default store;