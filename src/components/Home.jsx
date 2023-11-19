import { useState } from 'react';
import React from 'react';

const Home = ({handleClientOpen}) => {
  return (
      <div className=''>
      <button onClick={handleClientOpen}>Click me to inputu Client Secret</button>
      </div>

  );
};

export default Home;
