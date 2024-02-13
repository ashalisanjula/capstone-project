import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Support from '../Pages/Support';
import Explore from '../Pages/Explore';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Recent_Workplaces from '../Pages/Recent_Workplaces';


const Routers = () => {
  return (
    <Routes >
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/recent_workplaces' element={<Recent_Workplaces/>} />
    </Routes>
  )
}

export default Routers