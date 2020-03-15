import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content/>
            </div>
        </BrowserRouter>
    )
}

export default App;
