import React, { useState, useEffect } from 'react';



// Here starts the main content

export default function DarkMode() {

  // Using useState hook
  const [ darkMode, setDarkMode ] = useState(false)
   
  // Using useEffect hook
  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
    // If dark mode is enabled it adds update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  

    // Content that displays in the DOM
  return (
    <>
        <div className="toggle-container">
      <div
        id="toggle"
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
        <div className="toggle-inner"/>
      </div>
      <p>🌗</p>
      </div>
    </>
  )
}


