import './App.css';

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Search from './components/navbar/Search';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notifications from './components/sidebar/Notifications';
import HomePage from "./components/homePage/HomePage";
import Xlsx from "./components/xlsx/index";
import Doc from "./components/documents/index";
import Analysis from "./components/xlsx/analysis";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar/>
                <Search/>
                <Routes>
                    <Route exact path='/my-app' element={<HomePage />} />
                    <Route path='/my-app/home' element={<HomePage />} />
                    <Route path='/my-app/xlsx' element={<Xlsx />} />
                    <Route path='/my-app/doc' element={<Doc />} />
                    <Route path='/my-app/xlsx/analysis' element={<Analysis />} />
                    <Route path='/my-app/xlsx/compare' element={<Analysis />} />
                    <Route path="/my-app/Notifications" element={Notifications}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
