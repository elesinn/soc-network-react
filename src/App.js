import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, withRouter} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Dimmer, Loader} from 'semantic-ui-react'
import HeaderContainer from "./Components/Header/HeaderContainer";


const SocNetwork = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, [props.initialized])

    if (!props.initialized) {
        return <Dimmer active inverted>
            <Loader inverted/>
        </Dimmer>
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <Content/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const SocNetworkContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(SocNetwork)

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <SocNetworkContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
