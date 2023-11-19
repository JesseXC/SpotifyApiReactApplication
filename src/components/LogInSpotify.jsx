import React from 'react'

const LogInSpotify = ({CLIENT_ID}) => {
    const REDIRECT_URI = "http://localhost:5173/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

  return (
    <div className='bg-blue items-center flex flex-col justify-center h-screen'>
    <h1>Spotify React</h1>
    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
    to Spotify</a>
  </div>
  )
}

export default LogInSpotify