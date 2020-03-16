import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <Content/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
