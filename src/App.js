import './App.css';

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Search from './components/navbar/Search';
import Productiondata from './components/prod/Productiondata';
import {useState} from 'react'
import {dataProd} from './components/Data'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notifications from './components/sidebar/Notifications';



function App() {
    const [data, setData] = useState(dataProd);
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar/>
                <Search/>
                <Productiondata data={data}/>
                <Routes>
                    <Route exact path='/' element={<App/>} />
                    <Route path="/Notifications" element={Notifications}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
