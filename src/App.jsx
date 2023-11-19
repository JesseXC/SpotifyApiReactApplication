import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Navbar from './components/navbar';
import {About, Contact, Home, LogInSpotify, ClientLogin} from "./components";
import { useEffect, useState } from 'react';

export const App = () => {
  const [clientIdInput, setClientIdInput] = useState("");
  const [clientSecretInput, setClientSecretInput] = useState("");
  const [isWindowOpen, setWindowOpen] = useState(false);
  const [isClientOpen, setClientOpen] = useState(false);
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    console.log(hash)
    console.log(token)
    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      console.log(token)
      window.location.replace(window.location.href.split("#")[0]);
      window.localStorage.storage.setItem("token",token)
    }
    setToken(token)
  },[])
  
  console.log(isClientOpen)
  const logout = () => {
    setToken("")
    setClientOpen(false)
    setWindowOpen(false)
    window.localStorage.removeItem("token")
  }

  const handleClientOpen = (value) =>{
    setClientOpen(true);
  }

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
        <Route exact path="/"
            element={
              isClientOpen ? (
                isWindowOpen ? <LogInSpotify CLIENT_ID={clientIdInput}/> : <ClientLogin                   
                clientIdInput={clientIdInput}
                clientSecretInput={clientSecretInput}
                onClientIdChange={handleClientIdChange}
                onClientSecretChange={handleClientSecretChange}
                onClientInfoClick={handleClientInfoClick}/>
              ) : (
                <Home
                handleClientOpen={handleClientOpen}
                />
              )
            }
          />
        <Route exact path ='/about' element={<About />} />
        <Route exact path ='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App