import { useState } from 'react'
import './App.css'
import { Routes, Route,Navigate } from 'react-router'
import Eventlist from './pages/eventlist.jsx' 
import Homepage from './pages/homepage.jsx' 
import Register from './pages/register.jsx'
import Contact from './pages/contact.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

    <Route path="/" element={<Navigate to="/home" replace />}/>
    <Route path="/home" element={<Homepage />}/>
    <Route path="/event" element={<Eventlist />}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>

    </>
  )
}

export default App
