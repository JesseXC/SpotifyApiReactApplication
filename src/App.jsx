import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Navbar from './components/navbar';
import {About, Contact, Home, Testcomponent} from "./components";
import { useEffect, useState } from 'react';

export const App = () => {
  const [clientIdInput, setClientIdInput] = useState("");
  const [clientSecretInput, setClientSecretInput] = useState("");
  const [isWindowOpen, setWindowOpen] = useState(false);
  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    
    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("acces_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.storage.setItem("token",token)
    }
    setToken(token)
  },[])

  const handleClientIdChange = (value) => {
    setClientIdInput(value);
  };

  const handleClientSecretChange = (value) => {
    setClientSecretInput(value);
  };

  const handleClientInfoClick = () => {
    setWindowOpen(true);
  };

  return (
    <main>
    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route exact path ='/' element={
        <Home
          clientIdInput={clientIdInput}
          clientSecretInput={clientSecretInput}
          isWindowOpen={isWindowOpen}
          onClientIdChange={handleClientIdChange}
          onClientSecretChange={handleClientSecretChange}
          onClientInfoClick={handleClientInfoClick}
        />} 
        />
        <Route exact path ='/Testcomponent' element={<Testcomponent />} />
        <Route exact path ='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App