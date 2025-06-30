import './App.css';

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Search from './components/navbar/Search';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notifications from './components/sidebar/Notifications';
import HomePage from "./components/homePage/HomePage";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar/>
                <Search/>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path="/Notifications" element={Notifications}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
