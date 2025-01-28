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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Indexs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docs" element={<DsignUp />} />
        <Route path="/shopr" element={<SsignUp />} />
        <Route path="/userreg" element={<UserReg />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
