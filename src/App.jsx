import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Navbar from './pages/navbar';
import {Dashboard, Contact, Home, LogInSpotify, ClientLogin} from "./pages";
import { useEffect, useState } from 'react';
//import SpotifyWebApi from 'spotify-web-api-js';

//const spotifyApi = new SpotifyWebApi()

const getTokenFromURL = () =>{
  return window.location.hash.substring(1).split("&").reduce((initial,item) =>{
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
};

function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("This is what we derived from the URL: ", getTokenFromURL())
    const spotifyToken = getTokenFromURL().access_token
    window.location.hash = "";
    console.log("This is our spotify token",spotifyToken);
    if(spotifyToken) {
      setSpotifyToken(spotifyToken)
      // use spotify api
      //spotifyApi.setAccessToken(spotifyToken)
      //spotifyApi.getMe().then((user) =>{
        //console.log(user)
      // })
      setLoggedIn(true)
    }
  },[])

  return (
    <main>
    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route exact path="/" element={loggedIn ? <Dashboard spotifyToken={spotifyToken} /> : <LogInSpotify />} />
        <Route exact path ='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App