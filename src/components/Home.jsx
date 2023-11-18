import { useState } from 'react';
import React from 'react';

const Home = ({
  clientIdInput,
  clientSecretInput,
  isWindowOpen,
  onClientIdChange,
  onClientSecretChange,
  onClientInfoClick,
}) => {
  const REDIRECT_URI = "http://localhost:5173/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <>
    {isWindowOpen ? (
      <div className='bg-blue items-center flex flex-col justify-center h-screen'>
        <h1>Window is Open!</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${clientIdInput}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </div>
    ) : (
      <div className='bg-blue items-center flex flex-col justify-center h-screen'>
        <div className='mb-4 flex flex-col'>
          <label htmlFor="clientID">Client ID: </label>
          <input
            type="text"
            id="clientId"
            placeholder=""
            className="mt-2 p-2 border border-gray-400 rounded"
            value={clientIdInput}
            onChange={(e) => onClientIdChange(e.target.value)} 
          />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor="clientSecret">Client Secret: </label>
          <input
            type="text"
            id="clientSecret"
            placeholder=""
            className="mt-2 p-2 border border-gray-400 rounded"
            value={clientSecretInput}
            onChange={(e) => onClientSecretChange(e.target.value)}
          />
        </div>
        <div className="mt-4"> 
          <button onClick={onClientInfoClick} className='border border-gray-dark-500 bg-white rounded-full w-56'> Submit </button>
        </div>
      </div>
    )}
  </>
  );
};

export default Home;
