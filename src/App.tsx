import Checking from './dashboard/contacts/Checking';
import React, { FC } from 'react';
import AddContact from './dashboard/contacts/AddContact';
import ForgetPassword from './auth/ForgetPassword';
import {Routes,Route} from 'react-router-dom';
import Login from './auth/Login';
import TermofUse from './auth/TermOfUse';
import PrivacyPolicy from './auth/PrivacyPolicy';
import Register from './auth/Register';
import Navbar from './components/Navbar';
import Loading from './components/Loading'
import { useState,useEffect } from 'react';
import Recover from './auth/Recover';
function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (
    <div style={{backgroundColor:'white'}}>
    <Navbar/>
    <Routes>
      <Route path="/AddContact" element={<AddContact />} />
      <Route path='/' element={<Login/>}/>
      <Route path='/forgetPassword' element={<ForgetPassword/>}/>
      <Route path='/termofUse' element={<TermofUse/>}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      <Route path='/recover' element={<Recover/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/checking' element={<Checking/>}/>
    </Routes>
    </div>
  );
}

export default App;
