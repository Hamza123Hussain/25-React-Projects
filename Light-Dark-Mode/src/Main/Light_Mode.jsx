import React, { useEffect, useState } from 'react';
import './style.css';

const Light_Mode = () => {
  const [darkmode, setDarkMode] = useState(() => {
    // Get the theme from localStorage or default to false (light mode)
    return JSON.parse(localStorage.getItem('theme')) || false; // this is geeting the value of the darkmode that has been set in the localstorage
  });

  useEffect(() => {
    // Save the current theme to localStorage whenever it changes
    localStorage.setItem('theme', JSON.stringify(darkmode));
  }, [darkmode]); // updates is done whenever state is changed

  const changeMode = () => {
    // Toggle the darkmode state
    setDarkMode(!darkmode);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
      className={darkmode ? 'dark' : 'white'}
    >
      <button onClick={changeMode}>Change Mode</button>
      <h1>I AM A DEVELOPER</h1>
    </div>
  );
};

export default Light_Mode;
