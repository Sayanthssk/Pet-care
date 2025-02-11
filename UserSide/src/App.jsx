import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Indexs from './Components/Indexs'
import Login from './Components/Login';
import DsignUp from './Components/Doctor/DsignUp';
import SsignUp from './Components/Shop/SsignUp';
import UserReg from './Components/User/UserReg';
import AdminDash from './Components/Admin/AdminDash';
import ViewUser from './Components/Admin/ViewUser';
import BuyerDash from './Components/User/BuyerDash';
import AddProduct from './Components/Shop/AddProduct';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Indexs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docs" element={<DsignUp />} />
        <Route path="/shopr" element={<SsignUp />} />
        <Route path="/userreg" element={<UserReg />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/user" element={<ViewUser />} />
        <Route path="/buyer-dash" element={<BuyerDash />} />
        <Route path="/addprod" element={<AddProduct />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
